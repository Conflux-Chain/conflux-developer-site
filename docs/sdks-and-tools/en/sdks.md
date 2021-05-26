---
id: conflux_sdks
title: SDKs
custom_edit_url: https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/sdks-and-tools/en/sdks.md
keywords:
  - SDK
---
Conflux has SDKs for mainstream programming languages, including `JavaScript`, `Golang`, `Java` and `Python`. This is just a short introduction to the SDKs, for detailed usage info, check their respective documentation.

## [js-conflux-sdk](https://confluxnetwork.gitbook.io/js-conflux-sdk/)
If you are familiar with JavaScript or Node.js, or if you want to build a web site to interact with your contract, `js-conflux-sdk` is right for you. It has a lot of useful features.

```js
const {Conflux} = require('js-conflux-sdk');

async function main() {
  let cfx = new Conflux({
    url: "https://test.confluxrpc.com",
    networkId: 1,
  });

  let balance = await cfx.getBalance("cfxtest:aakkfzezns4h8ymx1cgmcnd4x3aev6e2he38nnu8sv");
  console.log("balance: ", balance);
}

main().catch(console.log);
```

## [go-conflux-sdk](https://github.com/conflux-chain/go-conflux-sdk)
Golang is a great language: fast, easy to use, and stable. In blockchain world a lot projects are developing with Go. If you want to develop a backend service which needs to communicate with Conflux network, `go-conflux-sdk` suits for you.

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
Java is really a long live programming language. `java-conflux-sdk` can be used to talk to a Conflux node. It is evolved from the [web3j](https://docs.web3j.io/) library. Some of web3j's utility functions also work on the Conflux network.

```java
package conflux.sdk.examples;
import java.math.BigInteger;
import conflux.web3j.Cfx;

public class App {
  public static void main(String[] args) throws Exception {
    int retry = 3;
    int intervalMills = 1000;  // interval(milliseconds) between retry
    Cfx cfx = Cfx.create("https://test.confluxrpc.com", retry, intervalMills);
    BigInteger epoch = cfx.getEpochNumber().sendAndGet();
    System.out.println("Current epoch: " + epoch);
  }
}
```

## [python-conflux-sdk](https://github.com/conflux-chain/python-conflux-sdk)
Python is the first choice for a lot of developers, we also have `python-conflux-sdk` for you.

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

