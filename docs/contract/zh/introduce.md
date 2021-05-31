---
id: contract_introduction
custom_edit_url: https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/contract/zh/introduce.md
keywords:
  - contract introduction
---
# 智能合约介绍
## 什么是智能合约
智能合约概念于1995年由Nick Szabo首次提出。智能合约（Smart contract ）是一种旨在以信息化方式传播、验证或执行合同的计算机协议。智能合约允许在没有第三方的情况下进行可信交易，这些交易可追踪且不可逆转。
其的目的是提供优于传统合约的安全方法，并减少与合约相关的其他交易成本。

在Conflux链上，“智能合约”是一个简单的程序，运行在Conflux链上，每一个智能合约实例就是一个代码和数据的集合，驻留在conflux链上一个特定的地址上。由于区块链上的状态都是确定的，可以保证为每个运行它们的人产生相同的结果。而由于智能合约运行在区块链上，区块链的去中心化及不可篡改特性保证了合约运行的确定性及安全性。所以可以基于智能合约创建广泛的去中心化应用程序(DApps) ，其中包括游戏、数字收藏品、在线投票系统、金融产品等。

Conflux链上有两种账户类型，普通账户和智能合约账户；智能合约部署完成后会为该实例创建一个智能合约账户。智能合约账户也有CFX余额，也可以与其它合约交互。但它们不是由用户控制的，而是部署到网络并按照程序运行的。然后，用户帐户可以通过提交执行智能合约上定义的函数的交易与智能合约进行交互。智能合约可以像传统的合同一样定义规则，并通过代码自动执行它们。

Nick Szabo 使用了自动售货机的基本例子来描述如何将现实世界的合同义务编程到软件和硬件系统中。每个人只要把正确数量的硬币放入机器，就可以期望得到一个产品作为交换。同样，在 Conflux 上，智能合约也是在满足某种特定的条件就能执行指定的任务得到特定的结果。


## 示例
我们看一个最简单自动售货机智能合约实现
```js
pragma solidity ^0.8.0;

contract VendingMachine {

    // Declare state variables of the contract
    address public owner;
    mapping (address => uint) public cupcakeBalances;

    // Declare event for record purchase event
    event Purchase(address customer, uint amount);

    // When 'VendingMachine' contract is deployed:
    // 1. set the deploying address as the owner of the contract
    // 2. set the deployed smart contract's cupcake balance to 100
    constructor() {
        owner = msg.sender;
        cupcakeBalances[address(this)] = 100;
    }

    // Get user's cupcake balance
    function balanceOf(address user) public view returns(uint) {
        return cupcakeBalances[user];
    }

    // Allow the owner to increase the smart contract's cupcake balance
    function refill(uint amount) public {
        require(msg.sender == owner, "Only the owner can refill.");
        cupcakeBalances[address(this)] += amount;
    }

    // Allow anyone to purchase cupcakes
    function purchase(uint amount) public payable {
        require(msg.value >= amount * 1 ether, "You must pay at least 1 CFX per cupcake");
        require(cupcakeBalances[address(this)] >= amount, "Not enough cupcakes in stock to complete this purchase");
        cupcakeBalances[address(this)] -= amount;
        cupcakeBalances[msg.sender] += amount;
        emit Purchase(msg.sender,amount);
    }
}
```
该合约有两个功能，`refill`方法实现管理员补充货物，`purchase`方法实现顾客投币买货；就像自动售货机消除了对售货员的需求一样，智能合约可以取代许多行业的中介机构。

智能合约就是一组代码（合约函数) 和数据（合约状态变量）, 如语句`mapping (address => uint) public cupcakeBalances;`是声明一个名称为`cupcakeBalances`, 类型为`mapping (address => uint)`的状态变量，你可以认为它是数据库里的一个表。而合约函数`refill`和`purchase`的作用就是读取或修改该数据库表中数据的状态。

该合约由`solidity`语言实现，语法与`javascript`相似。
- `pragma solidity ^0.8.0;`表明该合约需要用`>=0.8.0<0.9.0`的编译器编译；
- `contract VendingMachine`指定合约名称为`VendingMachine`；
- `address public owner;`定义了名称为`owner`，类型为`address`的公开状态变量；
- `event Purchase(address customer, uint amount);`定义了名称为`Purchase`的`event`，`event`类似于其他语言的日志功能，其作用主要是记录合约执行时的一些重要信息。如`Purchase`用于在顾客购买商品时产生购买记录的event
- `constrctor`函数为构造函数，在且只在部署合约时运行；
- `balanceOf`函数用`view`修改，表示为只读函数，不能修改合约状态；
- `refill`函数为普通函数，通过发送交易的方式调用，会改变合约装状态；
  - `require(msg.sender == owner,..);`表示只有满足条件`msg.sender == owner`时即调用者为管理员时才能修改合约变量`cupcakeBalances`的状态，完成补货；
