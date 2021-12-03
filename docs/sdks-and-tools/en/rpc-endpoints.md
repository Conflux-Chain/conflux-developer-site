---
id: conflux_rpcs
title: Public RPCs endpoints
custom_edit_url: https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/sdks-and-tools/en/rpc-endpoints.md
keywords:
  - endpoints
---

Public available Conflux network RPC endpoints

Mainnet chainId `1029`, testnet chainId `1`

## Conflux-rust latest version

### Conflux-RPC with smart DNS (Recommended)

The `cfx_getLogs` method's `max epoch gap` is configured to `1000`.

#### HTTP

To ensure the service availability, we have set it's rate limit to [`rate=100r/s burst=80 nodelay`](https://www.nginx.com/blog/rate-limiting-nginx/). If the request ratio succeed the limit, the service will return `503`. If you have requirement to send a lot transaction, one solution is send transaction in batch.

* `mainnet`: https://main.confluxrpc.com
* `testnet`: https://test.confluxrpc.com

#### WebSocket

* ws(s)://main.confluxrpc.com/ws
* ws(s)://test.confluxrpc.com/ws

### TokenView's Infura service

* https://services.tokenview.com/cn/product/infura
