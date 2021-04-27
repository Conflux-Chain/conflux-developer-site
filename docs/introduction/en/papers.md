---
id: conflux_papers
title: Papers
custom_edit_url: https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/introduction/en/papers.md
keywords:
  - conflux
  - papers
---

The Conflux Protocol has solid researches to support 

## [Conﬂux Protocol Specification (Yellow paper)](https://confluxnetwork.org/files/Conflux_Protocol_Specification_20201020.pdf)
The [Protocol Specification](https://confluxnetwork.org/files/Conflux_Protocol_Specification_20201020.pdf) details described every aspect of Conflux implementation, including ledger structure, consensus, proof of work, incentive mechanism, and many others.

## [A Decentralized Blockchain with High Throughput and Fast Confirmation](https://www.usenix.org/conference/atc20/presentation/li-chenxing)
This paper presents Conflux, a scalable and decentralized blockchain system that provides high throughput and fast confirmation. Conflux operates on a novel consensus protocol which optimistically processes concurrent blocks without discarding any forks and adaptively assigns weights to blocks based on their topology in the Conflux ledger structure (called Tree-Graph). The adaptive weight mechanism enables Conflux to detect and thwart liveness attack by automatically switching between an optimistic strategy for fast confirmation in normal scenarios and a conservative strategy to ensure consensus progress during liveness attacks. 

## [GHAST: Breaking Confirmation Delay Barrier in Nakamoto Consensus via Adaptive Weighted Blocks](https://arxiv.org/abs/2006.01072)
This paper has been published at https://arxiv.org/. In it, we present a new consensus protocol named GHAST (Greedy Heaviest Adaptive Sub-Tree) which organizes blocks in a Tree-Graph structure (i.e., a directed acyclic graph (DAG) with a tree embedded) that allows fast and concurrent block generation.

## [Technical Presentation](https://confluxnetwork.org/files/Conflux_Technical_Presentation_20200309.pdf)
This is a technical presentation about Conflux's main ideas and architecture, you can find how it's designed, and how Conflux achieves safety against double spending attacks and robustness against liveness attacks.