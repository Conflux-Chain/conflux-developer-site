---
id: transaction_explain
title: Conflux 交易详解
custom_edit_url: https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/sending-tx/zh/sending-tx-ultimate-guide.md
keywords:
  - transaction
---

发送交易（Transaction） 是同 Conflux 网络交互的唯一方式，不管是发送 CFX 还是同合约交互（修改合约链上状态）都只能通过发送交易来实现。
发送交易包含三个步骤：交易构造，签名，发送。通常各语言 SDK 会提供封装好的方法，直接调用即可。
但如果你想了解更多底层细节，或者发送交易遇到了问题，本文可能会有一些帮助。

## 如何构造一笔交易

构造一笔交易首先需要准备交易的各个字段，包括：

* `from`
* `to`
* `value`
* `nonce`
* `data`
* `gas`
* `gasPrice`
* `storageLimit`
* `chainId`
* `epochHeight`

### 基本字段

`from`, `to`, `value` 是一笔交易的最基本字段，分别表示交易的`发起账户`，`目的账户`，`金额`。

`from` 非常容易确定，直接选择一个有 CFX 余额的外部账户（非合约账户）地址即可。如果交易的目的账户是一个有 sponsor 的合约，发起账户甚至不要求有 CFX 余额。账户的余额可以通过 RPC `cfx_getBalance` 方法查询。

`to` 是交易的目的账户：如果只是想发起一笔 CFX 转账，那 `to` 直接设为 CFX 目的账户即可；如果需要改变合约状态，则 `to` 需要设置为合约地址；如果是创建合约，`to` 直接留空。

`value` 表示一笔交易的 CFX 转账金额，需设置一个`单位为 Drip` 的整数。

### nonce

`nonce` 是一个账户已经发送交易的数量，也是一个账户发送交易的执行序号，可以通过 RPC 方法 `cfx_getNextNonce` 查询，有以下几个特点：

1. 交易在区块链上的执行是按照 nonce 从小到大的顺序执行。
2. nonce 初始值是 0，每执行一笔交易 nonce 加一。
3. 使用过的 nonce 不能再次使用
4. nonce 不能跳跃使用：假设某账户的当前 nonce 为 n，如果把交易的 nonce 设置为 >n 的值，则交易不会执行，直到 nonce < n 的所有交易执行完成，nonce 为 n 的交易才会被执行。
5. 交易通过 `cfx_sendRawTransaction` 方法发送之后，不会立刻执行，需要先等待矿工打包，打包后还需要延迟 5 个 Epoch 才会执行，交易执行之后，账户的 nonce 才会加一。

正确设置 nonce，是交易能顺利执行的关键，许多开发者会遇到交易发送成功，但一直无法查询到执行结果（Receipt）的情况，大部分是因为使用了一个跳跃的 nonce，而致使交易被卡在交易池中，一直等待其前边的交易执行。

使用 SDK 构造交易时，nonce 可以不用手动设置，SDK 会自动调用 `cfx_getNonce` 来获取 nonce。但如果你需要批量发送交易，由于交易从发送到执行需要一段时间，交易发送过快，使用 `cfx_getNonce` 获取 nonce 方式会导致 nonce 重复使用的问题。这种情况需要开发者手动管理 nonce：每发送一笔交易记录交易的 hash，并自行 nonce 加一，并用它来构建交易。

### 手续费相关字段

交易发送到网络中后，是由矿工负责打包和执行的。矿工打包交易会收取一定的手续费，该费用可以激励矿工参与挖矿，从而保证整个网络的持续运转。
在 Conflux 网络中交易费用使用 CFX 支付。由交易发起者通过交易的 `gas` 和 `gasPrice` 两个字段指定。

