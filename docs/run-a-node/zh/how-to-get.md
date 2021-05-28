# 如何获取 Conflux 客户端程序
[Conflux-rust](https://github.com/conflux-chain/conflux-rust) 是由基金会使用 Rust 语言开发的 Conflux 协议高性能实现。它是一个 Conflux 网络客户端，可以用来运行 Conflux 网络节点，以及对外提供 RPC 服务。除此之外它还是一个命令行工具，可以管理本地账户并同节点进行 RPC 交互。其可以通过以下任意一种方式获取：

## 直接下载节点程序
Conflux-rust 的 Github [Release](https://github.com/Conflux-Chain/conflux-rust/releases) 页面提供了编译后可直接下载运行的节点程序。目前包含主网，测试网两条版本发布线：主网的版本为 Conflux vx.x.x, 测试网的版本为 Conflux vx.x.x-testnet （带 testnet 后缀）。并且每个版本都会提供 Linux，Windows10，MacOS 三大平台的程序。

在 Release 页面，每个版本都包含一个版本更新说明，及 `Assets`（可下载程序）。选择对应平台，点击链接即可下载一个 zip 压缩包，如 `conflux_linux_v1.1.2.zip`，解压后是一个 `run` 文件夹，里面包含节点程序，配置文件，启动脚本。具体文件如下：

```bash
➜  run tree
.
├── conflux
├── log.yaml
├── start.bat
├── start.sh
├── tethys.toml
└── throttling.toml

0 directories, 6 files
```

* `conflux` 节点程序
* `tethys.toml` 主网配置文件（如果下载测试网程序，该配置文件为 testnet.toml)
* `log.yaml` 日志配置文件
* `throttling.toml` 网速限流配置文件(用于开发测试)
* `start.sh` Linux 系统启动脚本
* `start.bat` Windows 系统启动脚本

## 获取 conflux-rust Docker 镜像

Conflux 官方提供了 conflux-rust 的 [Docker 镜像](https://hub.docker.com/r/confluxchain/conflux-rust) 可用于快速启动节点: `下载镜像`，`运行容器`，两步即可启动一个节点。

```sh
$ docker pull confluxchain/conflux-rust
$ docker run -p 12537:12537 --name cfx-node confluxchain/conflux-rust
```

目前官方发布镜像有三条 tag 线, 分别为：

1. x.x.x
2. x.x.x-mainnet
3. x.x.x-testnet

第一种镜像会默认启动一个 dev mode 的私链节点，链的 chainId 和 miner 账号随机生成。同时还会创建 10 个 genesis 账号（账号解锁密码为`123456`），并为每个账号分配 1000CFX，方便用于开发和测试。

带 mainnet（testnet） 后缀 tag 的镜像，则会默认启动主网（测试网）的节点，节点会通过网络从 Epoch 0 开始同步数据。（同步过程花费时间较长，且不能处理交易发送请求）

它们都支持通过挂载目录的方式，使用自定义配置文件和数据目录，具体使用方法可以参看 [Conflux-rust docker 的 Github 文档](https://github.com/conflux-chain/conflux-docker)