- `purchase`函数有`payable`关键字修饰，表示在调用该函数时可以同时发送CFX，由于顾客需要支付CFX才能购买货物，所以用`payable`修饰
  - `require(msg.value >= amount * 1 ether,..)`表示必须支付足额的CFX才能购买
  - 购买成功后售货机数量减少，用户拥有的货物数量增加，`cupcakeBalances[msg.sender]`表示用户拥有的货物数量

合约书写完成后需要先编译、然后通过发送[交易](https://developer.confluxnetwork.org/introduction/en/conflux_basics#transactions)的方式部署到conflux链上。然后就可以通过调用合约的方式和合约交互了。

合约一旦部署，任何人可以调用，但只有满足条件才能触发合约状态改变。

更详细的solidity语法介绍请参考[solidity官方文档](https://docs.soliditylang.org/en/v0.8.4/)

下面介绍编译、部署、调用及合约执行的过程
### 编译
合约编译就是通过编译器将合约代码生成部署合约需要的元素的过程。编译结果中主要有两部分`abi`和`bytecode`是我们需要用到的。

- Bytecode: 智能合约是在EVM中执行的，Bytecode是EVM可以识别的合约对应的16进制值。

- ABI: ABI全称Application Binary Interface，即应用二进制接口。ABI用JSON格式描述了合约中公开函数的函数名、修饰符、可见性、参数名称及其类型、返回值名称及其类型，以及Event的描述。目的是为了我们在外部调用合约函数时可以根据ABI中该函数的描述按照特定的方法进行编码从而得到一个EVM可以识别的值，以16进制格式显示；使用该值就可以与合约交互。

编译智能合约可以使用`solc`, [conflux-truffle](https://github.com/Conflux-Chain/conflux-truffle)等进行。

这里以solc为例说明。

安装solc
```sh
npm install -g solc
```
> 注意：编译器版本需要与合约指定的版本匹配，如需下载指定版本v0.6.12使用`npm install -g solc@v0.6.12`

编译
```
solcjs ./VendingMachine.sol --bin --abi
```
将生成 `bytecode` 文件 `__...VendingMachine.bin` 和 `abi` 文件 `__...VendingMachine.abi`

`__...VendingMachine.bin`
```
60806040523480156100...bfea2646970667358221220761301cb41bc1e4c37cc823f17fd695c6c09521a3e09fe1e8a7c51f6e77181a464736f6c63430008000033
```

`__...VendingMachine.abi`
```json
[
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "customer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Purchase",
      "type": "event"
    },
    ......
  ]
```

### 部署
合约部署就是在conflux区块链上创建一个合约实例，通过发送一笔`data`为`bytecode`，`to`留空的[交易](https://developer.confluxnetwork.org/introduction/en/conflux_basics#transactions)即可实现合约部署。

> 如果构造函数带参数，则`data`应为`bytecode`与对`构造参数`ABI编码后组合而成的值

这里用`js-conflux-sdk`举例
```js
const { Conflux } = require("js-conflux-sdk");

(async function () {
    const cfx = await Conflux.create({ url: "https://test.confluxrpc.com" })
    const account = cfx.wallet.addPrivateKey("0x2139FB4C55CB9AF7F0086CD800962C2E9013E2292BAE77978A9209E3BEE71D49")

    // your bytecode
    let bytecode = "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffff......0008000033"

    let deployReceipt = await cfx.sendTransaction({
        from: account.address,
        data: bytecode
    }).executed()

    // or use contract instance
    // let vendingMachine = cfx.Contract({ bytecode })
    // let deployReceipt = await vendingMachine.constructor().sendTransaction({from:account.address}).executed()

    console.log("deploy tx receipt:", deployReceipt)
})()

```
如示例所示，发送一笔data为bytecode的[交易](https://developer.confluxnetwork.org/introduction/en/conflux_basics#transactions)即实现了合约部署，部署完成后，`transaction receipt` 的`contractCreated` 字段就是部署完成的合约地址
```js
deploy tx receipt: {
  blockHash: '0xe1b7f118447d3f945db4c2cf5752e592e542d4b9d24d0312b4ca5fce925c1ae5',
  contractCreated: 'CFXTEST:TYPE.CONTRACT:ACCYSPEUUR469BCA0EXRFXKXMKX651W45JFW2RN5M0',
  epochNumber: 27675623,
  from: 'CFXTEST:TYPE.USER:AAP9KTHVCTUNVF030RBKK9K7ZBZYZ12DAJP1U3SP4G',
  gasCoveredBySponsor: false,
  gasFee: 646047n,
  gasUsed: 646047n,
  index: 1,
  logs: [],
  logsBloom: '0x...',
  outcomeStatus: 0,
  stateRoot: '0xd2ada6e3c04d6e8260446deaf1b8289d57ba84e2d82387155bbb397be93e2a30',
  storageCollateralized: 1664n,
  storageCoveredBySponsor: false,
  storageReleased: [],
  to: null,
  transactionHash: '0xe19d8a7527a7f655f0325374a5d483ed4459f465a2f7f9d3ac9a23a548eac5c4',
  txExecErrorMsg: null
}
```
这里为了更好的说明合约部署原理使用直接发[交易](https://developer.confluxnetwork.org/introduction/en/conflux_basics#transactions)的方式，当合约有带参数的构造函数参数，更友好的方式是使用[`js-conflux-sdk` `contract`](https://github.com/Conflux-Chain/js-conflux-sdk/blob/master/docs/interact_with_contract.md)对象进行，或者使用 [`conflux-truffle`](https://github.com/Conflux-Chain/conflux-truffle) 等合约开发工具部署。

### 调用
合约部署完成后，就可以跟合约交互了，交互方式分两种

- 一种调用方式是通过 rpc `cfx_call`，这种只是在EVM中执行该合约调用但不实际改变状态，通常用于调用只读合约函数或者模拟执行合约查看是否合约能够执行成功

- 另一种合约调用方式是通过发送[交易](https://developer.confluxnetwork.org/introduction/en/conflux_basics#transactions)的方式完成，这时会执行合约并改变合约状态。

调用合约时使用的data是根据ABI描述的函数信息经过[ABI编码](https://docs.soliditylang.org/en/develop/abi-spec.html)的方式生成的。其中前4个字节为函数选择器(函数签名的 Keccak（SHA-3）哈希的前4字节)，第五个字节开始为被编码的参数。

我们以 js-conflux-sdk 为例调用合约
```js
const { Conflux } = require("js-conflux-sdk");

(async function () {
    const cfx = await Conflux.create({ url: "https://test.confluxrpc.com", logger: console })
    const me = cfx.wallet.addPrivateKey("0x2139FB4C55CB9AF7F0086CD800962C2E9013E2292BAE77978A9209E3BEE71D49")

    const abi = [...]
    const contract = cfx.Contract({ address: "CFXTEST:TYPE.CONTRACT:ACCYSPEUUR469BCA0EXRFXKXMKX651W45JFW2RN5M0", abi })
    let myBalance = await contract.balanceOf(me.address)
    console.log("my cupcake balance :", myBalance)

    const receipt = await contract.purchase(2).sendTransaction({ from: me.address, value: 2e18 }).executed()
    console.log("purchase receipt", receipt)

    const event = contract.abi.decodeLog(receipt.logs[0])
    console.log("purchase event:", event)

    myBalance = await contract.balanceOf(me.address)
    console.log("after purchase, my cupcake balance :", myBalance)
})()
```
从 log 中可以看到 `contract.cupcakeBalances(me.address)`对应的 rpc 信息为
```js
{
  data: {
    jsonrpc: '2.0',
    id: '1794b9e755639b5164925a8e',
    method: 'cfx_call',
    params: [
      {
        to: 'CFXTEST:TYPE.CONTRACT:ACCYSPEUUR469BCA0EXRFXKXMKX651W45JFW2RN5M0',
        data: '0xe18a7b9200000000000000000000000019f4bcf113e0b896d9b34294fd3da86b4adf0302'
      },
      undefined
    ]
  },
  result: '0x0000000000000000000000000000000000000000000000000000000000000000',
  duration: 33
}
```
rpc method 为`cfx_call`， data为`函数选择器 + 对参数列表ABI编码`的结果，前4字节`0xe18a7b92`为函数`balanceOf`的函数选择器，计算方法为对`balanceOf`的签名`balanceOf(address)`做keccak运算`keccak256("balanceOf(address)")`后取前4字节。后面的字节`00000000000000000000000019f4bcf113e0b896d9b34294fd3da86b4adf0302`为参数 `address` 类型, 值 `0x19f4bcf113e0b896d9b34294fd3da86b4adf0302` 的ABI编码结果。

返回值`0x0000000000000000000000000000000000000000000000000000000000000000`是 类型  `uint`, 值 `0` 的编码结果。

而`purchase`的 rpc method 为`cfx_sendRawTransaction`，即发送一笔[交易](https://developer.confluxnetwork.org/introduction/en/conflux_basics#transactions)，这会改变合约状态。可以通过 `getTransactionByHash` 看到该交易的 `data` 也是同样的 `函数选择器 + 对参数列表ABI编码`。
```json
{
  "jsonrpc": "2.0",
  "result": {
    "data": "0xefef39a10000000000000000000000000000000000000000000000000000000000000002",
    "hash": "0x2c188c67247d7e2bf12fb96f17ced61da8ea4143447887a10a2cc597c1fa66e1",
    "to": "CFXTEST:TYPE.CONTRACT:ACCYSPEUUR469BCA0EXRFXKXMKX651W45JFW2RN5M0",
    "value": "0x1bc16d674ec80000"
    ...
  },
  "id": 1
}
```

从`transaction receipt`中可以看到`logs`字段有一条记录，`logs`表示该笔交易发生的事件
```js
purchase receipt {
  blockHash: '0x3d4111b299e65c279184aa83021e59f9d134baa9c78969dd6d94a92bfbd340df',
  contractCreated: null,
  epochNumber: 27677382,
  from: 'CFXTEST:TYPE.USER:AAP9KTHVCTUNVF030RBKK9K7ZBZYZ12DAJP1U3SP4G',
  ......
  logs: [
    {
      address: 'CFXTEST:TYPE.CONTRACT:ACCYSPEUUR469BCA0EXRFXKXMKX651W45JFW2RN5M0',
      data: '0x00000000000000000000000019f4bcf113e0b896d9b34294fd3da86b4adf03020000000000000000000000000000000000000000000000000000000000000002',
      topics: [Array]
    }
  ],
}
```
事件解析结果为
```js
purchase event: {
  name: 'Purchase',
  fullName: 'Purchase(address customer, uint256 amount)',
  type: 'Purchase(address,uint256)',
  signature: '0x2499a5330ab0979cc612135e7883ebc3cd5c9f7a8508f042540c34723348f632',
  array: [ 'cfxtest:aap9kthvctunvf030rbkk9k7zbzyz12dajp1u3sp4g', 2n ],
  object: {
    customer: 'cfxtest:aap9kthvctunvf030rbkk9k7zbzyz12dajp1u3sp4g',
    amount: 2n
  }
}
```
表示发生了一个`Purchase`事件，customer为`cfxtest:aap9kthvctunvf030rbkk9k7zbzyz12dajp1u3sp4g`，数量为2

`purchase`完成后，`cupcakeBalances[0x19f4bcf113e0b896d9b34294fd3da86b4adf0302]` 由 0 变为 2。状态发生改变。
```js
{
  data: {
    jsonrpc: '2.0',
    id: '179a19eb98ed23dda1d1d516',
    method: 'cfx_call',
    params: [ [Object], undefined ]
  },
  result: '0x0000000000000000000000000000000000000000000000000000000000000002',
  duration: 30
}
```

> 需要注意的是，Conflux链上在部署合约和调用合约的时候，如果在合约中新增存储空间占用时，需要为占用的存储空间抵押一部分cfx；该部分费用会在存储释放后返还，详情参见[Conflux的存储抵押机制](https://juejin.cn/post/6855551378123653127)

## 深入学习
智能合约开发除了solidity语言外，还有vyper等
- [Solidity](https://docs.soliditylang.org/en/v0.8.4/)
- [Vyper](https://vyper.readthedocs.io/en/stable/)

Conflux有更友好的智能开发工具供开发者使用，提高开发效率
- [Conflux-Truffle](https://github.com/Conflux-Chain/conflux-truffle)

其它
- [Conflux基本概念介绍](https://developer.conflux-chain.org/introduction/en/conflux_basics)
- [Ethereum对智能合约的介绍](https://ethereum.org/zh/developers/docs/smart-contracts/)