`gas` 字段用于指定一笔交易被执行时最大能被支付的 gas 数量上限，可以理解为交易执行所能消耗 gas 的 `limit` 即 `gas(gasLimit)`。矿工执行交易时，内部会执行许多指令，不同的指令会消耗不同数量的 gas。如果交易实际执行消耗 gas 总数超过交易指定的 `gas(gasLimit)`，交易执行将会失败。普通的 CFX 转账交易会消耗 `21000` gas。如果与合约交互，则消耗的 gas 跟合约对应的 opcode 复杂程度相关，这种情况可以通过 `cfx_estimateGasAndCollateral` 方法来预估。该方法会返回两个 gas 相关字段 `gasUsed`, `gasLimit` 前者为预估时交易执行实际消耗的 gas 数量，后者为发送交易建议设置的 `gas(gasLimit)` 值，会比 `gasUsed` 略大，主要为了避免预估不准确（偏小）导致交易失败的情况。交易的 `gas(gasLimit)` 值比实际使用的 gas 多的部分将会被退回，但最多只会退回 `gas(gasLimit)` 的四分之一。因此合理的设置交易 `gas(gasLimit)` 非常重要。

`gasPrice` 是由交易发起者设置的愿为每 gas 支付的 CFX 数量，单位为 Drip。因此交易执行被收取的 gas 费用计算方法为 `gas(gasLimit)` * `gasPrice`。

矿工打包交易时会优先打包支付费用较高的交易，因此如果网络比较拥堵的时候，通过提高 `gasPrice` 值可以加快交易的打包速度。如果交易因为某种原因被卡主，或者想加快交易的打包速度，可以尝试提高 `gasPrice` 并使用相同的 nonce 重发一次。Fullnode 提供了一个 RPC 方法 `cfx_gasPrice` 会根据当前的网络情况，返回一个合理的 `gasPrice` 值。

除了交易手续费，在 Conflux 网络中，如果发送的交易执行后占用了新的存储空间，则还需为该空间占用抵押一些 CFX，抵押 CFX 产生的年化 %4 利息会支付给矿工。如果占用的空间被释放，抵押的 CFX 也将会被归还。具体抵押规则为，每新占用 1KB 空间，需要抵押 1CFX。`storageLimit` 字段用于指定一笔交易执行所能占空的空间上限，单位为 byte。`storageLimit` 指定值比实际使用多的部分会全部退回，不收取费用。

因此当发送一笔交易时，需要保证发送账户有足够的余额支付：`value + storageLimit * (10^18/1024) + gas * gasPrice`，如果余额不够，交易可能会被卡在交易池中。如果是跟合约交互的交易，并且合约有赞助商，则只需保证余额够支付 value 即可。

当前各 SDK 会自动调用 `cfx_estimateGasAndCollateral` 方法为交易设置合理的 `gas`, `storageLimit` 值，并调用 `cfx_gasPrice` 方法设置合理的 `gasPrice` 值，当然也支持用户自行指定更合理的值。

### data

交易的 data 字段，可以为空，也可以设置为一个 hex 编码的字节数组。大致分为三种情况：

* 普通 CFX 转账交易：`data` 字段通常为空，但也可以设置一个 hex 编码的数据，通常用于作为交易备注或附言。
* 合约部署交易：`data` 需要设置为合约的 bytecode，以及构造函数的参数（如果有的话）
* 合约调用交易：`data` 字段用于存放合约调用的输入数据，通常是合约方法及参数 abi 编码后的数据，当调用合约 fallback 函数时 data 留空即可

智能合约通常由高级合约开发语言（Solidity， vyper）编写，然后使用编译器进行编译即可得到 bytecode 和 abi。SDK 会提供 abi 编码方法用于合约方法调用的编码（对方法名和参数编码）。

### 其他

`chainId` 是用来标识一条链的，当前Conflux 主网的 chainId 为 1029，测试网为 1。交易中包含 chainId 主要是为了防止交易重放攻击。该字段一般不需要手动填写，SDK 会自动通过 `cfx_getStatus` 方法获取当前 RPC 的 chainId。

`epochHeight` 是用来指定一笔交易的执行目标 Epoch 范围的，交易只会在 [Te − 100000, Te + 100000] 范围执行，如果当前链的 Epoch 超过该范围，交易会被直接跳过。SDK 同样会帮用户自动设置该字段，通常会设置为 `cfx_epochNumber` 方法获取的当前 Epoch。

## 交易编码和签名

交易的各字段确定之后，需要按一定格式进行 rlp 编码，并使用发送账户的私钥对编码的 keccak256 hash 进行签名，最后将两者组装成 rawTransaction。rawTransaction 可以通过 `cfx_sendRawTransaction` 方法发送到 Conflux 网络中，等待被矿工打包并执行。

