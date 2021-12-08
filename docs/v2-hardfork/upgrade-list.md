---
id: upgrade_list
title: Upgraded CIPs
custom_edit_url: https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/v2-hardfork/upgrade-list.md
keywords:
  - CIPs
---

This hardfork Conflux activate and implement modifications of 7 different CIPs (improvement proposal) including cip-43, cip-64, cip-71, cip-72, cip-76, cip-78 and cip-86. The following is a brief introduction of these CIPs.

## Included CIPs

### CIP-43

Detail link: https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-43.md

In this CIP, we propose introducing finality to the Conflux chain via voting among staked CFX holders. This will increase the confidence of high-value transactions happening on Conflux in the future and protect Conflux against potential 51% attacks from PoW.

### CIP-64

Detail link: https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-64.md

Currently, transactions on Conflux have no direct access to the number of the epoch they are executed in. To maintain EVM compatibility, this CIP introduces a new internal contract that makes this information available to contracts.

### CIP-71

Detail link: https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-71.md

Fully disable the anti-reentrancy for their contract.

### CIP-72

Detail link: https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-72.md

Make Conflux accepts the signatures signed by Ethereum's wallets, such as Metamask. 

### CIP-76

Detail link: https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-76.md

We should remove VM-related constraints in syncing blocks, like requiring the transactions to have enough gas limit.

### CIP-78

Detail link: https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-78.md

Fix incorrect fields in transaction receipt.

### CIP-86

Detail link: https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-86.md

Reduce the period of difficulty adjustment and apply the simple moving average method.

## Testnet Upgrade schedule

1. Conflux client program need to be updated before `Epoch Number reaches 55095000` or `Block Number reaches 68845000` (around 10:00 Dec.9th, 2021(GMT+8))
2. The PoS registration will start at `Block Number 68845000` (around Dec.9th at 10:00)
3. The PoS registration will close at `Block Number 69245000` (around Dec.11 at 18:00)
4. The deadline for adding pos_config is before `Epoch Number reaches 55665000` (around Dec.13th 15:00). Hardfork upgrade will be completed at this time.
