---
id: conflux_overview
title: Overview
custom_edit_url: https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/introduction/zh/overview.md
slug: /
keywords:
  - conflux
  - overview
---
import useBaseUrl from '@docusaurus/useBaseUrl';

Conflux是一种新的安全可靠的公共区块链，具有非常高性能和可扩展性。它可以实现与比特币和以太坊
相同的分散化和安全水平，但在交易吞吐量（TPS）和终端延迟方面提供了两个以上的改进。 

Conflux的主要优势在于其共识协议、身份验证存储和事务中继协议的新设计。在Conflux分布式中，块被组织成树形图，
其中每个块引用其他一些块，其中一个是其父块。通过只查看与父边缘链接的块，分布式是一个树结构（父树），
而通过查看所有块，它是一个有向无环图。这也是我们称Conflux的分布式结构为树图的原因。

<img alt="Tree-Graph " src={useBaseUrl('img/tree_graph.jpg')} />

Conflux的共识算法称为**Greedy-Heaviest-Adaptive-SubTree**（GHAST），
通过在分布式中的父树上应用最重的子树规则，使区块链网络中的所有节点都能一致地
就数据透视链达成一致，进而就基于枢轴链的所有块的总顺序达成共识。GHAST还允许
Conflux节点检测一些可能损害活力的攻击（例如，试图生成两个平衡子树的平衡攻击），
即确认交易的能力，并通过自适应调整块的权重来消灭这些攻击。

Tree-Graph分类账和GHAST共识算法使Conflux节点能够快速生成新块，而不必担心
分布式中存在叉子可能会损害网络安全，从而使系统能够实现高吞吐量和低事务确认延迟。

Conflux采用帐户模型并支持智能合约。其智能合约与以太坊中使用的实心兼容，Solidity
是图灵完整的。Conflux使用merkle patricia树作为其认证存储的主要结构，用于帐户
状态和智能合约。Conflux没有使用单个多版本的merkle树，而是为每个版本的状态使用
多个merkle树。从高层来说，它由快照树和三角洲树组成。增量树始终保存在内存中，它包含
上一个快照中的所有状态更新。相反，快照树在执行事务期间是只读的。这种设计提高了
Conflux中的事务执行效率，因为它可以在访问存储状态时更有效地利用内存。
三角洲树通常包含最常访问的数据，由于三角洲树的状态大小较小，树的深度也可能很浅，
这使得内存能够保存更有效的数据。

此外，Conflux使用一种新的事务中继协议来提高网络带宽的有效利用进行事务传播，
因为在Conflux中，网络带宽可能会成为真正的瓶颈。为了减少冗余事务的传播，
Conflux节点首先向其对等方发送包含对等方以前可能从未见过的事务ID的公告，
然后让对等方请求他们真正需要的事务。Conflux为事务ID引入了高效的编码，
以实现大小和安全性之间的良好权衡。
