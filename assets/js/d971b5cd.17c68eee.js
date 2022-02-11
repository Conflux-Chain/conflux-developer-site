(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{172:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(3),i=n(7),o=(n(0),n(182)),c={id:"transaction_explain",title:"Transaction Explanation",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/sending-tx/en/sending-tx-ultimate-guide.md",keywords:["transaction"]},r={unversionedId:"sending-tx/en/transaction_explain",id:"sending-tx/en/transaction_explain",isDocsHomePage:!1,title:"Transaction Explanation",description:"Sending a transaction is the only way to store or update data on the blockchain. Whether it is sending CFX or updating a contract state, it can only be achieved through transactions.",source:"@site/docs/sending-tx/en/sending-tx-ultimate-guide.md",sourceDirName:"sending-tx/en",slug:"/sending-tx/en/transaction_explain",permalink:"/sending-tx/en/transaction_explain",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/sending-tx/en/sending-tx-ultimate-guide.md",version:"current",frontMatter:{id:"transaction_explain",title:"Transaction Explanation",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/sending-tx/en/sending-tx-ultimate-guide.md",keywords:["transaction"]},sidebar:"docs",previous:{title:"My First Transaction",permalink:"/conflux-doc/docs/send_transaction"},next:{title:"Transaction Stages",permalink:"/sending-tx/en/transaction_stage"}},s=[{value:"How to construct a transaction",id:"how-to-construct-a-transaction",children:[{value:"Basic fields",id:"basic-fields",children:[]},{value:"nonce",id:"nonce",children:[]},{value:"Fee-related fields",id:"fee-related-fields",children:[]},{value:"data",id:"data",children:[]},{value:"Other",id:"other",children:[]}]},{value:"Transaction encoding and signature",id:"transaction-encoding-and-signature",children:[]},{value:"How to check transaction details and status",id:"how-to-check-transaction-details-and-status",children:[]},{value:"How to determine if a transaction is confirmed",id:"how-to-determine-if-a-transaction-is-confirmed",children:[]},{value:"Reasons for transaction failure",id:"reasons-for-transaction-failure",children:[{value:"Rejected by RPC",id:"rejected-by-rpc",children:[]},{value:"Stuck in the transaction pool",id:"stuck-in-the-transaction-pool",children:[]},{value:"Execution failed",id:"execution-failed",children:[]}]},{value:"Differences between Conflux and Ethereum",id:"differences-between-conflux-and-ethereum",children:[]}],l={toc:s};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Sending a transaction is the only way to store or update data on the blockchain. Whether it is sending CFX or updating a contract state, it can only be achieved through transactions.\nSending a transaction involves three phases: transaction construction, signing, and sending. Usually, the SDK of each language will provide a packaged method that can be called directly.\nHowever, if you want to know more low-level details, or if you encounter problems when sending transactions, this article may be helpful."),Object(o.b)("h2",{id:"how-to-construct-a-transaction"},"How to construct a transaction"),Object(o.b)("p",null,"To construct a transaction, first, you need to prepare the various fields of the transaction, including:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"from")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"to")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"value")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"nonce")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"data")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"gas")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"gasPrice")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"storageLimit")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"chainId")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"epochHeight"))),Object(o.b)("h3",{id:"basic-fields"},"Basic fields"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"from"),", ",Object(o.b)("inlineCode",{parentName:"p"},"to"),", ",Object(o.b)("inlineCode",{parentName:"p"},"value")," are basic fields of a transaction that correspond to the ",Object(o.b)("inlineCode",{parentName:"p"},"originating account"),", ",Object(o.b)("inlineCode",{parentName:"p"},"destination account"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"amount")," of the transaction, respectively."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"from")," is fairly easy to determine. You can simply select an external account (non-contract account) address with CFX balance. If the destination account of the transaction is a contract that is ",Object(o.b)("a",{parentName:"p",href:"/conflux-rust/internal_contract/internal_contract#sponsorwhitelistcontrol-contract"},"sponsored"),", the initiating account does not even require a CFX balance. The balance of the account can be queried through the RPC ",Object(o.b)("a",{parentName:"p",href:"/conflux-doc/docs/json_rpc#cfx_getbalance"},Object(o.b)("inlineCode",{parentName:"a"},"cfx_getBalance"))," RPC method."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"to")," is the destination account of the transaction: if you just want to initiate a CFX transfer, then ",Object(o.b)("inlineCode",{parentName:"p"},"to")," can be directly set as the CFX destination account; if you need to change the contract status, ",Object(o.b)("inlineCode",{parentName:"p"},"to")," needs to be set as the contract address; if you are deploying a new contract, ",Object(o.b)("inlineCode",{parentName:"p"},"to")," is left blank."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"value")," represents the CFX transfer amount of a transaction, and it needs to set an integer with the unit of Drip."),Object(o.b)("h3",{id:"nonce"},"nonce"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"nonce")," is the number of transactions sent by an account. In other words, it is the execution sequence number of transactions sent by an account. It can be queried through the RPC method ",Object(o.b)("a",{parentName:"p",href:"/conflux-doc/docs/json_rpc#cfx_getnextnonce"},Object(o.b)("inlineCode",{parentName:"a"},"cfx_getNextNonce")),". It has the following characteristics:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The execution of transactions on the blockchain is in the order of nonce from small to large."),Object(o.b)("li",{parentName:"ol"},"The initial value of nonce is 0, and the nonce will be increased by 1 for every transaction execution."),Object(o.b)("li",{parentName:"ol"},"The nonce cannot be reused."),Object(o.b)("li",{parentName:"ol"},"Nonce cannot be skipped: Assume that the current nonce of an account is n. If the nonce of the transaction is m such that m > n, then the transaction will not be executed until all transactions with nonce < m have been executed."),Object(o.b)("li",{parentName:"ol"},"After the transaction is sent through the ",Object(o.b)("a",{parentName:"li",href:"/conflux-doc/docs/json_rpc#cfx_sendrawtransaction"},Object(o.b)("inlineCode",{parentName:"a"},"cfx_sendRawTransaction"))," method, it will not be executed immediately. You need to wait for the miner to pack it first. After being packed, it will be executed after a delay of 5 Epochs. After the transaction is executed, the nonce of the account will increase by one.")),Object(o.b)("p",null,"Setting the nonce correctly is the key to a smooth transaction execution. Many developers will encounter the situation when the transaction is sent successfully but the execution result (receipt) does not exist. (This suggests that the transaction has not been executed. In most cases, this is due to inadvertently skipping a nonce. A skipped nonce will cause the transaction to be stuck in the transaction pool while awaiting for the previous transaction to be executed."),Object(o.b)("p",null,"When using the SDK to construct a transaction, the nonce does not need to be set manually. The SDK will automatically call ",Object(o.b)("inlineCode",{parentName:"p"},"cfx_getNonce")," to obtain the nonce. However, if you want to send transactions in batches, using ",Object(o.b)("inlineCode",{parentName:"p"},"cfx_getNonce")," to obtain nonce will cause the reuse of nonce due to the difference in time consumed for transaction send and execution. This means that, if you send multiple transactions through the SDK simultaneously, they will all use the same nonce and only one of them will be executed. (It takes a while for the transaction to be executed after it is sent while sending the transactions doesn't require much time to process.) In this case, the developer needs to manage the nonce manually: record the hash of the transaction for each transaction sent, add one to the nonce, and use the updated nonce to construct the transaction."),Object(o.b)("h3",{id:"fee-related-fields"},"Fee-related fields"),Object(o.b)("p",null,"After the transactions are sent to the network, they are packaged and executed by miners. Miners will charge a service fee for packaging transactions. This provides incentives for miners to participate in mining and keep the network running.\nIn the Conflux network, transaction fees are paid in CFX. Fees are specified by the transaction initiator through the ",Object(o.b)("inlineCode",{parentName:"p"},"gas")," and ",Object(o.b)("inlineCode",{parentName:"p"},"gasPrice")," fields of the transaction."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"gas")," field is used to specify the upper limit of the maximum amount of gas that can be paid when a transaction is executed. This can be understood as the ",Object(o.b)("inlineCode",{parentName:"p"},"limit")," of the gas that can be consumed by the transaction execution, that is, ",Object(o.b)("inlineCode",{parentName:"p"},"gasLimit"),". When a miner executes a transaction, many instructions are executed internally, and different instructions consume different amounts of gas. If the total amount of gas consumed by the transaction exceeds the ",Object(o.b)("inlineCode",{parentName:"p"},"gasLimit")," specified by the transaction,  the execution of the transaction will fail. Regular CFX transfer transactions consume ",Object(o.b)("inlineCode",{parentName:"p"},"21000")," gas. If interacting with a contract, the gas consumption will depend on the complexity of the contract's corresponding bytecode, which can be estimated using the ",Object(o.b)("a",{parentName:"p",href:"/conflux-doc/docs/json_rpc#cfx_estimategasandcollateral"},Object(o.b)("inlineCode",{parentName:"a"},"cfx_estimateGasAndCollateral"))," method. This method will return two gas-related fields:  gasUsed and ",Object(o.b)("inlineCode",{parentName:"p"},"gasLimit"),". The gasUsed is the actual amount of gas consumed by the transaction execution at the time of estimation. The ",Object(o.b)("inlineCode",{parentName:"p"},"gasLimit")," is the ",Object(o.b)("inlineCode",{parentName:"p"},"gas")," value set by transaction sending recommendation (slightly larger than ",Object(o.b)("inlineCode",{parentName:"p"},"gasUsed"),") to avoid transaction failure caused by inaccurate (smaller) estimation. Only 25% of the exceeding actual gas (compared to the ",Object(o.b)("inlineCode",{parentName:"p"},"gasLimit")," value) will be returned. Therefore it is important to set the transaction ",Object(o.b)("inlineCode",{parentName:"p"},"gasLimit")," appropriately."),Object(o.b)("p",null,"To help miners estimate their revenue with reasonable accuracy, at most 25% of the overall ",Object(o.b)("inlineCode",{parentName:"p"},"gas")," provided will be refunded. In other words, ",Object(o.b)("strong",{parentName:"p"},"the sender needs to pay at least 75% of the gas costs, even if the actual transaction execution consumed much less gas"),". Therefore it is important to set the transaction gas limit appropriately."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"gasPrice")," is the amount of CFX that the transaction initiator is willing to pay per gas. The unit is Drip. Thus, the calculation of the upfront gas fee charged for transaction execution is gas * gasPrice. As mentioned before, up to 25% of this fee can be refunded to the sender."),Object(o.b)("p",null,"Miners will pack transactions with higher payouts first. If the network is congested, you can speed up the packing of transactions by increasing the ",Object(o.b)("inlineCode",{parentName:"p"},"gasPrice")," value. If the transaction is stuck for some reason, or if you want to speed up the packing of the transaction, try raising ",Object(o.b)("inlineCode",{parentName:"p"},"gasPrice")," and resending the transaction with the same nonce. Fullnode provides an RPC method ",Object(o.b)("a",{parentName:"p",href:"/conflux-doc/docs/json_rpc#cfx_gasprice"},Object(o.b)("inlineCode",{parentName:"a"},"cfx_gasPrice"))," that returns a reasonable ",Object(o.b)("inlineCode",{parentName:"p"},"gasPrice")," value based on the current network conditions."),Object(o.b)("p",null,"In addition to transaction fees, in the Conflux network, if new storage space is occupied during the transaction's execution, some CFX are pledged for that space occupation. The annualized %4 interest generated by the pledged CFX will be paid to the miners to subsidize their storage costs. If the occupied space is released, the pledged CFX will be released and returned to the sender of the transaction. For every 1KB of new space taken, 1 CFX is pledged. The ",Object(o.b)("inlineCode",{parentName:"p"},"storageLimit")," field is used to specify the upper limit of the space (in bytes) occupied by a transaction execution. If the transaction tries to occupy more storage than allowed by the storageLimit field, the transaction fails and no CFX is pledged."),Object(o.b)("p",null,"Therefore, when sending a transaction, you need to ensure the sending account has enough balance to pay: ",Object(o.b)("inlineCode",{parentName:"p"},"value + storageLimit * (10^18/1024) + gas * gasPrice"),". If the balance is insufficient, instead of failing directly, the transaction may get stuck in the transaction pool and get executed once the sender's balance is sufficient. If the transaction is interacting with the contract, and the contract has a sponsor, you only need to ensure that the balance is enough to pay for value."),Object(o.b)("p",null,"The current SDK automatically calls the ",Object(o.b)("inlineCode",{parentName:"p"},"cfx_estimateGasAndCollateral")," method to set reasonable ",Object(o.b)("inlineCode",{parentName:"p"},"gas"),", ",Object(o.b)("inlineCode",{parentName:"p"},"storageLimit")," values for the transaction and the ",Object(o.b)("inlineCode",{parentName:"p"},"cfx_gasPrice")," method to set a reasonable ",Object(o.b)("inlineCode",{parentName:"p"},"gasPrice")," value. Of course, the users can also specify more reasonable values manually."),Object(o.b)("h3",{id:"data"},"data"),Object(o.b)("p",null,"The data field of the transaction can be left blank or set to a hex-encoded byte array. This can be roughly categorized into three situations:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Regular CFX transfer transaction: The ",Object(o.b)("inlineCode",{parentName:"li"},"data")," field is usually blank, but hex-encoded data can be set as a transaction remark or postscript."),Object(o.b)("li",{parentName:"ul"},"Contract deployment transaction: ",Object(o.b)("inlineCode",{parentName:"li"},"data")," needs to be set as the contract's bytecode and the parameters of the constructor (if any)"),Object(o.b)("li",{parentName:"ul"},"Contract call transaction: The ",Object(o.b)("inlineCode",{parentName:"li"},"data")," field is used to store the input data for the contract to call. The data is usually the contract method and data after parameter abi encoding. (When sending CFX to a contract, the data field is usually left blank)")),Object(o.b)("p",null,"Smart contracts are usually written in high-level contract development languages (Solidity, vyper). You can use a compiler to obtain bytecode and abi. SDK will provide abi encoding methods for the encoding of the contract method call (encoding the method name and parameters)."),Object(o.b)("h3",{id:"other"},"Other"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"chainId")," is used to identify a chain. The current chainId of the Conflux Tethys network is ",Object(o.b)("inlineCode",{parentName:"p"},"1029"),", while that of the Conflux testnet is ",Object(o.b)("inlineCode",{parentName:"p"},"1"),". The chainId is included in the transaction mainly to prevent transaction replay attacks.  This field usually does not need to be filled manually. SDK will automatically obtain the current RPC chainId through the ",Object(o.b)("a",{parentName:"p",href:"/conflux-doc/docs/json_rpc#cfx_getstatus"},Object(o.b)("inlineCode",{parentName:"a"},"cfx_getStatus"))," method."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"epochHeight")," is used to specify the target Epoch range for a transaction. Transactions will only be executed in the range of ","[Te \u2212 100000, Te + 100000]",". If the Epoch of the current chain exceeds that range, the transaction will be discarded. SDK also sets this field to the current Epoch obtained by the ",Object(o.b)("a",{parentName:"p",href:"/conflux-doc/docs/json_rpc#cfx_epochnumber"},Object(o.b)("inlineCode",{parentName:"a"},"cfx_epochNumber"))," method automatically."),Object(o.b)("h2",{id:"transaction-encoding-and-signature"},"Transaction encoding and signature"),Object(o.b)("p",null,"After the fields of the transaction are determined, transactions need to be rlp encoded in a specific format, and the encoded keccak256 hash will be signed by the private key of the sending account. Finally, a rawTransaction will be assembled. The rawTransaction can be sent to the Conflux network through the ",Object(o.b)("inlineCode",{parentName:"p"},"cfx_sendRawTransaction")," method, awaiting to be packaged and executed by the miners."),Object(o.b)("p",null,"The specific steps are as follows (take js-conflux-sdk as an example):"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Parse each field of the transaction into buffer"),Object(o.b)("li",{parentName:"ol"},"Assemble each field into an array or tuple in the order of ",Object(o.b)("inlineCode",{parentName:"li"},"(nonce, gasPrice, gas, to, value, storageLimit, epochHeight, chainId, data)")," and perform rlp encoding."),Object(o.b)("li",{parentName:"ol"},"Perform the ",Object(o.b)("inlineCode",{parentName:"li"},"keccak256")," operation on the encoded result to obtain a hash"),Object(o.b)("li",{parentName:"ol"},"Use the private key of the sending account to perform the ecdsaSign signature operation to the hash obtained in the previous step. After that, r, s, v are obtained."),Object(o.b)("li",{parentName:"ol"},"Assemble all the information according to ",Object(o.b)("inlineCode",{parentName:"li"},"((nonce, gasPrice, gas, to, value, storageLimit, epochHeight, chainId, data), v, r, s)")," and perform rlp encoding."),Object(o.b)("li",{parentName:"ol"},"Finally, convert the encoded buffer in the previous step into a hex string, and then, you will get a rawTransaction that can be sent directly.")),Object(o.b)("h2",{id:"how-to-check-transaction-details-and-status"},"How to check transaction details and status"),Object(o.b)("p",null,"After the transaction is successfully sent, it will first be placed in the transaction pool. When the packaging conditions are met, the transaction will be packaged by the miner into the latest block. At this time, you can query the information and status of the transaction through ",Object(o.b)("a",{parentName:"p",href:"/conflux-doc/docs/json_rpc#cfx_gettransactionbyhash"},Object(o.b)("inlineCode",{parentName:"a"},"cfx_getTransactionByHash")),".\nThe ",Object(o.b)("inlineCode",{parentName:"p"},"status")," field of the returned result indicates the execution status of the transaction:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"null"),": not executed"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"0x0"),": Execution successful"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"0x1"),": Execution failed, transaction was reverted"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"0x2"),": The transaction was skipped")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "result": {\n        "blockHash": "0x398879d9e7d37e2cc87af268fcd2207a689e2e84986e9251a5343dafca3d93b7",\n        "chainId": "0x405",\n        "contractCreated": null,\n        "data": "0x",\n        "epochHeight": "0xd03609",\n        "from": "CFX:TYPE.USER:AAKETJH9TKJ5G2K4ZX3KFVB9VKKU8NR956N0EN4FHE",\n        "gas": "0x5208",\n        "gasPrice": "0x2540be400",\n        "hash": "0xa76efec071e0779785b6653aebb2382a5e460b60a163a1b166df3c8164cec6d9",\n        "nonce": "0xa08d9",\n        "r": "0x38e661ad41790c069a4795df21eade5ef9605dbcbdfd5dabbb0dc322e833e4c1",\n        "s": "0x66ca875464c554261033f4522281d564bdba4f0189d357579dcbf2b1ed98936b",\n        "status": "0x0",\n        "storageLimit": "0x0",\n        "to": "CFX:TYPE.USER:AATT0JGE4J70V4H0Z43VJ9M29ZJ7ASNS0YA238MGZC",\n        "transactionIndex": "0x1",\n        "v": "0x0",\n        "value": "0xde0b93b7d70bec0"\n    },\n    "id": "15922956697249514502"\n}\n')),Object(o.b)("p",null,"The transaction will not be executed immediately after it's packaged, and the transaction's ",Object(o.b)("inlineCode",{parentName:"p"},"status")," is ",Object(o.b)("inlineCode",{parentName:"p"},"null")," at that point. After a delay of 4 Epochs, the status of the transaction would change to ",Object(o.b)("inlineCode",{parentName:"p"},"0x0"),", ",Object(o.b)("inlineCode",{parentName:"p"},"0x1"),", or ",Object(o.b)("inlineCode",{parentName:"p"},"0x2"),". (",Object(o.b)("inlineCode",{parentName:"p"},"0x0")," for success, ",Object(o.b)("inlineCode",{parentName:"p"},"0x1")," for failure, and ",Object(o.b)("inlineCode",{parentName:"p"},"0x2")," for skip.)"),Object(o.b)("p",null,"You can also get the transaction execution receipt through ",Object(o.b)("a",{parentName:"p",href:"/conflux-doc/docs/json_rpc#cfx_gettransactionreceipt"},Object(o.b)("inlineCode",{parentName:"a"},"cfx_getTransactionReceipt")),". This can only be obtained after the transaction has been executed, otherwise, it will return ",Object(o.b)("inlineCode",{parentName:"p"},"null"),". The receipt contains a field ",Object(o.b)("inlineCode",{parentName:"p"},"outcomeStatus")," which can also be used to determine whether the transaction is executed successfully: ",Object(o.b)("inlineCode",{parentName:"p"},"0x0")," indicates success, others indicate failure."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "result": {\n        "blockHash": "0x398879d9e7d37e2cc87af268fcd2207a689e2e84986e9251a5343dafca3d93b7",\n        "contractCreated": null,\n        "epochNumber": "0xd0360f",\n        "from": "CFX:TYPE.USER:AAKETJH9TKJ5G2K4ZX3KFVB9VKKU8NR956N0EN4FHE",\n        "gasCoveredBySponsor": false,\n        "gasFee": "0xbefe6f672000",\n        "gasUsed": "0x5208",\n        "index": "0x1",\n        "logs": [],\n        "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",\n        "outcomeStatus": "0x0",\n        "stateRoot": "0x8c05b8eb6b9dc69f2e7bb235621487022e694ce3969202b94e76227673a0b86b",\n        "storageCollateralized": "0x0",\n        "storageCoveredBySponsor": false,\n        "storageReleased": [],\n        "to": "CFX:TYPE.USER:AATT0JGE4J70V4H0Z43VJ9M29ZJ7ASNS0YA238MGZC",\n        "transactionHash": "0xa76efec071e0779785b6653aebb2382a5e460b60a163a1b166df3c8164cec6d9",\n        "txExecErrorMsg": null\n    },\n    "id": "15922956697249514502"\n}\n')),Object(o.b)("h2",{id:"how-to-determine-if-a-transaction-is-confirmed"},"How to determine if a transaction is confirmed"),Object(o.b)("p",null,"In the blockchain, a block can be reverted after being executed. Accordingly, a transaction can also be reversed after being executed. The status of the transaction can only be considered final once the block has been confirmed.\nThere are two ways to determine whether a transaction (block) is confirmed in Conflux:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"If the latest ",Object(o.b)("inlineCode",{parentName:"li"},"confirmed epochNumber")," of the network is greater than the epochNumber of the transaction, the transaction is confirmed. By calling ",Object(o.b)("inlineCode",{parentName:"li"},"cfx_epochNumber")," method and passing ",Object(o.b)("inlineCode",{parentName:"li"},"latest_confirmed")," parameter, you can obtain the latest confirmed ",Object(o.b)("inlineCode",{parentName:"li"},"epochNumber"),". epochNumber of the transaction is in its receipt. "),Object(o.b)("li",{parentName:"ol"},"You can obtain a block's confirmation risk value by calling the method ",Object(o.b)("a",{parentName:"li",href:"/conflux-doc/docs/json_rpc#cfx_getconfirmationriskbyhash"},Object(o.b)("inlineCode",{parentName:"a"},"cfx_getConfirmationRiskByHash")),". If ",Object(o.b)("em",{parentName:"li"},"risk/MAX_UINT256 is less than 1e-8"),", the block is confirmed and will not be reverted. The block hash of the transaction can be obtained through ",Object(o.b)("inlineCode",{parentName:"li"},"cfx_getTransactionByHash"),".")),Object(o.b)("p",null,"In Conflux, usually, a block can be confirmed after 50 epochs (within one minute). If the transaction involves a large amount, you might need to wait for more epochs according to the situation."),Object(o.b)("h2",{id:"reasons-for-transaction-failure"},"Reasons for transaction failure"),Object(o.b)("p",null,"Based on the stage in which the transaction fails, there are three categories of failures:"),Object(o.b)("h3",{id:"rejected-by-rpc"},"Rejected by RPC"),Object(o.b)("p",null,"The sending transaction is directly rejected by RPC. The reason for rejection can be found in the ",Object(o.b)("inlineCode",{parentName:"p"},"message")," field of RPC Response."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"Invalid parameters: tx', 'data': '\"Failed imported to deferred pool: Tx with same nonce already inserted. To replace it, you need to specify a gas price > 5")," The error code indicates that the same nonce has been used in the transaction pool and cannot be reused. However, you can replace an existing transaction by sending a transaction with the same nonce but higher gas price."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"'Invalid parameters: tx', 'data': '\"Transaction 0x2004b0aea956e8cfad601cd6daad5630c1a95624bad446d1966895973325136c is discarded due to a too stale nonce")," This indicates that the same nonce used has been used in history and cannot be used again."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"Sending transactions to invalid address. The first four bits must be 0x0 (built-in/reserved), 0x1 (user-account), or 0x8 (contract).")," This indicates that the receiving address of the transaction is wrong."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"Transaction {:?} is discarded due to in too distant future")," This indicates that the transaction is using a nonce that is too large for the account's current nonce"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"tx already exist")," This indicates that the transaction already exists.")),Object(o.b)("p",null,"Sometimes, the ",Object(o.b)("inlineCode",{parentName:"p"},"data")," of Response will also contain some error information. \uff08This field is a hex-encoded string. The parsing method is: hex -> buffer -> UTF8 string\uff09"),Object(o.b)("h3",{id:"stuck-in-the-transaction-pool"},"Stuck in the transaction pool"),Object(o.b)("p",null,"The transaction is sent successfully but not be packaged. There are two possible reasons:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The skipped nonce is used, and the transaction of the previous nonce has not been generated or executed."),Object(o.b)("li",{parentName:"ol"},"The account sending this transaction does not have enough balance to pay the transaction.")),Object(o.b)("h3",{id:"execution-failed"},"Execution failed"),Object(o.b)("p",null,"Execution failure is usually due to an error that occurred during the execution process of the contract, which then caused the transaction failure. Such errors are mostly caused by contract execution failures or errors returned when estimating gas cost through the estimate interface.\nYou can check the specific reason for the transaction failure in the ",Object(o.b)("inlineCode",{parentName:"p"},"txExecErrorMsg")," under receipt:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"VmError(OutOfGas)")," The transaction specified gas fee is not enough"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"VmError(ExceedStorageLimit)")," The transaction specified upper-limit storage is not enough"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"NotEnoughCash")," Insufficient user balance"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"Vm reverted, Reason provided by the contract: xxxx")," The contract execution failed with details provided. "),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"VmError(BadInstruction xxxx)")," Contract deployment failed"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"Vm reverted, xxxx")," The contract execution failed with no details provided.")),Object(o.b)("h2",{id:"differences-between-conflux-and-ethereum"},"Differences between Conflux and Ethereum"),Object(o.b)("p",null,"Compared to Ethereum ",Object(o.b)("inlineCode",{parentName:"p"},"155 transaction"),", transactions through Conflux have several differences:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Two more fields: ",Object(o.b)("inlineCode",{parentName:"li"},"storageLimit"),", and ",Object(o.b)("inlineCode",{parentName:"li"},"epochNumber"),"."),Object(o.b)("li",{parentName:"ul"},"The RLP encoding assembly method of the transaction is different. ",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"When compute transaction hash the RLP structure is ",Object(o.b)("inlineCode",{parentName:"li"},"[nonce, gasPrice, gas, to, value, storageLimit, epochHeight, chainId, data]")),Object(o.b)("li",{parentName:"ol"},"When assemble rawTx the RLP structure is ",Object(o.b)("inlineCode",{parentName:"li"},"[[nonce, gasPrice, gas, to, value, storageLimit, epochHeight, chainId, data], v, r, s]")))),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"v")," value signed by ecdsaSign will not be specifically modified in Conflux; while In Ethereum, there will be some special treatments to the v value."),Object(o.b)("li",{parentName:"ul"},"Finally, while Ethereum nodes directly reject transactions if the sender has insufficient balance, Conflux nodes accept such transactions but only pack them info blocks once the user's balance can cover it")))}d.isMDXComponent=!0},182:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},b=function(e){var t=d(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=d(n),u=a,p=b["".concat(c,".").concat(u)]||b[u]||h[u]||o;return n?i.a.createElement(p,r(r({ref:t},l),{},{components:n})):i.a.createElement(p,r({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,c[1]=r;for(var l=2;l<o;l++)c[l]=n[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);