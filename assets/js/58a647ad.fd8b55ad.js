(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{122:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),i=(n(0),n(191)),l={},o={unversionedId:"conflux-rust/changelogs/JSONRPC",id:"conflux-rust/changelogs/JSONRPC",isDocsHomePage:!1,title:"JSON-RPC CHANGELOG",description:"v2.1.1",source:"@site/docs/conflux-rust/changelogs/JSONRPC.md",sourceDirName:"conflux-rust/changelogs",slug:"/conflux-rust/changelogs/JSONRPC",permalink:"/conflux-rust/changelogs/JSONRPC",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/conflux-rust/changelogs/JSONRPC.md",version:"current",frontMatter:{}},c=[{value:"v2.1.0",id:"v210",children:[]},{value:"v2.0.3",id:"v203",children:[]},{value:"v2.0.2",id:"v202",children:[{value:"eSpace",id:"espace",children:[]},{value:"Core Space",id:"core-space",children:[]}]},{value:"v2.0.1",id:"v201",children:[]}],b={toc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"v2.1.1"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Add filter RPCs in eSpace including ",Object(i.b)("inlineCode",{parentName:"li"},"eth_newFilter"),", ",Object(i.b)("inlineCode",{parentName:"li"},"eth_newBlockFilter"),", ",Object(i.b)("inlineCode",{parentName:"li"},"eth_newPendingTransactionFilter"),", ",Object(i.b)("inlineCode",{parentName:"li"},"eth_getFilterLogs"),", ",Object(i.b)("inlineCode",{parentName:"li"},"eth_getFilterChanges"),", ",Object(i.b)("inlineCode",{parentName:"li"},"eth_uninstallFilter"))),Object(i.b)("h2",{id:"v210"},"v2.1.0"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Support ",Object(i.b)("inlineCode",{parentName:"li"},"eth_subscribe")," and ",Object(i.b)("inlineCode",{parentName:"li"},"eth_unsubscribe")," in eSpace RPCs."),Object(i.b)("li",{parentName:"ul"},"Add an RPC method ",Object(i.b)("a",{parentName:"li",href:"https://developer.confluxnetwork.org/conflux-doc/docs/json_rpc#cfx_getparamsfromvote"},Object(i.b)("inlineCode",{parentName:"a"},"cfx_getParamsFromVote"))," to return the currently used value of the voted parameters."),Object(i.b)("li",{parentName:"ul"},"Return null for getting skipped transactions and receipts. Whether they will be returned was nondeterministic before, but now they are ensured to be null."),Object(i.b)("li",{parentName:"ul"},"When querying logs, use LatestState instead of the to epoch number when the to epoch number is greater than LatestState")),Object(i.b)("h2",{id:"v203"},"v2.0.3"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"cfx_getLogs")," and ",Object(i.b)("inlineCode",{parentName:"li"},"eth_getLogs")," will no longer support the parameters limit and offset. They are not efficient and can be replaced by setting the block/epoch range instead."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"cfx_clientVersion")," will have included more information like ",Object(i.b)("inlineCode",{parentName:"li"},"web3_clientVersion")," in eSpace."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"fromEpoch"),' will default to "latest_state" in ',Object(i.b)("inlineCode",{parentName:"li"},"cfx_getLogs"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"fromBlock"),' will default to "latest" in ',Object(i.b)("inlineCode",{parentName:"li"},"eth_getLogs"),".")),Object(i.b)("h2",{id:"v202"},"v2.0.2"),Object(i.b)("h3",{id:"espace"},"eSpace"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Add a new RPC ",Object(i.b)("inlineCode",{parentName:"li"},"eth_getAccountPendingTransactions")," to get pending transactions by address, also return the first pending transaction's pending reason"),Object(i.b)("li",{parentName:"ul"},"Support WebSockets for eth APIs"),Object(i.b)("li",{parentName:"ul"},"Support block hash param for ",Object(i.b)("inlineCode",{parentName:"li"},"eth_call")," (EIP1898)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"eth_call"),", ",Object(i.b)("inlineCode",{parentName:"li"},"eth_estimate")," will respect ",Object(i.b)("inlineCode",{parentName:"li"},"from"),"'s balance if passed, if balance is not enough will return error. If from is not passed then use a random one, which balance will be very big."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"eth_sendRawTransaction")," will reject transaction if sender's balance is not enough, return error like ",Object(i.b)("inlineCode",{parentName:"li"},"Transaction {:?} is discarded due to out of balance, needs {:?} but account balance is {:?}")),Object(i.b)("li",{parentName:"ul"},"If ",Object(i.b)("inlineCode",{parentName:"li"},"eth_call"),", ",Object(i.b)("inlineCode",{parentName:"li"},"eth_estimate")," method call raise error, and the ",Object(i.b)("inlineCode",{parentName:"li"},"error.data")," is string, it will directly return. In version before v2.0.2 they are hex encoded, is not convenient.")),Object(i.b)("h3",{id:"core-space"},"Core Space"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"cfx_call"),", ",Object(i.b)("inlineCode",{parentName:"li"},"cfx_estimateGasAndCollateral")," will respect ",Object(i.b)("inlineCode",{parentName:"li"},"from"),"'s balance if passed, if balance is not enough will return error. If from is not passed then use a random one, which balance will be very big."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"cfx_sendRawTransaction")," will reject transaction if sender's balance is not enough, return error like ",Object(i.b)("inlineCode",{parentName:"li"},"Transaction {:?} is discarded due to out of balance, needs {:?} but account balance is {:?}")),Object(i.b)("li",{parentName:"ul"},"If ",Object(i.b)("inlineCode",{parentName:"li"},"cfx_call"),", ",Object(i.b)("inlineCode",{parentName:"li"},"cfx_estimateGasAndCollateral")," method call raise error, and the ",Object(i.b)("inlineCode",{parentName:"li"},"error.data")," is string, it will directly return. In version before v2.0.2 they are hex encoded, is not convenient.")),Object(i.b)("h2",{id:"v201"},"v2.0.1"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Report error in ",Object(i.b)("inlineCode",{parentName:"li"},"cfx_getLogs")," and ",Object(i.b)("inlineCode",{parentName:"li"},"eth_getLogs")," if ",Object(i.b)("inlineCode",{parentName:"li"},"get_logs_filter_max_limit")," is configured but the query would return more logs. The previous behavior of ",Object(i.b)("inlineCode",{parentName:"li"},"cfx_getLogs")," was to silently truncate the result. The previous behavior of ",Object(i.b)("inlineCode",{parentName:"li"},"eth_getLogs")," was to raise an error when ",Object(i.b)("inlineCode",{parentName:"li"},"filter.limit")," is too low, regardless of how many logs the query would result in."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"eth_gasPrice")," now estimate gas prices accurately instead of returning a fixed value."),Object(i.b)("li",{parentName:"ul"},"Support phantom transactions and return correct fields in eSpace ",Object(i.b)("inlineCode",{parentName:"li"},"trace")," RPCs."),Object(i.b)("li",{parentName:"ul"},"Add fields ",Object(i.b)("inlineCode",{parentName:"li"},"valid")," and ",Object(i.b)("inlineCode",{parentName:"li"},"createType")," for eSpace ",Object(i.b)("inlineCode",{parentName:"li"},"trace")," RPCs."),Object(i.b)("li",{parentName:"ul"},"Add RPC ",Object(i.b)("inlineCode",{parentName:"li"},"rpc_methods")," to return all available methods and ",Object(i.b)("inlineCode",{parentName:"li"},"rpc_modules")," to return all RPC modules."),Object(i.b)("li",{parentName:"ul"},"Add ",Object(i.b)("inlineCode",{parentName:"li"},"totalEspaceTokens")," in the response of ",Object(i.b)("inlineCode",{parentName:"li"},"cfx_getSupplyInfo"),"."),Object(i.b)("li",{parentName:"ul"},"Add local RPCs ",Object(i.b)("inlineCode",{parentName:"li"},"pos_start_voting"),", ",Object(i.b)("inlineCode",{parentName:"li"},"pos_stop_voting"),", and ",Object(i.b)("inlineCode",{parentName:"li"},"pos_voting_status"),". Check #2438 for details.")))}s.isMDXComponent=!0},191:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,m=d["".concat(l,".").concat(u)]||d[u]||p[u]||i;return n?r.a.createElement(m,o(o({ref:t},b),{},{components:n})):r.a.createElement(m,o({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var b=2;b<i;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);