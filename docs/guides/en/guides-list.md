---
title: Quick start guides
id: guides_list
custom_edit_url: https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/guides/en/guides-list.md
keywords:
  - Development
  - Wallet
  - Mining
  - Staking
---

# Conflux quick start guides list

The primary purpose of this list of resources is to provide practical guidance for using CONFLUX and a quick start for any of the following activities:

* Creating and using wallets
* Understanding the basics 
* Developing using CONFLUX
* Staking 
* Mining
* Using ecosystem tools


## Creating and using wallets

In this section you can find the guides for wallets usage like Fluent and metamask, you can also find how to configure the wallet to connect to the mainnet, testnet, and the eSpace.


### [How to Get Testnet CFX](https://developer.confluxnetwork.org/guides/en/how_to_use_cfx_faucet)

Are you a new user of Conflux blockchain? Or are you a developer planning to develop a Dapp on Conflux? Then you may need some **CFX** to interact with the Conflux network. We provide the testnet CFX faucet service, which allows users to apply for the testnet CFX and experience it in the Conflux testnet environment.

### [Getting Started with MetaMask](https://developer.confluxnetwork.org/guides/en/user_metamask_interact_evmspace)

**MetaMask** is a convenient UI for interacting with Ethereum-compatible blockchains (such as Conflux eSpace).
For the purpose of this guide, we will assume you are already familiar with MetaMask and have it installed.
If you need help getting started with MetaMask itself, [check out their documentation](https://metamask.io/faqs.html).

In this tutorial we will walk through connecting MetaMask to the Conflux eSpace Testnet , deploying a simple ERC-20 contract using **Remix**, and transferring the new token using MetaMask.

### [Conflux eSpace Guide](https://developer.confluxnetwork.org/v2-hardfork/evm_space_guide)

This guide covers basic usage of **[Fluent Wallet](https://fluentwallet.com/)** and **[MetaMask](https://metamask.io/)** to transfer funds between Conflux **Core Space** and **Conflux eSpace**.

### [Ledger Wallet](https://developer.confluxnetwork.org/sdks-and-tools/en/using_ledger_on_core)

[Conflux](https://confluxnetwork.org) is a high performance distributed ledger based on the [Tree-Graph](/) concensus protocol.
Conflux supports the Conflux native token [CFX](/introduction/en/conflux_basics), and numerous other crypto assets including [CRC20](https://confluxscan.io/tokens/crc20) and [NFT](https://confluxscan.io/tokens/crc721) tokens.
You can now use your **Ledger Nano S** or **Ledger Nano X** hardware wallet to securely store your assets on Conflux.
In this guide, we will show you how to install the Conflux app on your Ledger device, how to import your accounts into Fluent, and how to transfer assets on Conflux.

### [Transfer CFX to eSpace](https://evm.fluentwallet.com/)

Use this [link](https://evm.fluentwallet.com/) to access the cross space bridge and transfer your CFXs betweem spaces.

### [Fluent Wallet Docs](https://fluent-wallet.zendesk.com/hc/en-001)

[Fluent's developer documentation](https://fluent-wallet.zendesk.com/hc/en-001/articles/4410848191899-Provider-API) provides the information for Fluent's integration.

## Understanding the basics 

To learn more about CONFLUX protocol please review the links in this section.

### [Easy to understand introduction Of Tree Graph](https://medium.com/conflux-network/understanding-the-conflux-tree-graph-consensus-algorithm-e1b57d5c3da9)

Conflux is based on a novel Tree-Graph consensus mechanism that optimizes for security and scalability, without sacrificing decentralization.The Tree-Graph architecture allows parallel processing of blocks and transactions, while eventually forming a final serial chain. This feature contrasts other well-known networks like Bitcoin and Ethereum, which process blocks strictly one-by-one, and is what gives Conflux its speed and scalability.

### [Conflux Network: Engineering An Economic Design](https://confluxnetwork.org/files/Conflux_Economic_Paper_20201230.pdf)

Distributed ledgers or blockchains, in particular those based on Proof-of-Work (PoW) protocols, rely as much on economic mechanisms as on technology. [In this paper](https://confluxnetwork.org/files/Conflux_Economic_Paper_20201230.pdf), we describe how we  approach the design of the economic mechanisms that underline Conflux, a high throughput/performance PoW blockchain, by providing a detailed analysis of its economic viability. Conflux  offers several innovations relative to well-understood blockchain networks such as Bitcoin and Ethereum, both in terms of technology design but also in terms of the economics that  underpin the technology.

## Developing using CONFLUX

This section list the SDKs, tools and resources needed to start developing using Conflux.

### [How to Quickly Deploy a CRC20 Token](https://developer.confluxnetwork.org/guides/en/how_to_deploy_erc20_token)

Conflux provides a compatible EVM virtual machine so that the Ethereum contracts can be quickly deployed on the Conflux network. The Conflux's token standard CRC20 and CRC721 are also compatible with Ethereum's, meaning that an ERC20 contract that can be used directly to create a CRC20 Token on the Conflux network.
This article will demonstrate how to quickly deploy a CRC20 contract on the Conflux testnet using [conflux-truffle](https://www.npmjs.com/package/conflux-truffle).

### [SDKs](https://developer.confluxnetwork.org/sdks-and-tools/en/conflux_sdks)

Conflux has SDKs for mainstream programming languages, including `JavaScript`, `Golang`, `Java` and `Python`. This is just a short introduction to the SDKs, for detailed usage info, check their respective documentation.

### [Tools](https://developer.confluxnetwork.org/sdks-and-tools/en/conflux_tools)

Conflux has tools that can help developers quickly build a dapp.

### [Introduction to Smart Contracts](https://developer.confluxnetwork.org/contract/en/contract_introduction)

For Conflux network, a "smart contract" is a simple program that runs on the Conflux chain. Each instance of a smart contract is a collection of code and data that resides at a specific address on the Conflux chain. Since the state on the blockchain is fully deterministic, operations on smart contracts are guaranteed to produce the same results on all blockchain nodes. Furthermore, since smart contracts run on the blockchain, the decentralization and non-tamperable characteristics of the blockchain ensure certainty and security in the operation of the contract. Therefore, a wide range of decentralized applications (DApps) are created based on smart contracts, including games, digital collectibles, online voting systems, financial products, etc.

### [Solidity Tutorial](https://confluxnetwork365-my.sharepoint.com/:w:/g/personal/luis_miguel_confluxnetwork_org/EX3TjDKiC4pJtPdHYWrvaacBzi08qE0u9SE9_4XtEOtPWQ?e=7PZNQy) 

Solidity is the programming language that makes those awesome NFTs and DeFi protocols and applications possible. We call those applications DApps because they are “Decentralized Applications”. Solidity makes these applications possible by giving developers an easy, and understandable programming language that is the way to make complex distributed applications. 

### [NFTs Minting and Contract Interaction](https://docs.google.com/document/d/1ijsf5QfnxPq7DHOFCPIJKlcD7VomqUFDbUEWyuwKmxM)

This document is a general guide for contracts development and testing, it has the following sections:
* **Conflux Development Environment Configuration.** This section shows all the tools and frameworks needed to test the Contracts and DApps.
* **Conflux FrontEnd React Dapp.** This section explains how to launch and configure the Conflux FrontEnd DApp which uses the js-conflux-sdk and is using the framework ReactJS for the front end.
* **How to deploy your own contract to Conflux Testnet.** On this section you will find the instructions to download a github repository with an ERC1155 smart contract that can be used with the DApps in this guide, feel free to change and test the code in the smart contract, deploying it to testnet and integrating it with Conflux FrontEnd DApp.
CONFLUX MINTING DAPP. This section shows how to configure the minting DApp and Mint an ERC721 NFT with the contract in the solution.
Have fun testing the smart contracts and DApps, and let us know your comments.

## Staking 

In this section we provide a list of resources to help investors to participate in the PoS validation protocol. CFX holders can deposit to a specific contract to claim voting rights on the PoS chain. The PoS chain uses a Verifiable source of randomness to select the nodes with voting rights. The committee is temporary and will rotate periodically every six hours. The terms are staggered, approximately one-sixth of committee seats are up for election every hour (The design of this CIP is relatively complex, and there may be an adjustment for parameters at a later time). The interest can only be generated by staking on the PoS chain.

### [Eth2Stake - The PoS Staking Guide for Ethereans (Bridging ETH for Staking on Conflux PoS)](https://forum.conflux.fun/t/eth2stake-the-pos-staking-guide-for-ethereans-bridging-eth-for-staking-on-conflux-pos/13839)

In this tutorial, you’ll learn how to bridge ETH and staking on the Conflux PoS Finality Layer.

### [From Binance CFX (bCFX) to PoS Staking on Conflux](https://medium.com/@cfx_miguel/from-bcfx-to-pos-staking-on-conflux-dca0df638233)

Binance users who have bCFX can easily stake them on the Conflux PoS network. This guide will walk you through the process of bridging your bCFX to Conflux and staking them.

### [PoS Pool Economics (APY)](https://forum.conflux.fun/t/the-beavers-guide-to-calculating-block-rewards-when-staking-in-the-pos-finality-chain/13900) 

Learn how to calculate the PoS block validation rewards (staking rewards) when staking in the PoS Finality Chain.

## Mining

In Conflux, miners receive direct revenue from three sources: block rewards, user fees, and interest paid on the tokens that users need to deposit as bonds when they want to store
data on the blockchain. In this section we provide a list of resources to help miners to configure a node and participate in the PoW mining.

### [Get Conflux Client](https://developer.confluxnetwork.org/run-a-node/en/how_to_get)

[Conflux-rust](https://github.com/conflux-chain/conflux-rust) is a high-performance implementation of the Conflux protocol developed by the foundation with the Rust language. Conflux-rust is a Conflux node that connects to other nodes on the Conflux network and provides an RPC interface that you can use to query and interact with the blockchain. It is also a command-line tool that manages local accounts and conducts RPC interaction with nodes. 

### [Run a Node](https://developer.confluxnetwork.org/conflux-doc/docs/get_started)

Here we walk through how to quickly setup conflux full node to join the conflux network and how to use Conflux wallet to manage your account, transfer Conflux token, and deploy smart contract.

### [How to Start a Fullnode Tutorial（Conflux v2.0.0-fix)](https://forum.conflux.fun/t/how-to-start-a-fullnode-tutorial-conflux-v2-0-0-fix/13471)

Use this guide to configure your own full node and participate in the PoS validation protocol or in the PoW mining.

### [PoS Registration Tutorial (Conflux v2.0.0-fix)](https://forum.conflux.fun/t/pos-registration-tutorial-conflux-v2-0-0-fix/13469)

This tutorial shows how to register your node to participate in the PoS validation protocol.

### [Launching an AWS instance for a PoS Pool](https://forum.conflux.fun/t/running-a-pos-node-on-aws-server-setup-node-configuration/13998)

This is the first tutorial in a multi-part series on running a Conflux PoS staking pool. This tutorial will help you set up a PoS node on AWS. Once you complete this tutorial, you’ll be able to continue with [this guide](https://developer.confluxnetwork.org/run-a-node/en/pos_staking/) to install a PoS pool.

### [Configuring PoS Node + Launching PoS Pool](https://developer.confluxnetwork.org/run-a-node/en/pos_staking/)

In this tutorial we present a guide for how to deploy, configure and manage a POS Pool that will allow CONFLUX holders to join to the PoS protocol just interacting with the front-end application of the PoS Pool and without dealing with the technical complexities.

## Using ecosystem tools

### [ShuttleFlow](https://forum.conflux.fun/t/shuttleflow-v1-4-0-tutorial-token-captain-removed/9214)

ShuttleFlow utilizes Conflux Network as a cross-chain hub to enable seamless flow of different assets across multiple blockchain networks.



