---
id: how_to_deploy_erc20_token
custom_edit_url: https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/guides/en/how-to-deploy-token.md
keywords:
  - erc20
  - cfxtruffle
---

# How to Quickly Deploy a CRC20 Token
Conflux provides a compatible EVM virtual machine so that the Ethereum contracts can be quickly deployed on the Conflux network. The Conflux's token standard CRC20 and CRC721 are also compatible with Ethereum's, meaning that an ERC20 contract that can be used directly to create a CRC20 Token on the Conflux network.
This article will demonstrate how to quickly deploy a CRC20 contract on the Conflux testnet using [conflux-truffle](https://www.npmjs.com/package/conflux-truffle).

## Environment preparation

### Node.js 
conflux-truffle is a contract development tool written in Node.js. We need to first install the Node.js environment on our computer: you can download and install it directly from the [official website](https://nodejs.org/en/) or use the Node version management tool [nvm](https://github.com/nvm-sh/nvm) to install it.

### conflux-truffle
Once Node.js is installed, you can install conflux-truffle using npm and run the  cfxtruffle command in the terminal:
```sh
# Check the current node version 
$ node -v
v14.5.0
# install conflux-truffle
$ npm install -g conflux-truffle
# Check the conflux-truffle version
$ cfxtruffle version
Conflux-Truffle v1.0.0-beta11 (core: 5.2.2)
Solidity v0.5.16 (solc-js)
Node v14.15.0
Web3.js v1.2.9
```

### Account Private Key
Since we are demonstrating the deployment of Token contracts on the test-net, we need to have an account private key with CFX in it. You can use [Portal Faucet](./how-to-use-cfx-faucet.md) to get the test CFX and export the private key.


## Instruction

### Creating a project
First, we need to create an empty project with  cfxtruffle

```sh
$ mkdir simple-crc20
$ cd simple-crc20
$ cfxtruffle init

Starting init...
================

> Copying project files to /Users/xxxx/simple-crc20

Init successful, sweet!
$ tree
.
├── contracts # contract code folder
│   └── Migrations.sol
├── migrations  # contract deployment migration script directory
│   └── 1_initial_migration.js
├── test # test catalog
└── truffle-config.js  # project configuration file

3 directories, 3 files
```

Three folders and one file are created after the project is initialized:
* `contracts`:  Solidity contract folder
* `migrations`: Contract deployment scripts folder
* `test`: Test scripts folder
* `truffle-config.js`: Project configuration file

The initial project comes with a  `Migrations.sol` contract and a deployment script  `1_initial_migration.js` for that contract, which is used to record the progress of the project's contract deployment.

### Configuring the project
 `truffle-config.js` is the [configuration file](https://www.trufflesuite.com/docs/truffle/reference/configuration) of the truffle project. You can use this to configure the project's network, solidity compiler, etc. In this case we will set the following configuration：
```js
module.exports = {
  networks: {
    testnet: {
     host: "test.confluxrpc.com",     // Conflux provides public RPC services for testnet
     port: 80,
     network_id: 1,       // Conflux testnet networkId is 1
     privateKeys: [process.env.PRIVATE_KEY]  //  Adding the account private key used for sending transactions
    },
  },

  compilers: {
    solc: {
      version: "0.6.9",    // This contract needs to be compiled with the 0.6.9 version compiler
    }
  },
};
```

Note: users should fill their own private key in `privateKeys` field.

### Adding a contract
Next, we need to add a contract file using cfxtruffle's  create command.

```shell
$ cfxtruffle create contract CDTE
```
After the command is executed, a Solidity contract file  CDTE.sol will be created in the contracts directory. We can add the following contract code to the file：

```javascript
// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

// ERC20 interface
interface IERC20 {
    function totalSupply() external view returns (uint256);

    function balanceOf(address account) external view returns (uint256);

    function allowance(address owner, address spender) external view returns (uint256);

    function transfer(address recipient, uint256 amount) external returns (bool);

    function approve(address spender, uint256 amount) external returns (bool);

    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);

    event Transfer(address indexed from, address indexed to, uint256 value);
    
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

// CDTE contract
contract CDTE is IERC20 {
    string public constant name = "ConfluxDeveloperTokenExample";
    string public constant symbol = "CDTE";
    uint8 public constant decimals = 18;

    event Approval(address indexed tokenOwner, address indexed spender, uint256 tokens);
    event Transfer(address indexed from, address indexed to, uint256 tokens);

    mapping(address => uint256) balances;

    mapping(address => mapping(address => uint256)) allowed;

    uint256 totalSupply_;

    using SafeMath for uint256;

    constructor(uint256 total) public {
        totalSupply_ = total;
        balances[msg.sender] = totalSupply_;
    }

    function totalSupply() public view override returns (uint256) {
        return totalSupply_;
    }

    function balanceOf(address tokenOwner) public view override returns (uint256) {
        return balances[tokenOwner];
    }

    function transfer(address receiver, uint256 numTokens) public override returns (bool) {
        require(numTokens <= balances[msg.sender]);
        balances[msg.sender] = balances[msg.sender].sub(numTokens);
        balances[receiver] = balances[receiver].add(numTokens);
        emit Transfer(msg.sender, receiver, numTokens);
        return true;
    }

    function approve(address delegate, uint256 numTokens) public override returns (bool) {
        allowed[msg.sender][delegate] = numTokens;
        emit Approval(msg.sender, delegate, numTokens);
        return true;
    }

    function allowance(address owner, address delegate) public view override returns (uint256) {
        return allowed[owner][delegate];
    }

    function transferFrom(address owner, address buyer, uint256 numTokens) public override returns (bool) {
        require(numTokens <= balances[owner]);
        require(numTokens <= allowed[owner][msg.sender]);

        balances[owner] = balances[owner].sub(numTokens);
        allowed[owner][msg.sender] = allowed[owner][msg.sender].sub(numTokens);
        balances[buyer] = balances[buyer].add(numTokens);
        emit Transfer(owner, buyer, numTokens);
        return true;
    }
}

library SafeMath {
    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        assert(b <= a);
        return a - b;
    }

    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        assert(c >= a);
        return c;
    }
}

```

### Compiling Contracts
The contract code can not be directly used for deployment and needs to be compiled into  bytecode and  abi using solc. cfxtruffle integrates with Solidity's compilation features:

```sh
$ cfxtruffle compile

Compiling your contracts...
===========================
> Compiling ./contracts/Migrations.sol
> Compiling ./contracts/CDTE.sol
> Artifacts written to /Users/xxxx/simple-crc20/build/contracts
> Compiled successfully using:
   - solc: 0.6.9+commit.3e3065ac.Emscripten.clang
```

After compilation, a new directory  build will be created, which contains several json files, one for each contract. The json files contain various meta-information regarding the contract: name, abi, bytecode, compiler, etc.

### Deploying contracts
In cfxtruffle,  migration is used to manage the deployment of the contract. Each contract requires a migration script to be deployed. We cn also use  create commend and create a migration:


```sh
$ cfxtruffle create migration CDTE
```
Note: The migration script name created by the create command is prefixed with a time stamp such as  1620979361_c_d_t_e.js, we need to manually change the prefix serial number of the script name. For example, change  1620979361_c_d_t_e.js to  2_CDTE_ migration.js. This is because the order of deployment is consistent with the prefix number of the migration script file name.

You can code the logic of contract's deployment in the Migration script usually by using artifacts to import the contract objects and deployit by using _deployer's [deploy](https://www.trufflesuite.com/docs/truffle/getting-started/running-migrations#deployer-deploy-contract-args-options-). If the contract constructor has parameters, they can also be set via the deploy method. In our example, for the token constructor we deployed, we need to set the parameter `issurance amount`. 
```js
const CDTE = artifacts.require("CDTE");

module.exports = function(_deployer) {
  // Set initial supply to 2100w
  const totalSupploy = BigInt(2100 * 10000) * BigInt(1e18);
  _deployer.deploy(CDTE, `0x${totalSupploy.toString(16)}`);
};
```

Once the Migration script is written, you can run the `deploy` command to deploy the contract.
```sh
$ cfxtruffle deploy --network testnet
Compiling your contracts...
===========================
> Compiling ./contracts/CDTE.sol
> Artifacts written to /Users/xxx/simple-crc20/build/contracts
> Compiled successfully using:
   - solc: 0.6.9+commit.3e3065ac.Emscripten.clang



Starting migrations...
======================
> Network name:    'development'
> Network id:      1
> Block gas limit: 30000000 (0x1c9c380)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x0d06376b3ea86409ebfa6b5d9465dd72d3faded43e5697beec89f8571a037802
   > Blocks: 9            Seconds: 4
   > contract address:    CFXTEST:TYPE.CONTRACT:ACGBUDPHE2UWTW3PG139CBKM3B781JVEVUM80YAAJZ
   > block number:        26192247
   > block timestamp:     1620979778
   > account:             CFXTEST:TYPE.USER:AAK2RRA2NJVD77EZWJVX04KKDS9FZAGFE6D5R8E957
   > balance:             46.624999999998842876
   > gas used:            206555 (0x326db)
   > gas price:           0.000000001 GDrip
   > storage collateralized: 0.5625 CFX
   > value sent:          0 CFX
   > total cost:          0.562500000000206555 CFX


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.562500000000206555 CFX


2_cdte_migration.js
===================

   Deploying 'CDTE'
   ----------------
   > transaction hash:    0x794540ccd40d3d40fc09c93ff8253bfc0ffc99eb302afe3591c094762664f382
   > Blocks: 6            Seconds: 4
   > contract address:    CFXTEST:TYPE.CONTRACT:ACHYD5GKND31UPUZ2NM6TAZNK1E0DZVMZUK5WBXM5G
   > block number:        26192269
   > block timestamp:     1620979790
   > account:             CFXTEST:TYPE.USER:AAK2RRA2NJVD77EZWJVX04KKDS9FZAGFE6D5R8E957
   > balance:             44.437499999997921785
   > gas used:            894093 (0xda48d)
   > gas price:           0.000000001 GDrip
   > storage collateralized: 2.125 CFX
   > value sent:          0 CFX
   > total cost:          2.125000000000894093 CFX


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     2.125000000000894093 CFX


Summary
=======
> Total deployments:   2
> Final cost:          2.687500000001100648 CFX
```

The first deployment will deploy the  `Migrations` contract first, which is used to record the deployment progress of the project contract. We will deploy our written CRC20 contract `CDTE` in the second step. The terminal will print out information about the deployment process, including：
* transaction hash: deployed transaction hash
* contract address: `CFXTEST:TYPE.CONTRACT:ACHYD5GKND31UPUZ2NM6TAZNK1E0DZVMZUK5WBXM5G`
* account: deployed account
* balance: deployed account balance
* cost(gas used, gas price, storage collateralized): Deployment cost of gas and storage collateral

The contract address output from the terminal is the contract address of the token.

### Interacting with the Portal
Interacting with the Portal

![](/img/portal/portal-add-token.png)

![](/img/portal/portal-token-add-success.png)

Note: before adding,  you need to switch the network of the Portal to `test network` 


## Reference
0. [ERC-20 TOKEN STANDARD](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/)
1. [UNDERSTAND THE ERC-20 TOKEN SMART CONTRACT](https://ethereum.org/en/developers/tutorials/understand-the-erc-20-token-smart-contract/)
2. [conflux-truffle](https://www.npmjs.com/package/conflux-truffle)
3. [truffle documentation](https://www.trufflesuite.com/docs/truffle/overview)
4. [Source Code of This Project](https://github.com/conflux-fans/cfxtruffle-crc20)