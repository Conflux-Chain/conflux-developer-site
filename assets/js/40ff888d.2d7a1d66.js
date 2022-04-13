(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),c=n(7),o=(n(0),n(184)),a={id:"debug_rpc",title:"debug Namespace",custom_edit_url:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/RPCs/debug-rpc.md",keywords:["debug-rpc"]},s={unversionedId:"conflux-doc/docs/RPCs/debug_rpc",id:"conflux-doc/docs/RPCs/debug_rpc",isDocsHomePage:!1,title:"debug Namespace",description:"RPCs",source:"@site/docs/conflux-doc/docs/RPCs/debug-rpc.md",sourceDirName:"conflux-doc/docs/RPCs",slug:"/conflux-doc/docs/RPCs/debug_rpc",permalink:"/conflux-doc/docs/RPCs/debug_rpc",editUrl:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/RPCs/debug-rpc.md",version:"current",frontMatter:{id:"debug_rpc",title:"debug Namespace",custom_edit_url:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/RPCs/debug-rpc.md",keywords:["debug-rpc"]},sidebar:"api",previous:{title:"pos Namespace",permalink:"/conflux-doc/docs/RPCs/pos_rpc"},next:{title:"trace Namespace",permalink:"/conflux-doc/docs/RPCs/trace_rpc"}},p=[{value:"RPCs",id:"rpcs",children:[{value:"cfx_getEpochReceipts",id:"cfx_getepochreceipts",children:[]}]}],d={toc:p};function l(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"rpcs"},"RPCs"),Object(o.b)("h3",{id:"cfx_getepochreceipts"},"cfx_getEpochReceipts"),Object(o.b)("p",null,"Get one epoch's all receipts in one RPC call"),Object(o.b)("h4",{id:"parameters"},"Parameters"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"QUANTITY"),": Epoch number")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'params: [\n  "0x1001"\n]\n')),Object(o.b)("h4",{id:"response"},"Response"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"ARRAY")," - Receipt array"),Object(o.b)("h4",{id:"example"},"Example"),Object(o.b)("p",null,"Request"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},'curl --location --request POST \'http://localhost:12537\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "id": 1,\n    "jsonrpc": "2.0",\n    "method": "cfx_getEpochReceipts",\n    "params": ["0x1001"]\n}\'\n')),Object(o.b)("p",null,"Response"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "result": [{\n    "blockHash": "0xbb1eea3c8a574dc19f7d8311a2096e23a39f12e649a20766544f2df67aac0bed",\n    "contractCreated": null,\n    "epochNumber": "0x87431b",\n    "from": "CFX:TYPE.USER:AARC9ABYCUE0HHZGYRR53M6CXEDGCCRMMYYBJGH4XG",\n    "gasCoveredBySponsor": true,\n    "gasFee": "0x108ca",\n    "gasUsed": "0x8465",\n    "index": "0x0",\n    "logs": [{\n      "address": "CFX:TYPE.CONTRACT:ACC7UAWF5UBTNMEZVHU9DHC6SGHEA0403Y2DGPYFJP",\n      "data": "0x00000000000000000000000019a3224214fe29107d84af9baa02118b614e46d5",\n      "topics": ["0x233e08777131763a85257b15eafc9f96ef08f259653d9944301ff924b3917cf5"]\n    }],\n    "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000080000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000",\n    "outcomeStatus": "0x0",\n    "stateRoot": "0x1bc37c63c03d7e7066f9427f69e515988d19ebb26998087d75b50d2235e55ee7",\n    "storageCollateralized": "0x40",\n    "storageCoveredBySponsor": true,\n    "storageReleased": [{\n      "address": "CFX:TYPE.USER:AARC9ABYCUE0HHZGYRR53M6CXEDGCCRMMYYBJGH4XG",\n      "collaterals": "0x40"\n    }],\n    "to": "CFX:TYPE.CONTRACT:ACC7UAWF5UBTNMEZVHU9DHC6SGHEA0403Y2DGPYFJP",\n    "transactionHash": "0x53fe995edeec7d241791ff32635244e94ecfd722c9fe90f34ddf59082d814514"\n  }]\n}\n')))}l.isMDXComponent=!0},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),c=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var d=c.a.createContext({}),l=function(e){var t=c.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return c.a.createElement(d.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},b=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,f=u["".concat(a,".").concat(b)]||u[b]||i[b]||o;return n?c.a.createElement(f,s(s({ref:t},d),{},{components:n})):c.a.createElement(f,s({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var d=2;d<o;d++)a[d]=n[d];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);