---
id: how_to_get
title: Get Conflux Client
custom_edit_url: https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/run-a-node/en/how-to-get.md
keywords:
  - node
---

[Conflux-rust](https://github.com/conflux-chain/conflux-rust) is a Conflux protocol high-performance implementation developed by the foundation with the Rust language. It is an Conflux Client program that runs Conflux network nodes and provides RPC service to the public. It is also a command-line tool that manages local accounts and conducts PRC interaction with nodes. You can download the release package through any of the ways listed: 

## Directly download the nodes program

Conflux-rust on Github [Release](https://github.com/Conflux-Chain/conflux-rust/releases) page provides a compiled node program that can be directly downloaded and run. There are two versions for the main-net and the test-net: the main-net version is Conflux `vx.x.x`, while the version for test-net is `Conflux vx.x.x-testnet` (which has a suffix of `testnet`). Each program will be provided for Linux, Windows10, and macOS.

On the Release page, each version will have a version update description and `Assets` that you can download. After selecting the corresponding platform, you can click the link to download the zip package. For example, when unzipping the `conflux_linux_v1.1.2.zip` file, a `run` folder that contains node programs, configuration files, and startup scripts will appear. The specific documents include:

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
* `conflux` Node program
* `tethys.toml` Mainnet configuration file (If you download the testnet program, the configuration file is testnet.toml)
* `log.yaml` Log configuration file
* `throttling.toml` Internet speed flow limit configuration file (used for development and testing) 
* `start.sh` Linux system startup script
* `start.bat` Windows system startup script

## Docker
Conflux provides an official [Docker image of conflux-rust](https://hub.docker.com/r/confluxchain/conflux-rust). You can use it to quickly start a node. You can start a node within two steps:  Download image and  Run container.

```sh
$ docker pull confluxchain/conflux-rust
$ docker run -p 12537:12537 --name cfx-node confluxchain/conflux-rust
```

So far, there are three tag lines in the officially released image:

1. x.x.x
2. x.x.x-mainnet
3. x.x.x-testnet

The first type of image will run a private chain node in dev mode by default. The chainId and miner account will be randomly generated. At the same time, 10 genesis accounts will be created (the defult password is `123456`), and 1000 CFX will be distributed to each account for developing and testing.

The image with mainnet/testnet suffix tag will activate the nodes of the main network/test network by default. The nodes will start to synchronize data from Epoch 0 through the network. (The process of sychronizing might take a long time, and the transaction sending request won't be processed.)

They all support the use of custom configuration files and data directories through mounting directories. You can check the tutorial at:
[Conflux-rust docker file on Github](https://github.com/conflux-chain/conflux-docker)
