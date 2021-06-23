# 如何启动一个主网/测试网节点
当你成功获取节点程序之后，运行一个主网或测试网节点将会非常容易。准备好机器和配置文件，启动客户端，然后等待节点数据同步到最新 Epoch 即可。一旦数据同步到最新，你就拥有一个可以正常工作的节点了。

## 机器配置要求
运行对外提供 RPC 服务节点的建议机器配置为 `4核，16G内存，200G大小的硬盘`。
磁盘大小根据运行节点类型和配置的不同可能会不一样。

## 节点类型
Conflux 的节点分为三种不同类型：Archive node, Full node, Light node。他们的主要区别在于保存的区块链数据多少不一样。

`Archive Node` 会存储 Conflux 网络中所有历史区块的完整数据，因此需要大量的磁盘存储空间。节点首次启动时，同步数据花费的时间也比较长。

`Full Node` 降低了对存储空间的要求，对于 Latest checkpoint 之前的区块，只存储区块头，而不存储区块内的具体交易信息；Latest checkpoint 之后区块数据存的储方式会同 Archive Node 一致

`Light Node` 对于所有区块只存储区块头信息，不存储交易信息。因此对机器的配置要求最低，同步数据最快。但轻节点只能验证Conflux网络中的数据，不能参与挖矿，支持的 RPC 方法也相对有限。

## 如何获取主网/测试网配置文件
下载的客户端程序目录中会包含默认的配置文件，主网为 `tethys.toml`， 测试网为 `testnet.toml`， 两个配置文件主要区别在于 `bootnodes` 和 `chainId` 的配置值不同。

你也可以到 `conflux-rust` Github 仓库的 `run 目录`下面查找配置文件。文件名为 `tethys.toml` 或 `testnet.toml`。

## 如何配置
通常情况用户不需要修改任何配置，直接运行启动脚本即可。但如果想打开某些功能或自定义节点某些行为，就需要自行设置一些配置参数，以下为最常用的一些配置：

### 节点类型
* `node_type`: 用于设置启动节点的类型，可选值为 `full` (默认值), `archive`, `light` 


### chainId
* chainId 用于配置节点要连接的链的ID，主网为 1029, 测试网为 1 (一般不需要修改)

### Miner related
* `mining_address`: 节点挖矿奖励接收地址，可以配置 hex40 地址或 CIP-37 地址(注意：地址的 network prefix 需要与当前配置的 chainId 一致)，如果配置了该项 `minint_type` 默认为 `stratum`
* `mining_type`: 可选值为 `stratum`, `cpu`, `disable`
* `stratum_listen_address`: stratum 地址
* `stratum_port`: stratum 端口号
* `stratum_secret`: stratum 连接凭证

### RPC related
* `jsonrpc_cors`: 用于控制 rpc 域名验证策略，可选值为 `none`, `all`, 或者逗号(无空格)分隔的域名
* `jsonrpc_http_keep_alive`: `false` or `true` 用于控制是否为 rpc HTTP connections 设置 KeepAlive 
* `jsonrpc_ws_port`: websocket rpc 端口号
* `jsonrpc_http_port`: http rpc 端口号
* `public_rpc_apis`: 对外开放访问的 rpc api，可选值为 `all`, `safe`, `cfx`, `debug`, `pubsub`, `test`, `trace` (safe=cfx+pubsub)。一般建议设置为 `safe`
* `persist_tx_index`: `true` or `false` 如果需要处理 transaction 相关 RPCs 的话，需要同时打开此配置，不然将只能访问到最近的交易信息
* `executive_trace`: `true` or `false` 是否打开 trace EVM execution 功能，如果打开 trace 会被记录到 database 中

### Snapshot 
* `additional_maintained_snapshot_count`: 用于设置 stable checkpoint 之前 snapshot 需要保留的个数，默认为 0， stable genesis 之前的 snapshot 都会被删掉。如果用户想查询比较久远的历史状态，需要设置此选项。此选项开始后，磁盘用量同样会增加许多。

