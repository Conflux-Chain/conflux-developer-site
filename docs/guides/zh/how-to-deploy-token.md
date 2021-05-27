---
id: how_to_deploy_erc20_token
custom_edit_url: https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/guides/zh/how-to-deploy-token.md
keywords:
  - erc20
  - cfxtruffle
---

# 快速部署一个 CRC20 Token
Conflux 提供了兼容 EVM 的虚拟机，以太坊的合约可以快速部署到 Conflux 网络上。并且 Conflux 的代币标准 CRC20，CRC721 也与以太坊兼容。意味着一个 ERC20 合约，可以直接用来在 Conflux 网络上创建一个 CRC20 Token。
本文将演示如何使用 conflux-truffle 在 Conflux 测试网快速部署一个 CRC20 合约。

## 环境准备

### Node.js 环境
conflux-truffle 是使用 Node.js 编写的合约开发工具。因此我们需要先在电脑上安装 Node.js 环境：可以直接到[官网](https://nodejs.org/en/)下载并安装，或使用 Node 版本管理工具 [nvm](https://github.com/nvm-sh/nvm) 来安装。

### conflux-truffle
Node.js 安装好后，可以使用 npm 安装 conflux-truffle，安装成功之后可以在终端运行 `cfxtruffle` 命令:
```sh
# 查看当前 node 版本号
$ node -v
v14.5.0
# 安装 conflux-truffle
$ npm install -g conflux-truffle
# 查看 conflux-truffle 版本
$ cfxtruffle version
Conflux-Truffle v1.0.0-beta11 (core: 5.2.2)
Solidity v0.5.16 (solc-js)
Node v14.15.0
Web3.js v1.2.9
```

### 账户私钥
因为我们要演示在测试网部署 Token 合约，所以还需要准备一个有 CFX 余额的账户私钥，可以使用 [Portal Faucet](./how-to-use-cfx-faucet.md) 领取测 CFX，并导出私钥。


## 具体步骤

### 创建项目
首先我们需要用 `cfxtruffle` 创建一个空项目。

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
├── contracts # 合约代码文件夹
│   └── Migrations.sol
├── migrations # 合约部署迁移脚本目录
│   └── 1_initial_migration.js
├── test # 测试目录
└── truffle-config.js  # 项目配置文件

3 directories, 3 files
```

项目初始化后创建了三个文件夹和一个文件:
* `contracts`: Solidity 合约文件夹
* `migrations`: 合约部署脚本文件夹
* `test`: 测试脚本文件夹
* `truffle-config.js`: 项目配置文件

初始项目带有一个 `Migrations.sol` 合约，及该合约的部署脚本 `1_initial_migration.js` 用于记录项目的合约部署进度。


### 配置项目
`truffle-config.js` 是 truffle 项目的[配置文件](https://www.trufflesuite.com/docs/truffle/reference/configuration)，里面可以配置项目的网络，solidity 编译器等信息。本例中我们会做如下配置：
```js
module.exports = {
  networks: {
    testnet: {
     host: "test.confluxrpc.com",     // Conflux 提供的测试网公开 RPC 服务
     port: 80,
     network_id: 1,       // Conflux 测试网 networkId 为 1
     privateKeys: [process.env.PRIVATE_KEY]  // 添加用于发送交易的账号私钥
    },
  },

  compilers: {
    solc: {
      version: "0.6.9",    // 本合约需要使用 0.6.9 版本的编译器编译
    }
  },
};
```

### 添加合约
接下来我们需要用 cfxtruffle 的 `create` 命令添加一个合约文件。

```shell
$ cfxtruffle create contract CDTE
```
该命令执行完后会在 contracts 目录里创建一个 Solidity 合约文件 `CDTE.sol`，我们可以在里面添加如下合约代码：

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

### 编译合约
合约代码并不能直接用于部署，需要使用 solc 编译成 `bytecode` 和 `abi`。cfxtruffle 集成了 Solidity 编译功能：

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

编译完成后，会创建一个新的目录 `build`，其中包含若干个 json 文件，每个合约对应一个，json 文件中包含合约的各种元信息：name, abi, bytecode, compiler 等信息。

### 部署合约

在 cfxtruffle 中是使用 `migration` 来管理合约的部署的，每个合约需要一个 migration 脚本来部署，我们同样可以用 `create` 命令创建一个 migration：

```sh
$ cfxtruffle create migration CDTE
```
注意：create 命令创建的 migration 脚本文件名前缀是一个时间戳如：`1620979361_c_d_t_e.js` ，我们需要手动修改新创建的脚本名的前缀序号，比如将 `1620979361_c_d_t_e.js` 改为 `2_CDTE_migration.js`。因为合约的部署顺序跟 migration 脚本文件名前缀序号是保持一致的。

在 Migration 脚本中可以编写合约的部署逻辑，通常需要使用 artifacts 引入合约对象，并使用 _deployer 的 [deploy](https://www.trufflesuite.com/docs/truffle/getting-started/running-migrations#deployer-deploy-contract-args-options-) 方法进行部署。如果合约的构造函数有参数，同样可以通过 deploy 方法设置。比如在本例中我们部署的 token 构造函数需要设置一个参数`发行量`。
```js
const CDTE = artifacts.require("CDTE");

module.exports = function(_deployer) {
  // Set initial supply to 2100w
  const totalSupploy = BigInt(2100 * 10000) * BigInt(1e18);
  _deployer.deploy(CDTE, `0x${totalSupploy.toString(16)}`);
};
```

Migration 脚本编写好之后，可以运行 `deploy` 命令来部署合约。
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

第一次部署的时候首先会部署 `Migrations` 合约，用于记录项目合约的部署进度，第二步才会部署我们编写的 CRC20 合约 `CDTE`，终端会把部署过程的信息打印出来，包括：
* transaction hash: 部署交易 hash
* contract address: 合约地址 `CFXTEST:TYPE.CONTRACT:ACHYD5GKND31UPUZ2NM6TAZNK1E0DZVMZUK5WBXM5G`
* account: 部署账号
* balance: 部署账号的余额
* cost(gas used, gas price, storage collateralized): 部署花费的 gas 和 存储抵押

终端输出的 `contract address` 即是 token 的合约地址。

### 使用 Portal 交互
合约部署的时候，我们设置了 Token 的发行量是 2100W，发行账户即是合约的部署账户，我们只需在 Portal 里面添加一下该代币，就可以方便的进行 CDTE 转账了。

![](/img/portal/portal-add-token.png)

![](/img/portal/portal-token-add-success.png)

注意：添加前需要先将 Portal 的网络切换为`测试网`


## 参考

0. [ERC-20 TOKEN STANDARD](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/)
1. [UNDERSTAND THE ERC-20 TOKEN SMART CONTRACT](https://ethereum.org/en/developers/tutorials/understand-the-erc-20-token-smart-contract/)
2. [conflux-truffle](https://www.npmjs.com/package/conflux-truffle)
3. [truffle documentation](https://www.trufflesuite.com/docs/truffle/overview)
4. [Source Code of This Project](https://github.com/conflux-fans/cfxtruffle-crc20)