具体操作步骤为（以 js-conflux-sdk 为例）：

1. 将交易的各个字段解析为 buffer
2. 将各个字段按照 `(nonce, gasPrice, gas, to, value, storageLimit, epochHeight, chainId, data)` 的顺序组装为一个数组或元组，并进行 rlp 编码。
3. 对编码结果进行 `keccak256` 运算获取 hash
4. 使用发送账户的私钥对上一步的 hash 进行 ecdsaSign 签名运算，得到 r，s，v
5. 将所有信息按照 `((nonce, gasPrice, gas, to, value, storageLimit, epochHeight, chainId, data), v, r, s)` 组装起来，并进行 rlp 编码。
6. 最终将上步编码后的 buffer 转换为 hex 字符串，即可得到可直接发送的 rawTransaction。

## 如何查询交易详情和状态

交易成功发送后，会先被放到节点的交易池中，等满足打包条件后，会被矿工打包进最新的区块中。这时可以通过 `cfx_getTransactionByHash` 查询交易的信息和状态。
返回结果的 `status` 字段表示交易的执行状态:

* `null`: 未执行
* `0x0`: 执行成功
* `0x2`: 交易被跳过

```json
{
    "jsonrpc": "2.0",
    "result": {
        "blockHash": "0x398879d9e7d37e2cc87af268fcd2207a689e2e84986e9251a5343dafca3d93b7",
        "chainId": "0x405",
        "contractCreated": null,
        "data": "0x",
        "epochHeight": "0xd03609",
        "from": "CFX:TYPE.USER:AAKETJH9TKJ5G2K4ZX3KFVB9VKKU8NR956N0EN4FHE",
        "gas": "0x5208",
        "gasPrice": "0x2540be400",
        "hash": "0xa76efec071e0779785b6653aebb2382a5e460b60a163a1b166df3c8164cec6d9",
        "nonce": "0xa08d9",
        "r": "0x38e661ad41790c069a4795df21eade5ef9605dbcbdfd5dabbb0dc322e833e4c1",
        "s": "0x66ca875464c554261033f4522281d564bdba4f0189d357579dcbf2b1ed98936b",
        "status": "0x0",
        "storageLimit": "0x0",
        "to": "CFX:TYPE.USER:AATT0JGE4J70V4H0Z43VJ9M29ZJ7ASNS0YA238MGZC",
        "transactionIndex": "0x1",
        "v": "0x0",
        "value": "0xde0b93b7d70bec0"
    },
    "id": "15922956697249514502"
}
```

交易被打包之后不会立刻执行，这时交易的 `status` 为 `null`。延迟 4 个 Epoch 后，交易的 status 应该变为 `0x0` 或 `0x1`, `0x2`. 其中 `0x0` 表示成功，`0x1` 为失败, `0x2` 表示跳过。

也可以通过 `cfx_getTransactionReceipt` 获取交易的执行回执，只有当交易被执行之后才能获取到 receipt，否则将会返回 `null`。receipt 包含一个字段 `outcomeStatus` 也可以用于判断交易是否执行成功：`0x0` 表示成功，其他表示失败。

```json
{
    "jsonrpc": "2.0",
    "result": {
        "blockHash": "0x398879d9e7d37e2cc87af268fcd2207a689e2e84986e9251a5343dafca3d93b7",
        "contractCreated": null,
        "epochNumber": "0xd0360f",
        "from": "CFX:TYPE.USER:AAKETJH9TKJ5G2K4ZX3KFVB9VKKU8NR956N0EN4FHE",
        "gasCoveredBySponsor": false,
        "gasFee": "0xbefe6f672000",
        "gasUsed": "0x5208",
        "index": "0x1",
        "logs": [],
        "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "outcomeStatus": "0x0",
        "stateRoot": "0x8c05b8eb6b9dc69f2e7bb235621487022e694ce3969202b94e76227673a0b86b",
        "storageCollateralized": "0x0",
        "storageCoveredBySponsor": false,
        "storageReleased": [],
        "to": "CFX:TYPE.USER:AATT0JGE4J70V4H0Z43VJ9M29ZJ7ASNS0YA238MGZC",
        "transactionHash": "0xa76efec071e0779785b6653aebb2382a5e460b60a163a1b166df3c8164cec6d9",
        "txExecErrorMsg": null
    },
    "id": "15922956697249514502"
}
```

