(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{191:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),c=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var s=c.a.createContext({}),d=function(e){var t=c.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=d(e.components);return c.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},u=c.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=d(n),u=a,m=b["".concat(r,".").concat(u)]||b[u]||p[u]||o;return n?c.a.createElement(m,i(i({ref:t},s),{},{components:n})):c.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var s=2;s<o;s++)r[s]=n[s];return c.a.createElement.apply(null,r)}return c.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),c=n(7),o=(n(0),n(191)),r={id:"contract_introduction",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/contract/en/introduce.md",keywords:["contract introduction"]},i={unversionedId:"contract/en/contract_introduction",id:"contract/en/contract_introduction",isDocsHomePage:!1,title:"Introduction to Smart Contracts",description:"What is a Smart Contract?",source:"@site/docs/contract/en/introduce.md",sourceDirName:"contract/en",slug:"/contract/en/contract_introduction",permalink:"/contract/en/contract_introduction",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/contract/en/introduce.md",version:"current",frontMatter:{id:"contract_introduction",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/contract/en/introduce.md",keywords:["contract introduction"]},sidebar:"docs",previous:{title:"Transaction FAQs",permalink:"/sending-tx/en/transaction_faqs"},next:{title:"SDKs",permalink:"/sdks-and-tools/en/conflux_sdks"}},l=[{value:"Example",id:"example",children:[{value:"Compilation",id:"compilation",children:[]},{value:"Deploy",id:"deploy",children:[]},{value:"Calling smart contracts",id:"calling-smart-contracts",children:[]}]},{value:"Additional resources",id:"additional-resources",children:[]}],s={toc:l};function d(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"What is a Smart Contract?"),Object(o.b)("p",null,"The concept of smart contracts was first proposed by Nick Szabo in 1995. A Smart contract is a computer protocol designed to disseminate, verify or execute contracts in an informational manner. Smart contracts allow transactions to be executed without a trusted third party, and the transactions are traceable and irreversible. "),Object(o.b)("p",null,"Its purpose is to provide a secure method that outperforms traditional contracts and reduces other transaction costs associated with contracts. "),Object(o.b)("p",null,'For Conflux network, a "smart contract" is a simple program that runs on the Conflux chain. Each instance of a smart contract is a collection of code and data that resides at a specific address on the Conflux chain. Since the state on the blockchain is fully deterministic, operations on smart contracts are guaranteed to produce the same results on all blockchain nodes. Furthermore, since smart contracts run on the blockchain, the decentralization and non-tamperable characteristics of the blockchain ensure certainty and security in the operation of the contract. Therefore, a wide range of decentralized applications (DApps) are created based on smart contracts, including games, digital collectibles, online voting systems, financial products, etc. '),Object(o.b)("p",null,"There are two account types on the Conflux chain: user accounts and smart contract accounts. Once the smart contract is deployed, a corresponding smart contract account is created. Smart contract accounts have a CFX balance and they can also interact with other accounts. However, they are not controlled by users but by the program deployed on the network. User accounts are able to interact with smart contracts by submitting transactions that execute the functions defined on the smart contract. The smart contract enables us to define rules just like traditional contracts and automates the execution through codes. "),Object(o.b)("p",null,"Nick Szabo used the example of a vending machine to describe how real-world contractual obligations can be programmed into software and hardware systems. Each person simply puts the correct number of coins into the machine and can expect to receive a product in exchange. Similarly, on Conflux, a smart contract is able to perform a certain task and get a certain result under specified conditions. "),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"Let's look at one of the simplest smart contract implementations of a vending machine."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'pragma solidity ^0.8.0;\n\ncontract VendingMachine {\n\n    // Declare state variables of the contract\n    address public owner;\n    mapping (address => uint) public cupcakeBalances;\n\n    // Declare event for record purchase event\n    event Purchase(address customer, uint amount);\n\n    // When \'VendingMachine\' contract is deployed:\n    // 1. set the deploying address as the owner of the contract\n    // 2. set the deployed smart contract\'s cupcake balance to 100\n    constructor() {\n        owner = msg.sender;\n        cupcakeBalances[address(this)] = 100;\n    }\n\n    // Get user\'s cupcake balance\n    function balanceOf(address user) public view returns(uint) {\n        return cupcakeBalances[user];\n    }\n\n    // Allow the owner to increase the smart contract\'s cupcake balance\n    function refill(uint amount) public {\n        require(msg.sender == owner, "Only the owner can refill.");\n        cupcakeBalances[address(this)] += amount;\n    }\n\n    // Allow anyone to purchase cupcakes\n    function purchase(uint amount) public payable {\n        require(msg.value >= amount * 1 ether, "You must pay at least 1 CFX per cupcake");\n        require(cupcakeBalances[address(this)] >= amount, "Not enough cupcakes in stock to complete this purchase");\n        cupcakeBalances[address(this)] -= amount;\n        cupcakeBalances[msg.sender] += amount;\n        emit Purchase(msg.sender,amount);\n    }\n}\n')),Object(o.b)("p",null,"This contract has two functions:  method ",Object(o.b)("inlineCode",{parentName:"p"},"refill")," enables administrators to refill the products;  method ",Object(o.b)("inlineCode",{parentName:"p"},"purchase")," enables the customers to purchase products using CFX tokens. Just like how vending machines eliminate the need for salesmen, smart contracts can eliminate intermediaries in many industries. "),Object(o.b)("p",null,"The smart contract is a set of code (contract function) and data (contract state variables). For the line ",Object(o.b)("inlineCode",{parentName:"p"},"mapping (address => uint) public cupcakeBalances;")," , it declares a state variable named cupcakeBalances with type ",Object(o.b)("inlineCode",{parentName:"p"},"mapping (address => uint)"),". You can see it as a table in the database. Meanwhile, the contract methods ",Object(o.b)("inlineCode",{parentName:"p"},"refill")," and  ",Object(o.b)("inlineCode",{parentName:"p"},"purchase")," are used to read or modify the state of the data in that database table. "),Object(o.b)("p",null,"This contract is written in ",Object(o.b)("inlineCode",{parentName:"p"},"solidity"),", whose syntax is similar to  ",Object(o.b)("inlineCode",{parentName:"p"},"javascript"),". "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"pragma solidity ^0.8.0;")," indicates that this contract needs to be compiled with a ",Object(o.b)("inlineCode",{parentName:"li"},">=0.8.0<0.9.0")," compiler."),Object(o.b)("li",{parentName:"ul"},"contract ",Object(o.b)("inlineCode",{parentName:"li"},"VendingMachine")," assigns the contract name as ",Object(o.b)("inlineCode",{parentName:"li"},"VendingMachine")," ;"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"address public owner;")," defines a public state variable with the name ",Object(o.b)("inlineCode",{parentName:"li"},"owner")," and type ",Object(o.b)("inlineCode",{parentName:"li"},"address"),"; "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"event Purchase(address customer, uint amount);")," defines the ",Object(o.b)("inlineCode",{parentName:"li"},"event")," with the name ",Object(o.b)("inlineCode",{parentName:"li"},"Purchase"),". ",Object(o.b)("inlineCode",{parentName:"li"},"event")," is similar to the logging function in other languages. Its role is mainly to record some important information when the contract is executed. For example, ",Object(o.b)("inlineCode",{parentName:"li"},"Purchase")," is an event that generates a purchase record when a customer purchases an item."),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"constructor")," unction is executed exactly once when the contract is deployed; "),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"balanceOf")," function (marked as ",Object(o.b)("inlineCode",{parentName:"li"},"view"),") is a read-only function that can't be used to modify the contract state;"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"refill")," function is an ordinary function, can be called by sending a transaction. This function will change the contract state; "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"require(msg.sender == owner,..);")," indicates that only when the condition ",Object(o.b)("inlineCode",{parentName:"li"},"msg.sender == owner")," is fulfilled (that is, the caller is the administrator), the state of contract variable ",Object(o.b)("inlineCode",{parentName:"li"},"cupcakeBalances")," can be modified to refill the products; "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"purchase")," function includes ",Object(o.b)("inlineCode",{parentName:"li"},"payable"),", indicating that you can send CFX at the same time when the function is called. Since customers need to pay CFX to purchase, it is marked as ",Object(o.b)("inlineCode",{parentName:"li"},"payable"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"require(msg.value >= amount * 1 ether,..)")," indicates the full amount of CFX must be paid in order to complete the purchase. "),Object(o.b)("li",{parentName:"ul"},"The number of products in the vending machines decreases after a successful purchase and the number of goods owned by the customers (indicated by ",Object(o.b)("inlineCode",{parentName:"li"},"cupcakeBalances[msg.sender]"),") increases. ")),Object(o.b)("p",null,"After writing the contract, you need to first compile the contract and then deploy it to the Conflux chain by sending a ",Object(o.b)("a",{parentName:"p",href:"https://developer.confluxnetwork.org/introduction/en/conflux_basics#transactions"},"transaction"),".  Then, you can interact with the contract by calling it. "),Object(o.b)("p",null,"Once the contract is deployed, anyone can call it. However, the state of the contract will be changed only when a certain condition is satisfied. "),Object(o.b)("p",null,"For further instructions on the Solidity language, please refer to ",Object(o.b)("a",{parentName:"p",href:"https://docs.soliditylang.org/en/v0.8.4/"},"the official Solidity Documentation")),Object(o.b)("p",null,"Next, we will introduce the process of compilation, deployment, invocation, and contract execution. "),Object(o.b)("h3",{id:"compilation"},"Compilation"),Object(o.b)("p",null,"Contract compilation is the process of generating the elements required when deploying the contract from the contract code through the compiler. There are two main parts in the compilation result, ",Object(o.b)("inlineCode",{parentName:"p"},"abi")," and ",Object(o.b)("inlineCode",{parentName:"p"},"bytecode"),". "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Bytecode: smart contracts are executed on the Ethereum Virtual Machine (EVM). The bytecode is the hexadecimal value corresponding to the contract that the EVM can recognize. ")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"ABI: ABI refers to Application Binary Interface, which describes function name, modifier, visibility, parameter name, and its type, returns value name and its type, and description of events in the public interface of contract (in JSON format). When we call the contract function externally and encode it in a certain way based on the description of the function in the ABI, we can get a value that the EVM can recognize and display in hexadecimal format. You can use this value to interact with the contract. "))),Object(o.b)("p",null,"You can use ",Object(o.b)("inlineCode",{parentName:"p"},"solc"),", ",Object(o.b)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/conflux-truffle"},"conflux-truffle")," to compile the smart contract. "),Object(o.b)("p",null,"Here, we take solc as an example"),Object(o.b)("p",null,"Install solc"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"npm install -g solc\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Attention: The compiler version needs to match the version specified in the contract, to download the v0.6.12 version, use ",Object(o.b)("inlineCode",{parentName:"p"},"npm install -g solc@v0.6.12"))),Object(o.b)("p",null,"Compilation"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"solcjs ./VendingMachine.sol --bin --abi\n")),Object(o.b)("p",null,"Generating ",Object(o.b)("inlineCode",{parentName:"p"},"bytecode")," file  ",Object(o.b)("inlineCode",{parentName:"p"},"__...VendingMachine.bin")," and ",Object(o.b)("inlineCode",{parentName:"p"},"abi")," file ",Object(o.b)("inlineCode",{parentName:"p"},"__...VendingMachine.abi")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"__...VendingMachine.bin")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"60806040523480156100...bfea2646970667358221220761301cb41bc1e4c37cc823f17fd695c6c09521a3e09fe1e8a7c51f6e77181a464736f6c63430008000033\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"__...VendingMachine.abi")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'[\n    {\n      "inputs": [],\n      "stateMutability": "nonpayable",\n      "type": "constructor"\n    },\n    {\n      "anonymous": false,\n      "inputs": [\n        {\n          "indexed": false,\n          "internalType": "address",\n          "name": "customer",\n          "type": "address"\n        },\n        {\n          "indexed": false,\n          "internalType": "uint256",\n          "name": "amount",\n          "type": "uint256"\n        }\n      ],\n      "name": "Purchase",\n      "type": "event"\n    },\n    ......\n  ]\n')),Object(o.b)("h3",{id:"deploy"},"Deploy"),Object(o.b)("p",null,"The contract deployment is creating a contract instance on the Conflux blockchain by sending a ",Object(o.b)("a",{parentName:"p",href:"https://developer.confluxnetwork.org/introduction/en/conflux_basics#transactions"},"transaction")," with ",Object(o.b)("inlineCode",{parentName:"p"},"data")," as ",Object(o.b)("inlineCode",{parentName:"p"},"bytecode")," and ",Object(o.b)("inlineCode",{parentName:"p"},"to")," left empty."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"If the constructor contains parameters, ",Object(o.b)("inlineCode",{parentName:"p"},"data")," should be a combination of ",Object(o.b)("inlineCode",{parentName:"p"},"bytecode")," and the ABI encoding of the ",Object(o.b)("inlineCode",{parentName:"p"},"constructor"),".")),Object(o.b)("p",null,"We will use ",Object(o.b)("inlineCode",{parentName:"p"},"js-conflux-sdk")," to demonstrate."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'const { Conflux } = require("js-conflux-sdk");\n\n(async function () {\n    const cfx = await Conflux.create({ url: "https://test.confluxrpc.com" })\n    const account = cfx.wallet.addPrivateKey("0x2139FB4C55CB9AF7F0086CD800962C2E9013E2292BAE77978A9209E3BEE71D49")\n\n    // your bytecode\n    let bytecode = "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffff......0008000033"\n\n    let deployReceipt = await cfx.sendTransaction({\n        from: account.address,\n        data: bytecode\n    }).executed()\n\n    // or use contract instance\n    // let vendingMachine = cfx.Contract({ bytecode })\n    // let deployReceipt = await vendingMachine.constructor().sendTransaction({from:account.address}).executed()\n\n    console.log("deploy tx receipt:", deployReceipt)\n})()\n\n')),Object(o.b)("p",null,"As shown in the example above, the contract is deployed after sending a ",Object(o.b)("a",{parentName:"p",href:"https://developer.confluxnetwork.org/introduction/en/conflux_basics#transactions"},"transaction")," with data as bytecode. The ",Object(o.b)("inlineCode",{parentName:"p"},"contractCreated")," field of the ",Object(o.b)("inlineCode",{parentName:"p"},"transaction receipt")," is the contract address after deployment. "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"deploy tx receipt: {\n  blockHash: '0xe1b7f118447d3f945db4c2cf5752e592e542d4b9d24d0312b4ca5fce925c1ae5',\n  contractCreated: 'CFXTEST:TYPE.CONTRACT:ACCYSPEUUR469BCA0EXRFXKXMKX651W45JFW2RN5M0',\n  epochNumber: 27675623,\n  from: 'CFXTEST:TYPE.USER:AAP9KTHVCTUNVF030RBKK9K7ZBZYZ12DAJP1U3SP4G',\n  gasCoveredBySponsor: false,\n  gasFee: 646047n,\n  gasUsed: 646047n,\n  index: 1,\n  logs: [],\n  logsBloom: '0x...',\n  outcomeStatus: 0,\n  stateRoot: '0xd2ada6e3c04d6e8260446deaf1b8289d57ba84e2d82387155bbb397be93e2a30',\n  storageCollateralized: 1664n,\n  storageCoveredBySponsor: false,\n  storageReleased: [],\n  to: null,\n  transactionHash: '0xe19d8a7527a7f655f0325374a5d483ed4459f465a2f7f9d3ac9a23a548eac5c4',\n  txExecErrorMsg: null\n}\n")),Object(o.b)("p",null,"The example directly sending ",Object(o.b)("a",{parentName:"p",href:"https://developer.confluxnetwork.org/introduction/en/conflux_basics#transactions"},"transaction")," for demostration purpose. If the contract constructor contains parameters, a better way is to use contract development tools like ",Object(o.b)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/js-conflux-sdk/blob/master/docs/interact_with_contract.md"},Object(o.b)("inlineCode",{parentName:"a"},"js-conflux-sdk")," ",Object(o.b)("inlineCode",{parentName:"a"},"contract"))," and ",Object(o.b)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/conflux-truffle"},Object(o.b)("inlineCode",{parentName:"a"},"conflux-truffle"))," to deploy."),Object(o.b)("h3",{id:"calling-smart-contracts"},"Calling smart contracts"),Object(o.b)("p",null,"After the contract is deployed, you can interact with the contract. There are two ways: "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Calling through the RPC ",Object(o.b)("inlineCode",{parentName:"p"},"cfx_call"),": this type of contract calling is only executed in the EVM but does not actually change the state. This is usually used to call read-only contract functions or to simulate the execution of a transaction to see if it can be executed successfully. ")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Sending ",Object(o.b)("a",{parentName:"p",href:"https://developer.confluxnetwork.org/introduction/en/conflux_basics#transactions"},"transaction"),": this type of contract call will change the contract state when executed. "))),Object(o.b)("p",null,"The data used when calling the contract is generated by ",Object(o.b)("a",{parentName:"p",href:"https://docs.soliditylang.org/en/develop/abi-spec.html"},"ABI encoding")," based on the function information described by the ABI. The first 4 bytes are the function selector (the first 4 bytes of the Keccak (SHA-3) hash of the function signature), and the fifth byte starts with the ABI-encoded parameter."),Object(o.b)("p",null,"We will use js-conflux-sdk to demonstrate."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'const { Conflux } = require("js-conflux-sdk");\n\n(async function () {\n    const cfx = await Conflux.create({ url: "https://test.confluxrpc.com", logger: console })\n    const me = cfx.wallet.addPrivateKey("0x2139FB4C55CB9AF7F0086CD800962C2E9013E2292BAE77978A9209E3BEE71D49")\n\n    const abi = [...]\n    const contract = cfx.Contract({ address: "CFXTEST:TYPE.CONTRACT:ACCYSPEUUR469BCA0EXRFXKXMKX651W45JFW2RN5M0", abi })\n    let myBalance = await contract.balanceOf(me.address)\n    console.log("my cupcake balance :", myBalance)\n\n    const receipt = await contract.purchase(2).sendTransaction({ from: me.address, value: 2e18 }).executed()\n    console.log("purchase receipt", receipt)\n\n    const event = contract.abi.decodeLog(receipt.logs[0])\n    console.log("purchase event:", event)\n\n    myBalance = await contract.balanceOf(me.address)\n    console.log("after purchase, my cupcake balance :", myBalance)\n})()\n')),Object(o.b)("p",null,"From the log, we can see that the corresponding RPC information of ",Object(o.b)("inlineCode",{parentName:"p"},"contract.cupcakeBalances(me.address)")," is as follows."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"{\n  data: {\n    jsonrpc: '2.0',\n    id: '1794b9e755639b5164925a8e',\n    method: 'cfx_call',\n    params: [\n      {\n        to: 'CFXTEST:TYPE.CONTRACT:ACCYSPEUUR469BCA0EXRFXKXMKX651W45JFW2RN5M0',\n        data: '0xe18a7b9200000000000000000000000019f4bcf113e0b896d9b34294fd3da86b4adf0302'\n      },\n      undefined\n    ]\n  },\n  result: '0x0000000000000000000000000000000000000000000000000000000000000000',\n  duration: 33\n}\n")),Object(o.b)("p",null,"rpc method is ",Object(o.b)("inlineCode",{parentName:"p"},"cfx_call"),", data is the result of ",Object(o.b)("inlineCode",{parentName:"p"},"function selector + ABI-encoded result of parameter list"),". The first 4 bytes ",Object(o.b)("inlineCode",{parentName:"p"},"0xe18a7b92")," is the function selector of function ",Object(o.b)("inlineCode",{parentName:"p"},"balanceOf"),". The calculation takes keccak operation ",Object(o.b)("inlineCode",{parentName:"p"},'keccak256("balanceOf(address)")')," on the signature ",Object(o.b)("inlineCode",{parentName:"p"},"balanceOf(address)")," of ",Object(o.b)("inlineCode",{parentName:"p"},"balanceOf")," and then takes the first 4 bytes.  ",Object(o.b)("inlineCode",{parentName:"p"},"00000000000000000000000019f4bcf113e0b896d9b34294fd3da86b4adf0302"),"is the ABI-encoded value of paramter ",Object(o.b)("inlineCode",{parentName:"p"},"0x19f4bcf113e0b896d9b34294fd3da86b4adf0302")),Object(o.b)("p",null,"The returned value is ",Object(o.b)("inlineCode",{parentName:"p"},"0x0000000000000000000000000000000000000000000000000000000000000000"),", which is the result of ABI-encoded value 0 with ",Object(o.b)("inlineCode",{parentName:"p"},"uint"),"type"),Object(o.b)("p",null,"The RPC method for ",Object(o.b)("inlineCode",{parentName:"p"},"purchase")," is ",Object(o.b)("inlineCode",{parentName:"p"},"cfx_sendRawTransaction"),", which is sending ",Object(o.b)("a",{parentName:"p",href:"https://developer.confluxnetwork.org/introduction/en/conflux_basics#transactions"},"transaction"),". This will change the state of the contract. The encoding method for the transaction's data is also ",Object(o.b)("inlineCode",{parentName:"p"},"function selector + ABI-encoded result of parameter list"),". You can check this through getTransactionByHash "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "result": {\n    "data": "0xefef39a10000000000000000000000000000000000000000000000000000000000000002",\n    "hash": "0x2c188c67247d7e2bf12fb96f17ced61da8ea4143447887a10a2cc597c1fa66e1",\n    "to": "CFXTEST:TYPE.CONTRACT:ACCYSPEUUR469BCA0EXRFXKXMKX651W45JFW2RN5M0",\n    "value": "0x1bc16d674ec80000"\n    ...\n  },\n  "id": 1\n}\n')),Object(o.b)("p",null,"We can see a record from the ",Object(o.b)("inlineCode",{parentName:"p"},"logs")," field of ",Object(o.b)("inlineCode",{parentName:"p"},"transaction receipt"),". ",Object(o.b)("inlineCode",{parentName:"p"},"logs")," indicate the event that happened in the transaction. "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"purchase receipt {\n  blockHash: '0x3d4111b299e65c279184aa83021e59f9d134baa9c78969dd6d94a92bfbd340df',\n  contractCreated: null,\n  epochNumber: 27677382,\n  from: 'CFXTEST:TYPE.USER:AAP9KTHVCTUNVF030RBKK9K7ZBZYZ12DAJP1U3SP4G',\n  ......\n  logs: [\n    {\n      address: 'CFXTEST:TYPE.CONTRACT:ACCYSPEUUR469BCA0EXRFXKXMKX651W45JFW2RN5M0',\n      data: '0x00000000000000000000000019f4bcf113e0b896d9b34294fd3da86b4adf03020000000000000000000000000000000000000000000000000000000000000002',\n      topics: [Array]\n    }\n  ],\n}\n")),Object(o.b)("p",null,"The event analysis result is"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"purchase event: {\n  name: 'Purchase',\n  fullName: 'Purchase(address customer, uint256 amount)',\n  type: 'Purchase(address,uint256)',\n  signature: '0x2499a5330ab0979cc612135e7883ebc3cd5c9f7a8508f042540c34723348f632',\n  array: [ 'cfxtest:aap9kthvctunvf030rbkk9k7zbzyz12dajp1u3sp4g', 2n ],\n  object: {\n    customer: 'cfxtest:aap9kthvctunvf030rbkk9k7zbzyz12dajp1u3sp4g',\n    amount: 2n\n  }\n}\n")),Object(o.b)("p",null,"This indicates that one ",Object(o.b)("inlineCode",{parentName:"p"},"Purchase")," event happened, customer is  ",Object(o.b)("inlineCode",{parentName:"p"},"cfxtest:aap9kthvctunvf030rbkk9k7zbzyz12dajp1u3sp4g"),", quantity is 2. "),Object(o.b)("p",null,"After ",Object(o.b)("inlineCode",{parentName:"p"},"purchase")," is complete,  ",Object(o.b)("inlineCode",{parentName:"p"},"cupcakeBalances[0x19f4bcf113e0b896d9b34294fd3da86b4adf0302]")," changed from 0 to 2. State has changed. "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"{\n  data: {\n    jsonrpc: '2.0',\n    id: '179a19eb98ed23dda1d1d516',\n    method: 'cfx_call',\n    params: [ [Object], undefined ]\n  },\n  result: '0x0000000000000000000000000000000000000000000000000000000000000002',\n  duration: 30\n}\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Attention: When deploying or calling contracts on the Conflux chain, if new storage space is occupied in the contract, some CFX will be collateralized for the occupied space; this will be refunded after the storage is released. For more information, please visit ",Object(o.b)("a",{parentName:"p",href:"https://juejin.cn/post/6855551378123653127"},"storage collateral mechanism of Conflux"),". ")),Object(o.b)("h2",{id:"additional-resources"},"Additional resources"),Object(o.b)("p",null,"In addition to solidity, you can also use vyper for smart contract development. "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://docs.soliditylang.org/en/v0.8.4/"},"Solidity")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://vyper.readthedocs.io/en/stable/"},"Vyper"))),Object(o.b)("p",null,"Conflux also has more friendly and efficient smart development tools for developers. "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/Conflux-Chain/conflux-truffle"},"Conflux-Truffle"))),Object(o.b)("p",null,"Others"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://developer.conflux-chain.org/introduction/en/conflux_basics"},"Introduction of Conflux basic concepts")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://ethereum.org/zh/developers/docs/smart-contracts/"},"Ethereum's introduction of smart contract"))))}d.isMDXComponent=!0}}]);