---
id: conflux_sdks
title: SDKs
custom_edit_url: https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/sdks-and-tools/en/sdks.md
keywords:
  - SDK
---
Conflux have SDKs for main stream programming language, Including `JavaScript`, `Golang`, `Java`, `Python`. This is just an short introduction of SDKs, for detail usage info, check their respective documentation.

## [js-conflux-sdk](https://github.com/conflux-chain/js-conflux-sdk)
If you are familiar with JavaScript or Node.js; if you want to build an web page to interact with your contract, `js-conflux-sdk` is right for you. It has a lot useful feature.

* Provider HttpProvider, WebsocketProvider
* Support all Conflux RPC methods
* Account management
* Easy contract interaction

```js
const {Conflux} = require('js-conflux-sdk');

async function main() {
  let cfx = new Conflux({
    url: "https://test.confluxrpc.com",
    networkId: 1,
  });

  let balance = await cfx.getBalance("cfx:aakkfzezns4h8ymx1cgmcnd4x3aev6e2hexz250ym5");
  console.log("balance: ", balance);
}

main().catch(console.log);
```

## [go-conflux-sdk](https://github.com/conflux-chain/go-conflux-sdk)
Golang is a great language: fast, easy to use, stable. In blockchain world a lot projects is developing with Go. If you want to develop a backend service which need to communicate with Conflux network, `go-conflux-sdk` suit for you.

```go
package main

import (
	"fmt"

	conflux "github.com/Conflux-Chain/go-conflux-sdk"
)

func main() {
	client, err := conflux.NewClient("https://test.confluxrpc.com")
	if err != nil {
		fmt.Println("failed to create client:", err)
		return
	}
	defer client.Close()

	epoch, err := client.GetEpochNumber()
	if err != nil {
		fmt.Println("failed to get epoch number:", err)
		return
	}

	fmt.Println("Current epoch number:", epoch)
}

```

## [java-conflux-sdk](https://github.com/conflux-chain/java-conflux-sdk)
Java is really an long live programming language. `java-conflux-sdk` can used to talk with an Conflux node. It is evolved from the [web3j](https://docs.web3j.io/) library. Some of web3j's utilities function also work on Conflux network.

```java
package conflux.sdk.examples;
import java.math.BigInteger;
import conflux.web3j.Cfx;

public class App {
	
  public static void main(String[] args) throws Exception {
		Cfx cfx = Cfx.create("https://test.confluxrpc.org/v2", 3, 1000);
		BigInteger epoch = cfx.getEpochNumber().sendAndGet();
		System.out.println("Current epoch: " + epoch);
	}

}
```

## [python-conflux-sdk](https://github.com/conflux-chain/python-conflux-sdk)
Python is also a lot developers first choice, we also have `python-conflux-sdk` for you.

```python
from conflux import (
    Conflux,
    HTTPProvider,
)
provider = HTTPProvider('https://test.confluxrpc.com')
c = Conflux(provider)

# get RPC's clientVersion
print(c.clientVersion)

test_address = 'cfxtest:aak7fsws4u4yf38fk870218p1h3gxut3ku00u1k1da'
balance = c.cfx.getBalance(test_address)
print(balance)
```

