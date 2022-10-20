(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{171:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return c})),n.d(r,"metadata",(function(){return s})),n.d(r,"toc",(function(){return i})),n.d(r,"default",(function(){return l}));var t=n(3),o=n(7),a=(n(0),n(191)),c={id:"common_rpc_error",title:"Common RPC errors",custom_edit_url:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/RPCs/common-rpc-error.md",keywords:["rpc","error"]},s={unversionedId:"conflux-doc/docs/RPCs/common_rpc_error",id:"conflux-doc/docs/RPCs/common_rpc_error",isDocsHomePage:!1,title:"Common RPC errors",description:"Common errors",source:"@site/docs/conflux-doc/docs/RPCs/common-rpc-error.md",sourceDirName:"conflux-doc/docs/RPCs",slug:"/conflux-doc/docs/RPCs/common_rpc_error",permalink:"/conflux-doc/docs/RPCs/common_rpc_error",editUrl:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/RPCs/common-rpc-error.md",version:"current",frontMatter:{id:"common_rpc_error",title:"Common RPC errors",custom_edit_url:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/RPCs/common-rpc-error.md",keywords:["rpc","error"]},sidebar:"api",previous:{title:"trace Namespace",permalink:"/conflux-doc/docs/RPCs/trace_rpc"},next:{title:"cfx_sendRawTransaction errors",permalink:"/conflux-doc/docs/RPCs/send_tx_error"}},i=[{value:"Common errors",id:"common-errors",children:[{value:"Method not found",id:"method-not-found",children:[]},{value:"Lacking parameters",id:"lacking-parameters",children:[]},{value:"Passing extra parameters",id:"passing-extra-parameters",children:[]},{value:"Invalid base32 address passed",id:"invalid-base32-address-passed",children:[]},{value:"Invalid block/transaction hash passed",id:"invalid-blocktransaction-hash-passed",children:[]},{value:"Estimate error",id:"estimate-error",children:[]}]}],d={toc:i};function l(e){var r=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},d,n,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"common-errors"},"Common errors"),Object(a.b)("h3",{id:"method-not-found"},"Method not found"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "error": {\n        "code": -32601,\n        "message": "Method not found"\n    },\n    "id": "15922956697249514502"\n}\n')),Object(a.b)("h3",{id:"lacking-parameters"},"Lacking parameters"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "error": {\n        "code": -32602,\n        "message": "Invalid params: invalid length 0, expected a tuple of size 1."\n    },\n    "id": "15922956697249514502"\n}\n')),Object(a.b)("h3",{id:"passing-extra-parameters"},"Passing extra parameters"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "error": {\n        "code": -32602,\n        "message": "Invalid params: invalid length 2, expected fewer elements in array."\n    },\n    "id": "15922956697249514502"\n}\n')),Object(a.b)("h3",{id:"invalid-base32-address-passed"},"Invalid base32 address passed"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "error": {\n        "code": -32602,\n        "message": "Invalid params: Invalid base32 address: input net8888:aak2rra2njvd77ezwjvx04kkds9fzagfe6xm1vavv4dd error invalid checksum (actual 1122 != 0)."\n    },\n    "id": "15922956697249514502"\n}\n')),Object(a.b)("h3",{id:"invalid-blocktransaction-hash-passed"},"Invalid block/transaction hash passed"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "error": {\n        "code": -32602,\n        "message": "Invalid params: invalid length 65, expected a (both 0x-prefixed or not) hex string with length of 64."\n    },\n    "id": "15922956697249514502"\n}\n')),Object(a.b)("h3",{id:"estimate-error"},"Estimate error"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "error": {\n        "code": -32602,\n        "message": "Can not estimate: transaction execution failed, all gas will be charged (execution error: VmError(OutOfGas))"\n    },\n    "id": "15922956697249514502"\n}\n')))}l.isMDXComponent=!0},191:function(e,r,n){"use strict";n.d(r,"a",(function(){return p})),n.d(r,"b",(function(){return b}));var t=n(0),o=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),l=function(e){var r=o.a.useContext(d),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},p=function(e){var r=l(e.components);return o.a.createElement(d.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},u=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(n),u=t,b=p["".concat(c,".").concat(u)]||p[u]||m[u]||a;return n?o.a.createElement(b,s(s({ref:r},d),{},{components:n})):o.a.createElement(b,s({ref:r},d))}));function b(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,c=new Array(a);c[0]=u;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:t,c[1]=s;for(var d=2;d<a;d++)c[d]=n[d];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);