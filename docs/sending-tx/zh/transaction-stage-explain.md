# Transaction stages

发送交易是区块链世界的最频繁操作，交易从开始构造到最终上链并确定，会经历多个阶段。充分了解交易的各个阶段将有助于用户和开发者更好的查找交易发送的问题，并最终确保交易被成功确认。

交易从构造到确认会经历如下几个阶段：

0. 准备交易发送方（`from`）的私钥和地址
1. 准备交易的 `meta 信息`，组装后进行 `签名` 和 `编码` -> `原始交易(RawTransaction)`
2. 将 `RawTransaction` 通过 `cfx_sendRawTransaction` RPC 方法发送给 fullnode -> 交易被放入交易池
3. 交易被矿工打包进某个区块 -> Minded in Block
4. Defer 5 个 epoch -> Executed
5. 等待大约 50 个 epoch -> Confirmed
6. 等待被 PoS 链所引用 -> Finalized

![TX stages](/img/transaction/transaction-stages.png)

## 交易阶段介绍

### 准备交易发送账户私钥和地址

所有发送的交易都需要使用私钥进行签名，才能被区块链网络所接受并成功执行，因此发送交易前首先需要准备好交易发送方的私钥，通过私钥可以推导出账户的地址。

另外交易的发送需要支付一定的 CFX 手续费，因此交易的发送方账户需要保证有一部分 CFX 才能成功发送交易，`测试网`的 CFX 可以通过[水龙头领取](http://faucet.confluxnetwork.org/)。

在 Conflux 网络有一种情况不需要发送方支付交易的手续费：

1. 交易的接收方是合约
2. 有人对合约的燃气和存储进行了赞助
3. 交易发送方地址在合约燃气使用白名单中（可以将白名单完全打开，让所有人都可被赞助）
4. 交易执行花费的燃气费用低于合约赞助商所设置的燃气代付上限

如果想了解 Conflux 代付的具体细节，可以查看内置合约 [SponsorWhitelistControl](https://developer.confluxnetwork.org/conflux-rust/internal_contract/internal_contract#sponsorwhitelistcontrol-contract) 介绍

### 准备交易元信息，并进行签名和编码

准备好发送账户的私钥之后，就需要构建交易了，构建交易第一步需要根据交易的发送目的确定交易的各个元信息，包括:

* `to`：交易接收方
* `nonce`： 交易的顺序号
* `value`：交易金额，单位为 Drip
* `data`：交易数据
* `chainId`：交易执行的链 ID
* `epochHeight`：交易执行目标高度
* `gas`：燃气上限
* `gasPrice`：燃气价格
* `storageLimit`：存储抵押上限

如果想了解交易各字段的含义及指定方式可参看[Conflux 交易详解](https://developer.confluxnetwork.org/sending-tx/en/transaction_explain)

元信息准备好之后，需要他们按照固定顺序进行 `RLP` 编码，并生成 hash，然后使用私钥进行 `secp256k1` 签名操作，得到`交易签名`。

最终将`元信息`和`签名`组合到一块进行 RLP 编码，并转换为 `hex` 格式，即得到可发送给 Conflux 节点的`原始交易(RawTransaction)`。

通常钱包和 SDK 会自动进行交易的组装，签名，编码等操作，不需要手动处理。

### 发送 RawTransaction 到节点交易池

将原始交易通过 fullnode 的 `cfx_sendRawTransaction` RPC 方法，发送给节点，节点首先会对交易进行检查，如果构造的交易有问题,发送将会失败，可能的失败情况有：

1. nonce 设置错误（`重复使用`或`设置的 nonce 过大`）
2. gas 数值过大，超过 1500w
3. 签名错误
4. chainId 使用错误
5. epochHeight 与当前值距离超过 10w
6. 其他：交易池满

需要注意的是：该方法不会检查发送方的余额是否足够支付交易金额和手续费，即使发送账户余额不够，交易也能发送成功。

如果检查没有问题，交易将会被放入节点的交易池，并返回交易的 hash.

这时通过 RPC 方法 `cfx_getTransactionByHash` 可以获取到交易，但因为交易还没有被打包，所以交易的区块信息(blockHash), 及执行结果相关字段(contractCreated, status, transactionIndex) 都为空。

因为交易还未执行，所以交易的收据（receipt）还未产生。

### 矿工打包交易

交易池中的交易可能会有三种状态：

* nonce 跳跃
* 余额不够
* ready to pack

前两种状态的交易将会 pending 在交易池内，直到交易 nonce 之前所有的 nonce 被执行或者余额足够之后才会变为 `ready to pack`.

达到打包条件的交易，将会大致按照 gasPrice 从高到低的顺序被矿工打包进区块

### 区块被延迟执行

Conflux 网络有一个区块延迟执行机制，即区块被打包后，不会立刻被执行，而是需要延迟 5 个 Epoch 才会执行。区块执行本质是区块中的所有交易被执行。

交易执行之后通过 `cfx_getTransactionByHash` 方法获取的交易信息里将会包含 blockHash, status 等字段。

此时也可以通过 `cfx_getTransactionReceipt` 方法获取交易的`收据(receipt)`信息。

交易的执行并不一定会成功，可以通过 transaction 的 `status` 字段或 receipt 的 `outcomeStatus` 字段判断交易的状态：

* `0` - 执行成功
* `1` - 执行失败
* `2` 或 `null` - 交易未执行，被跳过

### 经历一定数量 Epoch，交易被确认

交易被执行之后并不意味着交易的状态不会再发生变化，因为区块链数据链式存储结构的原因，区块链可能会因为新区块的到达或产生而导致主链发生分叉或偏移，从而导致某笔交易被 revert。

通常需要等待打包交易区块之后，再产生一定数量的新区块，交易才能达到最终确认状态。

在 Conflux 网络中可以使用交易 `receipt` 中的 `epochNumber` 与最新的 confirmed epochNumber 进行比较，如果最新确认的 epochNumber 更大的话，意味着交易已被确认。

可以使用 `cfx_epochNumber` 方法，传递 `latest_confirmed` 参数，来获取最新 Confirmed 的 EpochNumber

### 区块被 PoS 链所引用，交易被 Finalize

Conflux 从 v1.2.0 开始，为了防止 51% 算力攻击，引入了 PoS finality 机制，用于在全网算力较低的情况下，保护区块不被 revert。

通过引入一条单独的 PoS 链，来对 PoW 的区块进行 finalize 投票，所有被投票 finalized 的区块的状态将会达到最终态。

从 v1.2.0 开始会引入一个新的 Tag `latest_finalized` 可以使用此 tag，请求 `cfx_epochNumber` 方法，获取最新被 finalized 的 epochNumber

## FAQ

### 交易为什么发送失败

如果调用 `cfx_sendRawTransaction` 方法发送交易失败的话，大概率是交易构造有问题，需要调整交易的元字段。

如果返回的错误消息为 txpool is full, 可以等会，稍微提高 gasPrice 重新发送交易试试。

### 为什么交易一直没有上链被执行

交易发送成功之后，但迟迟没法在 scan 上查到交易被成功执行，那交易大概率被 pending 在交易池中，可能的情况有以下三种:

1. 交易没有使用连续的 nonce：需要正确的设置交易的 nonce
2. 发送账户的余额不够：给发送账户转账，以获取足够余额
3. 网络交易比较拥堵：如果网络比较拥堵，矿工大致会按照 gasPrice 从高到低的顺序，打包交易，因此可以通过提高交易 gasPrice 的方式来加快交易执行

可以使用 `cfx_getAccountPendingTransactions` 方法获取用户当前的 Pending 交易及原因。

### 是否可以取消或者替换某笔交易

如果交易还未被打包进区块处于交易池中，可以重新发送一笔 nonce 相同，gasPrice 更高的交易来替换掉原来那笔交易。

交易无法取消，但可以通过将原交易替换为一笔 value 为 0 的交易，达到取消的效果。

### 如何给交易加速

如果想给交易的执行加速，可以提高交易的 gasPrice 重新发送
