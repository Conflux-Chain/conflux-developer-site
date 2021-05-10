---
id: how_to_use_cfx_faucet
custom_edit_url: https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/guides/zh/how-to-use-cfx-faucet.md
keywords:
  - faucet
---

# 如何使用 CFX 水龙头
你是第一次接触 Conflux 区块链的用户？或者你是一名开发者，打算开发一款 Conflux 上的 Dapp？那么你可能需要一些 CFX 来跟 Conflux 网络交互。我们提供了测试网 CFX 水龙头服务，可以让用户申领测试网的 CFX，在 Conflux 测试网环境下体验。

## 使用 [ConfluxPortal](https://portal.conflux-chain.org/) 创建账户
申领测试网 CFX，首先需要一个 Conflux 账户。通常账户都是通过钱包创建和管理，ConfluxPortal 是一个浏览器插件钱包，跟以太坊的 MetaMask 钱包类似，目前支持 Chrome， Firefox 两款主流浏览器。用户可以直接在浏览器插件市场搜索 `Conflux Portal`，选择并安装即可。或者直接在 [Portal 官网](https://portal.conflux-chain.org/)查找[下载地址](https://chrome.google.com/webstore/detail/confluxportal/opafkgfpaamecojfkaialabagfofilmg)

![](https://lh3.googleusercontent.com/kcl-S_yUEKx7OROMiaFuxl6Stx6weQarlhBqh0z_sqRkPW00gEX2hI5Tph6hSf0c_vCQsadRPIiME-xZE8RNyA5pJA=w640-h400-e365-rj-sc0x00ffffff)

Portal 安装完成后，第一步需要创建或导入助记词，助记词可以用于生成或恢复账号，因此非常重要，需要妥善保管。

![create-or-import-account.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9394ce7d17cf4587a97245fab82393c7~tplv-k3u1fbpfcp-watermark.image)

助记词创建完成之后 Portal 会自动通过它创建一个账户，我们在 Portal 中可以看到该账户的名字，地址，余额等信息。也可以看到 CFX `发送(Send)`和`充值(Deposit)`按钮, 点击即可发送或接受 CFX。

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/52ffe2644816493b90e7eb2a88e756a8~tplv-k3u1fbpfcp-watermark.image)

## 申领测试网 CFX
CFX 水龙头申领入口在 Portal 的 `充值` 按钮里面，但需要先将 Portal 的网络切换到 `Conflux testnet` 才能看到，Portal 的网络默认是 `Conflux Tethys` (主网)。

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/036af221276b47c0976f843bc0e15001~tplv-k3u1fbpfcp-watermark.image)

切换网络后，打开 `充值` 页面即可看到水龙头`获取`按钮。

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/99f9591fdb6843e3ac36131ac9744a2a~tplv-k3u1fbpfcp-watermark.image)

点击后，将会使用你的地址调用水龙头 API 服务，如果成功的话，接口会返回申领 CFX 交易的 hash，切换回 Portal 可以看到余额会增加 100 CFX，使用该 hash 可以到 [ConfluxScan](https://testnet.confluxscan.io/) 查看交易的详情。

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6e3882dc561c4a25ad7b9040ce022088~tplv-k3u1fbpfcp-watermark.image)

当前每个账户每个小时只能申领一次 100 CFX。