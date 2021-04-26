---
id: conflux_basics
title: Basics
custom_edit_url: https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/introduction/en/basics.md
keywords:
  - conflux
  - basics
---
In an overview, the Conflux world-state consists of a list of accounts and the associated account states, and the global state is updated via transactions. The Conflux blockchain stores all processed transactions in blocks, together with necessary information in block headers which enables a total ordering of all blocks. Below are some concepts you should know.

## CFX
To incentivize the maintenance of the Conflux network and charge users for consumption of resources, Conflux has an intrinsic currency called Conflux coin, simply denoted by CFX for short. The smallest subdenomination is denoted by Drip, in which all values processed in Conflux are integers. One Conflux is defined as 10^18 Drip. Frequently used subdenominations of Conflux are list as follows:

| Multiplier (in Drip) | Name   |
| ------------- |:-------------:|
| 10^0          | Drip          |
| 10^9          | GDrip         |
| 10^12         | uCFX          |
| 10^18         | Conflux(CFX)  |

## chainId & networkId
`chainId` is a binary indicating where a transaction is intended to be executed. It is used to prevent transaction replay attack.
chainId of Conflux is a constant, currently:

* mainnet: `1029`
* testnet: `1`

`networkId` is used to distinguish blockchain at the network layer. In Conflux `networkId` will always same with `chainId`.
You can get both of them from the `cfx_getStatus` RPC method.

## Address
Each account in Conflux is associated with a pair of public key and private key (pubkey,prikey), can be identified by an `address`. Address is a 160-bit identifier, is the concatenation of 4-bit `type indicator` and a 156-bit `digest` of the associated public key.

Currently there are three kind `type indicator`:
* [0001] for normal accounts (a.k.a. non-contract accounts)
* [1000] for (Solidity) contracts
* [0000] for built-in/reserved contracts (a.k.a. “precompiled contracts”)

If hex encode the `type indicator`, they will be:

* `1` normal address
* `8` contract address
* `0` built-in contract address

In the begining address is expressed as a hex encoded string like `0x1292d4955bb47f5153b88ca12c7a9e4048f09839`. But they are very easy mix up with Ethereum's address, and cause losing of crypto money.
Laterly an new base32 encode address is introduced at [CIP37](https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-37.md), for example `cfx:aakkfzezns4h8ymx1cgmcnd4x3aev6e2hexz250ym5`, the new format address has a network prefix, is very easy to distinguish from Ethereum's address.

The two format address can interconverting, and can decode to same 160-bit identifier.
CIP37 address was supported by `Conflux-rust` at version `v1.1.1`.

Note: mainnet address's prefix is different with testnet:
* mainnet: `cfx`
* testnet: `cfxtest`

## Account
The Conflux global state is described in an account model, with the basic storage component called an account. Every actor, which is either a person or an entity that is able to interact with the Conflux world, has its necessary information stored in an account α as a key/value pair (addr,state) of address and corresponding states.

The account state consists of five component (`basic`, `code`, `storage`, `deposit`, `vote`). The basic state is much important than others, it consists of the following fields:

* `nonce`: A scalar counter recording the number of previous activities initiated by this account. For example, the number of transactions sent from α addr, or the number of contract-creations in the case this account is associated with codes.
* `balance`: A scalar value equal to the number of Drip owned by this account. 
* `codeHash`: The hash of the EVM code that gets executed when αaddr receives a message call. Unlike other fields, it
is immutable once established. All such code fragments are stored in a state database for later retrieval. 
* `stakingBalance`: A scalar value equals to the number of staked Drip. 
* `storageCollateral`: A scalar value equals to the number of Drip used as collateral for storage, which will be returned to
balance if the corresponding storage is released. 
* `accumulatedInterestReturn`: A scalar value equals to the number of Drip in accumulated interest return. 
* `admin`: The address of the administrator
* `sponsorInfo`: The sponsor information contains five components: sponsor for gas, sponsor for collateral, sponsor gas
limit, sponsor balance for gas and sponsor balance for collateral. 


## Transactions
A Conflux transaction is a single instruction composed by an external actor with a Conflux account α, and this instruction is cryptographically signed under the associated private key of the sending account α. The authentication key, i.e. the sending account’s associated public key, is also included in the transaction for verification.

### Transaction Types
There are two types of transactions depending on the “destinations”:
1. to an account address: these are normal transactions that may transfer value and/or result in message calls, known as
action transactions;
2. to “nowhere”: these transactions are used to create new contracts, known as contract creation transactions.

### Transaction fields:
Both types of transactions share the following common fields:
* `from`: A address indicating the transaction sender.
* `to`: A address indicating the transaction receiver.
* `nonce`: A scalar value equal to the number of previously sent transactions.
* `gasPrice`: A scalar value indicating the number of Drip to be paid per unit of gas that is consumed as a result of the
execution of transaction.
* `gas`: A scalar value indicating the total amount of gas paid for the cost of the execution of transaction. This is paid up-front,
before any actual computation is done, and may not be increased or refunded later. It is
the transaction sender’s responsibility to avoid any extravagance caused by an unnecessarily high gasLimit.
* `value`: A scalar value equal to the amount of Drip that the transactions sender wants to transfer to the recipient, i.e. the
account specified in transaction or the newly created contract. 
* `storageLimit`: A scalar value indicating the maximum increment of storage used in the execution of transaction, measured in
bytes.
* `epochHeight`: A scalar value specifying the range of epochs where transaction can be executed. Such that transaction can only be executed between the epochs of [Te − 100000, Te + 100000].
* `chainId`: A binary chain id indicating where transaction is intended to be executed. 
* `data`: A byte array specifying the input data of the message call to an existing contract. 
* `v`, `r`, `s`: Corresponding fields of the recoverable ECDSA signature of transaction.


### Transaction's stage
An transaction is composed by external account, and send to a node by calling it's `cfx_sendRawTransaction` RPC method. After sending, the transaction could be in several different states:

1. `Accepted by RPC`: After the provider got the cfx_sendRawTransaction RPC call, it will try to do the basic verification and `insert it into the transaction pool`. If there an obvious error of the transaction, e.g., RLP decoding error, signature verification error, it will be rejected immediately. Otherwise, it will be inserted into the transaction pool and start to wait to be mined, and the RPC will return a transaction hash
2. `Wait to be mined`: Conflux miner will choose valid transactions from it's pool, whose nonce are match the `expected one` and the balance is enough to pay the `value + gas * gasPrice + storage_limit * (10^18/1024)` will be mined in new block. If one transaction not meet these two requirements, it will stucked in tx tool.
3. `Mined`: After mined, a tx will not executed immediate, Conflux has an defer execution mechanism, all tx will be defered 5 epoch to execute.
4. `Executed(success or failed)`: Not all executed transactions are successed, some are failed. You can check it by transaction's `status` or transaction receipt's `outcomeStatus`. `0` means success, `1` means failed.
5. `Confirmed`: If one transaction is executed successfully, it's status may be reverted, because of the pivot chain switching. Only after it is confirmed, it's status is finalized. By checking one tx's block epoch number with latest confirmed epoch number, you can know whether a tx is confirmed.