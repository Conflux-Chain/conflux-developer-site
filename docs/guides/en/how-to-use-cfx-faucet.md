---
id: how_to_use_cfx_faucet
title: How to Use CFX Faucet
custom_edit_url: https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/guides/en/how-to-use-cfx-faucet.md
keywords:
  - faucet
---

Are you a new user of Conflux blockchain? Or are you a developer planning to develop a Dapp on Conflux? Then you may need some CFX to interact with the Conflux network. We provide the testnet CFX faucet service, which allows users to apply for the testnet CFX and experience it in the Conflux testnet environment.

## Portal faucet

### Use [ConfluxPortal](https://portal.conflux-chain.org/) to create an account
To apply for the testnet CFX, you first need a Conflux account. Usually accounts are created and managed through the ConfluxPortal wallet. ConfluxPortal is a browser plug-in wallet, similar to Ethereum's MetaMask wallet. It is currently supported by Chrome and Firefox. Users can directly search for `Conflux Portal` in the browser plug-in market, select and install it. Or find it in [Portal official website](https://portal.conflux-chain.org/)

![](https://lh3.googleusercontent.com/kcl-S_yUEKx7OROMiaFuxl6Stx6weQarlhBqh0z_sqRkPW00gEX2hI5Tph6hSf0c_vCQsadRPIiME-xZE8RNyA5pJA=w640-h400-e365-rj-sc0x00ffffff)

After the ConfluxPortal wallet is installed, the first step is to create or import an account seed phrase. The account seed phrase can be used to generate or restore an account, so it is very important and needs to be kept properly.

![create-or-import-account.png](/img/portal/create-or-import-account.png)

After the seed phrase is created, Portal will automatically create an account through it and you can see the name, address, balance and other information of the account. You can also see the CFX `Send` and `Deposit` buttons, click to send or receive CFX.

![image.png](/img/portal/account-created.png)

### Apply for testnet CFX
The default Portal network is `Conflux Tethys` (mainnet). The first step is to switch the Portal network to `Conflux testnet`. 

![image.png](/img/portal/switch-network.png)

After switching the network, by clicking the `Deposit` button, you can see the faucet `Get CFX` button.

![image.png](/img/portal/get-cfx.png)

After clicking the `Get CFX` button, your address will be used to call the faucet API service. If successful, the interface will return to the hash of the CFX transaction. Switch back to Portal and you can see that the balance will increase by 100 CFX. You can use the hash to view the details of the transaction on [ConfluxScan](https://testnet.confluxscan.io/).

![image.png](/img/portal/success.png)

**Currently, each account can only apply for `100` testnet CFX once `per hour`.**

## Dapp faucet
We also developed a [Faucet Dapp](http://faucet.confluxnetwork.org/), which not only can be used to claim `CFX` but also tokens, currently includes `FC`, `cUSDT`.

![image.png](/img/portal/Dapp-faucet.png)