---
id: upgrade_list
title: Upgraded CIPs
custom_edit_url: https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/v2-hardfork/upgrade-list.md
keywords:
  - CIPs
---

In the v2 hardfork (Hydra) Conflux will activate and implement modifications of 8 different CIPs (improvement proposal) including CIP-43, CIP-64, CIP-71, CIP-76, CIP-78, CIP-86, CIP-90, CIP-92. The following is a brief introduction of these CIPs.

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

### CIP-76

Detail link: https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-76.md

We should remove VM-related constraints in syncing blocks, like requiring the transactions to have enough gas limit.

### CIP-78

Detail link: https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-78.md

Fix incorrect fields in transaction receipt.

### CIP-86

Detail link: https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-86.md

Reduce the period of difficulty adjustment and apply the simple moving average method.

### CIP-90

Detail link: https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-90.md

This CIP aims to introduce a new fully EVM-compatible space. The new space is called `eSpace`, and the current space is called `Core` Space. The eSpace follows the same rule as EVM and supports eth rpc like `eth_getBalance`, so the tools from ethereum economics can be used on Conflux directly.

### CIP-92

Detail link: https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-92.md

Enable Blake2F builtin function in [EIP-152](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-152.md).

## Testnet Upgrade schedule

1. Conflux client program need to be updated before `Epoch Number reaches 55095000` or `Block Number reaches 68845000` (around 10:00 Dec.9th, 2021(GMT+8))
2. The PoS registration start at `Block Number 68845000` (around Dec.9th at 10:00)
3. The PoS registration close at `Block Number 69245000` (around Dec.11 at 18:00)
4. The deadline for adding pos_config is before `Epoch Number reaches 55665000` (around Dec.13th 15:00). Hardfork upgrade completed at this time.

For detail infomation check [Conflux v2.0.0-testnet Hardfork Upgrade Announcement](https://forum.conflux.fun/t/conflux-v2-0-0-testnet-hardfork-upgrade-announcement/12556)

## Mainnet Upgrade schedule

TBD
