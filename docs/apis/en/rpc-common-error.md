

通常情况下，如果调用的 RPC 方法执行失败，会返回一个 `error` 对象，该对象包含三个字段: `code`, `message`, `data`。
code 用于表示错误的类型；message 是一个错误的简短描述；
data 字段通常用于返回错误的详细信息，可以是一个字符串，也可以是一个结构化数据，但该字段也有可能被省略掉。
Conflux RPC 许多情况会会把错误信息字符串以 hex 编码的格式通过 data 字段返回回来。

```json
{
  "jsonrpc": "2.0", 
  "error": {
    "code": -32600, 
    "message": "Invalid Request",
    "data": "0xxxxxxxxxx"
  }, 
  "id": null
}
```

## cfx_estimateGasAndCollateral
* NotExecutedDrop(TxDropError::OldNonce): Can not estimate: transaction can not be executed (nonce is too old expected {:?} got {:?})
* NotExecutedDrop(TxDropError::InvalidRecipientAddress): Can not estimate: transaction can not be executed (invalid recipient address {:?})
* NotExecutedToReconsiderPacking: Can not estimate: transaction can not be executed (?)
* ExecutionErrorBumpNonce(ExecutionError::VmError(vm::Error::Reverted))：Estimation isn't accurate: transaction is reverted{$revert_error}{$innermost_error} ($error_stack)
* ExecutionErrorBumpNonce: Can not estimate: transaction execution failed, all gas will be charged (execution error: {:?})
* ExecutionSuccessButUsedTooMuchGas: Gas too high. Most likely there are problems within the contract code. gas {$gas_used}, storage_limit {$storage_collateralized} (gas {$gas_used}, storage_limit {$storage_collateralized})

[Error message changed since v1.1.4](https://github.com/Conflux-Chain/CIPs/issues/70)

## cfx_call
* NotExecutedDrop(TxDropError::OldNonce): Transaction can not be executed (nonce is too old expected {:?} got {:?})
* NotExecutedDrop(TxDropError::InvalidRecipientAddress)：Transaction can not be executed (invalid recipient address {:?})
* NotExecutedToReconsiderPacking: Transaction can not be executed (xxx)
* ExecutionErrorBumpNonce(ExecutionError::VmError(vm::Error::Reverted))：Transaction reverted ($error_stack)
* ExecutionErrorBumpNonce: Transaction execution failed ($detail_error)

## Transaction Receipt txErrorMsg
如果交易执行失败，交易 receipt 的 `txExecErrorMsg` 字段, 会包含一些交易执行失败的错误信息和原因
1. `VmError(OutOfGas)`
2. `VmError(ExceedStorageLimit)`
3. `NotEnoughCash`
4. `Vm reverted, Reason provided by the contract: xxxx`
5. `VmError(BadInstruction`
6. `Vm reverted, `

## cfx_sendRawTransaction 终版

### Invalid parameters: tx
* 无效 to 地址: "Sending transactions to invalid address. The first four bits must be 0x0 (built-in/reserved), 0x1 (user-account), or 0x8 (contract)."
* 交易 nonce 比用户当前 nonce 大太多（2000）：Transaction {:?} is discarded due to in too distant future
* 交易的 nonce 已经过时：Transaction {:?} is discarded due to a too stale nonce 
* 交易重复发送："tx already exist"
* 交易重复发送："Failed imported to deferred pool: Tx with same nonce already inserted. To replace it, you need to specify a gas price > 1"
* chainId 不匹配： "ChainIdMismatch { expected: 1, got: 1029 }"
* "ZeroGasPrice"
* "NotEnoughBaseGas { required: 21000, got: 2100 }")
* "transaction gas 30000000 exceeds the maximum value 15000000, the half of pivot block gas limit"
* 交易签名错误："Custom(\\"Cannot recover public key\\")"

* RLP 编码错误：Invalid parameters: raw ("RlpIncorrectListLen")

### Tx pool
* Transaction Pool is full/txpool is full

### catch-up
Request rejected due to still in the catch up mode.


## pending in tx pool situation
* futureNonce
* notEnoughCash