## 如何判断一笔交易被确认

在区块链中，一个区块执行后也有可能被 revert 掉，对应的一笔交易被执行后有可能会被撤销。只有当一个区块被确认之后，其中的交易状态才不会再发生改变。
那在 Conflux 中如何判断一笔交易（区块）被确认了呢。有两种方法：

1. 如果网络的最新`确认 epochNumber` 大于交易所在的 epochNumber，则可以认为交易也被确认了。通过调用 `cfx_epochNumber` 方法，传递 `latest_confirmed` 参数可以获取当前最新被确认的 `epochNumber`，交易的 epochNumber 在其 receipt 信息中包含。
2. `cfx_getConfirmationRiskByHash` 方法可以获取一个 block 的确认风险数值 risk，如果 `risk/MAX_UINT256 < 1e-8` 则认为该 block 被确认，不会再 revert 了。交易所在的 block hash 可以通过 `cfx_getTransactionByHash` 获取。

在 Conflux 中通常一个区块过 50 个 epoch （一分钟内） 即可被确认，如果交易涉及的金额较大，可以根据情况多等一些 epoch 确认。

## 交易发送失败的原因

根据交易失败的阶段不同，可以将失败情况划分为如下三种：

### Rejected by RPC

发送交易直接被 RPC 所拒绝，拒绝原因在 RPC Response 的 `message` 字段中。

1. `Invalid parameters: tx', 'data': '"Failed imported to deferred pool: Tx with same nonce already inserted. To replace it, you need to specify a gas price > 5` 错误表示 nonce 为某个值的交易已经存在于交易池中，不能重复发送，但可以通过提高 gasPrice 来替换掉交易池中的交易。
2. `'Invalid parameters: tx', 'data': '"Transaction 0x2004b0aea956e8cfad601cd6daad5630c1a95624bad446d1966895973325136c is discarded due to a too stale nonce` 表示发送交易的 nonce 是一个历史已被用过的 nonce，不能被再次使用
3. `Sending transactions to invalid address. The first four bits must be 0x0 (built-in/reserved), 0x1 (user-account), or 0x8 (contract).` 表示交易的接受地址是一个错误地址
4. `Transaction {:?} is discarded due to in too distant future` 表示该交易使用的 nonce，比账户当前 nonce 大的太多
5. `tx already exist` 交易已存在

有时 Response 的 `data`也会包含一些错误信息，该字段是一个 hex 编码的字符串，解析方法如下 hex -> buffer -> UTF8 string

### Stucked in transaction pool

交易发送成功，但一直不被打包，此种情况一般由两种原因所导致：

1. 使用了跳跃的 nonce，且之前 nonce 的交易一直没有产生或执行。
2. 交易发送账户的余额不够支付本笔交易。

### Executed failed

执行失败，通常是因为合约执行过程中发生错误，导致交易失败。此种错误大多是因为合约执行失败导致，且通过 estimate 接口预估 gas 费用的时候也会返回错误。
交易失败的具体原因可以在 receipt 的 `txExecErrorMsg` 字段查看, 分为以下几种：

1. `VmError(OutOfGas)` 交易指定的 gas 费用不够
2. `VmError(ExceedStorageLimit)` 交易指定的 storage 上限不够
3. `NotEnoughCash` 用户余额不够
4. `Vm reverted, Reason provided by the contract: xxxx` 合约执行失败，并且合约提供了详细原因
5. `VmError(BadInstruction` 合约部署失败
6. `Vm reverted,` 合约执行失败，并且没有详细信息

## 跟以太坊的区别

Conflux 交易与以太坊交易相比有以下区别：

* Conflux 交易跟以太坊相比多了 `chainId`, `storageLimit`, `epochNumber` 三个字段。
* 交易的 rlp 编码组装方式不同。
* ecdsaSign 签名后的 v 值在 Conflux 不做特殊修改，以太坊中则会对 v 值有一些特殊处理。