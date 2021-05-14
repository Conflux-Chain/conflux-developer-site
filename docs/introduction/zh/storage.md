---
id: conflux_storage_zh
title: Storage
custom_edit_url: https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/introduction/zh/storage.md
keywords:
  - storage
---

在Conflux中引入了Collateral for storage（简称CFS）机制，作为使用存储的定价方式，相比Ethereum中的一次性存储费用，CFS机制会更加公平合理。原则上，这种机制需要锁定一笔资金，作为占用存储空间的抵押物。在相应的存储空间被释放或被他人覆盖前，抵押物都会被锁定，而被锁定的抵押物所产生的相应利息会直接分配给矿工，用于存储空间的维护。因此 Conflux的存储成本也取决于空间占用的时间长短。Conflux 在其[协议规范第7章](https://confluxnetwork.org/files/Conflux_Protocol_Specification_20201020.pdf)中专门对这一机制进行了详细的介绍。

在 Conflux 网络中，每个存储条目占用空间是64B（B为Bytes，字节），这也是世界状态下键/值对的大小，需要说明的是在区块链中键一般为256bits长，值也是256bits长（各自都是32B长，合起来为64B长）。储存所需的押金与能够覆盖所有储存物品的64B的最小倍数成正比。对于每一个存储条目，最后向该条目写入的账户称为该存储条目的所有者。如果某存储条目是在执行合约C时所写，且有担保人提供担保，那么C被视为该条目的写者，也相应地成为所有者（详见7.1节）。在世界状态下，一个存储条目的整个生命周期内，该条目的所有者必须锁定固定数量的CFX作为占用存储空间的存储押金。具体来说，每一个大小为64B的存储条目，其主人会被锁定1/16CFX。而占用`1KB`空间则支付`1CFX`作为押金，其对应公式如下：

![](/img/storage-formula.png)

在账户α成为一个存储条目的所有者时（无论是创建还是修改），α应立即为该条目锁定1/16 CFX。如果α有足够的余额，那么就会自动锁定所需的押金，否则如果α没有足够的余额，操作就会失败，α无法创建或修改该条目。

当一个存储条目从世界状态中被删除时，相应的1/16 CFX押金将被解锁并返回到该条目所有者的余额中。如果一个存储条目的所有权发生变化，旧所有者的1/16 CFX押金被解锁，而新的所有者必须同时锁定`1/16CFX`作为押金。值得一提的是，押金退回是“悄悄”加在余额里的，并没有转账交易可供查询。


### Solidity 内存管理机制

根据Solidity文档对于其内存管理的[描述](https://solidity-cn.readthedocs.io/zh/develop/introduction-to-smart-contracts.html#index-10)及Conflux[存储押金机制](https://mp.weixin.qq.com/s/KKU3XiJqr_Uz5RdlUyQmtA)，我们能够发现，合约存储需要有key和value进行维护，一般情况下：key的长度为256bits，value的长度同样为256bits，按一个智能合约的存储空间按照如下表格进行组织，其中{0,1}<sup>256</sup>表示256位比特串(比特串中只有0或1两个值)，**每个key/value对就可以被理解为一个条目**：

条目| 键/地址({0,1}<sup>256</sup>)   | 值({0,1}<sup>256</sup>)  |
|  :----:  |  :----:  | :----:  |
1| 0...00000  | 0 |
2| 0...00001  | 1 |
3| 0...00002 | 2 |
...| ... | ... |
2<sup>256</sup>| f...fffff| 0 |

由于256bits=32bytes，两个256bits对应的长度为：32+32=64（Bytes）

Solidity中常见变量及其对应的条目数整理
|   变量   |                            长度                             |                      定义方式                       |
| :------: | :---------------------------------------------------------: | :-------------------------------------------------: |
| 普通变量 |                   1个普通变量对应1个条目                    |                uint public count=0;                 |
| mapping  |              mapping的每1个key都对应于1个条目               |      mapping(address => uint) public balances;      |
|  array   | 数组每1个元素对应于1个条目，数组长arr.length是额外的1个条目 | uint[5] fixedArr = [1,2,3,4,5]; string productname; |
|  struct  |              struct内每个field对应条目数的累加              |  struct Person {uint age;uint stuID;string name;}   |

## 如何使用存储抵押

Conflux 发送交易时，需要填写一个存储上限 `storageLimit` 字段（单位是字节）。该上限规定了，押金缴纳者在交易执行前后押金增量不得超过`存储上限`乘 1/1024 CFX。如果这个值填写得过低，会导致执行后押金超过上限，执行失败。所以一般该字段需要设置比实际用量偏大的值，多余的部分不会产生存储抵押。但也不建议填写的过高，因为可能会导致发送者余额不足以支付押金，从而导致交易失败。Fullnode 提供了 RPC 方法 `cfx_estimateGasAndCollateral` 可以预估一笔交易将会使用的存储大小。

交易执行后的 `Receipt` 中，包含了几个关于存储变化的字段：

* `storageCollateralized` 本次交易为存储抵押的 CFX 数量
* `storageCoveredBySponsor` 本次交易的存储抵押是否由赞助商赞助
* `storageReleased` 本次交易释放的存储

可以使用 `cfx_getCollateralForStorage` 方法查询某个地址当前所抵押的存储大小，单位为 bytes，该值除以 1024 则为为存储抵押的 CFX 数量。另外该也可以通过 `cfx_getAccount` 方法获取，返回信息包含 `collateralForStorage` 字段。