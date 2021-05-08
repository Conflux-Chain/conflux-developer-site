---
id: how_to_use_cfx_faucet
custom_edit_url: https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/guides/en/how-to-use-cfx-faucet.md
keywords:
  - faucet
---

# How to Use CFX Faucet
Are you a new user of Conflux blockchain? Or are you a developer planning to develop a Dapp on Conflux? Then you may need some CFX to interact with the Conflux network. We provide the testnet CFX faucet service, which allows users to apply for the testnet CFX and experience it in the Conflux testnet environment.

## Use [ConfluxPortal](https://portal.conflux-chain.org/) to create an account
To apply for the testnet CFX, you first need a Conflux account. Usually accounts are created and managed through the ConfluxPortal wallet. ConfluxPortal is a browser plug-in wallet, similar to Ethereum's MetaMask wallet. It is currently supported by Chrome and Firefox. Users can directly search for `Conflux Portal` in the browser plug-in market, select and install it. Or find it in [Portal official website](https://portal.conflux-chain.org/)

![](https://lh3.googleusercontent.com/kcl-S_yUEKx7OROMiaFuxl6Stx6weQarlhBqh0z_sqRkPW00gEX2hI5Tph6hSf0c_vCQsadRPIiME-xZE8RNyA5pJA=w640-h400-e365-rj-sc0x00ffffff)

After the ConfluxPortal wallet is installed, the first step is to create or import an account seed phrase. The account seed phrase can be used to generate or restore an account, so it is very important and needs to be kept properly.

![create-or-import-account.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9394ce7d17cf4587a97245fab82393c7~tplv-k3u1fbpfcp-watermark.image)

After the seed phrase is created, Portal will automatically create an account through it and you can see the name, address, balance and other information of the account. You can also see the CFX `Send` and `Deposit` buttons, click to send or receive CFX.

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/52ffe2644816493b90e7eb2a88e756a8~tplv-k3u1fbpfcp-watermark.image)

## Apply for testnet CFX
The default Portal network is `Conflux Tethys` (mainnet). The first step is to switch the Portal network to `Conflux testnet`. 

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/036af221276b47c0976f843bc0e15001~tplv-k3u1fbpfcp-watermark.image)

After switching the network, by clicking the `Deposit` button, you can see the faucet `Get CFX` button.

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/99f9591fdb6843e3ac36131ac9744a2a~tplv-k3u1fbpfcp-watermark.image)

After clicking the `Get CFX` button, your address will be used to call the faucet API service. If successful, the interface will return to the hash of the CFX transaction. Switch back to Portal and you can see that the balance will increase by 100 CFX. You can use the hash to view the details of the transaction on [ConfluxScan](https://testnet.confluxscan.io/).

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6e3882dc561c4a25ad7b9040ce022088~tplv-k3u1fbpfcp-watermark.image)

**Currently, each account can only apply for `100` testnet CFX once `per hour`.**