### directries
* `conflux_data_dir`: 数据（block data, state data, node database）的存放目录
* `block_db_dir`: block 数据存放目录，默认情况会存放到 conflux_data_dir 指定目录下的 blockchain_db 目录中
* `netconf_dir`: 用于控制 network 相关的持久化目录，包括 `net_key`

### Log related
* `log_conf`: 用于指定 log 详细配置文件如 `log.yaml`，配置文件中的设置会覆盖 `log_level` 设置
* `log_file`: 指定 log 的路径，不设置的话会输出到 stdout
* `log_level`: 日志打印的级别，可选值为 `error`, `warn`, `info`, `debug`, `trace`, `off` 

### 其他

* `net_key`: 是一个 256 bit 的私钥，用于生成唯一 node id，该选项如果不调会随机生成，如果设置可以填一个长度为 64 的 hex 字符串
* `tx_pool_size`: 交易允许存放的最大交易数默认为 50W
* `tx_pool_min_tx_gas_price`: 交易池对交易 gasPrice 的最小限制，默认为 1
* `get_logs_filter_max_limit`: `cfx_getLogs` 方法允许的 limit 最大值
* `get_logs_filter_max_epoch_range`: `cfx_getLogs` 方法允许的最大 epoch 范围

## 启动节点
配置文件正确设置之后，启动节点将会是一件非常简单的事情:

```sh
# 运行启动脚本
$ ./start.sh
```

如果你在 stdout 或日志文件看到如下内容，表示节点已经成功启动了:

```
2021-04-14T11:54:23.518634+08:00 INFO  main                 network::thr - throttling.initialize: min = 10M, max = 64M, cap = 256M
2021-04-14T11:54:23.519229+08:00 INFO  main                 conflux      -
:'######:::'#######::'##::: ##:'########:'##:::::::'##::::'##:'##::::'##:
'##... ##:'##.... ##: ###:: ##: ##.....:: ##::::::: ##:::: ##:. ##::'##::
 ##:::..:: ##:::: ##: ####: ##: ##::::::: ##::::::: ##:::: ##::. ##'##:::
 ##::::::: ##:::: ##: ## ## ##: ######::: ##::::::: ##:::: ##:::. ###::::
 ##::::::: ##:::: ##: ##. ####: ##...:::: ##::::::: ##:::: ##::: ## ##:::
 ##::: ##: ##:::: ##: ##:. ###: ##::::::: ##::::::: ##:::: ##:: ##:. ##::
. ######::. #######:: ##::. ##: ##::::::: ########:. #######:: ##:::. ##:
:......::::.......:::..::::..::..::::::::........:::.......:::..:::::..::
Current Version: 1.1.3-testnet

2021-04-14T11:54:23.519271+08:00 INFO  main                 conflux      - Starting full client...
```

节点启动后会在 run 目录里新建两个文件夹 `blockchain_data`, `log` 用于存储节点数据和日志。

启动一个全新的主网或测试网节点后，它会从网络同步历史区块数据，追赶中的节点处于 catch up 模式，可以从日志看到节点的状态和最新的 epoch 数：
```
2021-04-16T14:49:11.896942+08:00 INFO  IO Worker #1         cfxcore::syn - Catch-up mode: true, latest epoch: 102120 missing_bodies: 0
2021-04-16T14:49:12.909607+08:00 INFO  IO Worker #3         cfxcore::syn - Catch-up mode: true, latest epoch: 102120 missing_bodies: 0
2021-04-16T14:49:13.922918+08:00 INFO  IO Worker #1         cfxcore::syn - Catch-up mode: true, latest epoch: 102120 missing_bodies: 0
2021-04-16T14:49:14.828910+08:00 INFO  IO Worker #1         cfxcore::syn - Catch-up mode: true, latest epoch: 102180 missing_bodies: 0
```

你也可以通过 `cfx_getStatus` 方法获取当前节点的最新 epochNumber，并跟 scan 的最新 epoch 比较从而判断数据是否已经同步到了最新。

