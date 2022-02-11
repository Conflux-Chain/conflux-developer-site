(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var o=n(3),r=n(7),c=(n(0),n(182)),a={id:"txpool_rpc",title:"txpool Namespace",custom_edit_url:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/RPCs/txpool-rpc.md",keywords:["conflux","txpool-rpc","sdk"]},l={unversionedId:"conflux-doc/docs/RPCs/txpool_rpc",id:"conflux-doc/docs/RPCs/txpool_rpc",isDocsHomePage:!1,title:"txpool Namespace",description:"txpool related RPCs which can enable developer get more info about transaction pool. Which was introduced from conflux-rust v1.1.6.",source:"@site/docs/conflux-doc/docs/RPCs/txpool-rpc.md",sourceDirName:"conflux-doc/docs/RPCs",slug:"/conflux-doc/docs/RPCs/txpool_rpc",permalink:"/conflux-doc/docs/RPCs/txpool_rpc",editUrl:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/RPCs/txpool-rpc.md",version:"current",frontMatter:{id:"txpool_rpc",title:"txpool Namespace",custom_edit_url:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/RPCs/txpool-rpc.md",keywords:["conflux","txpool-rpc","sdk"]},sidebar:"api",previous:{title:"cfx Namespace",permalink:"/conflux-doc/docs/json_rpc"},next:{title:"pos Namespace",permalink:"/conflux-doc/docs/RPCs/pos_rpc"}},p=[{value:"RPCs",id:"rpcs",children:[{value:"txpool_nextNonce",id:"txpool_nextnonce",children:[]}]}],i={toc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"txpool")," related RPCs which can enable developer get more info about transaction pool. Which was introduced from ",Object(c.b)("inlineCode",{parentName:"p"},"conflux-rust v1.1.6"),"."),Object(c.b)("p",null,"These RPC methods require node's ",Object(c.b)("inlineCode",{parentName:"p"},"public_rpc_apis")," config set to ",Object(c.b)("inlineCode",{parentName:"p"},"safe")," or ",Object(c.b)("inlineCode",{parentName:"p"},"all"),", or the namespace include ",Object(c.b)("inlineCode",{parentName:"p"},"txpool")),Object(c.b)("h2",{id:"rpcs"},"RPCs"),Object(c.b)("h3",{id:"txpool_nextnonce"},"txpool_nextNonce"),Object(c.b)("p",null,"Return one address's next usable nonce in transaction pool."),Object(c.b)("h4",{id:"parameters"},"Parameters"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("inlineCode",{parentName:"li"},"ADDRESS"),": CIP-37 address")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'params: [\n  "cfx:aak2rra2njvd77ezwjvx04kkds9fzagfe6ku8scz91"\n]\n')),Object(c.b)("h4",{id:"returns"},"Returns"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"QUANTITY")," - Account's next usable nonce"),Object(c.b)("h4",{id:"example"},"Example"),Object(c.b)("p",null,"Request"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},'curl --location --request POST \'http://localhost:12537\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "id": 1,\n    "jsonrpc": "2.0",\n    "method": "txpool_nextNonce",\n    "params": ["cfx:aak2rra2njvd77ezwjvx04kkds9fzagfe6ku8scz91"]\n}\'\n')),Object(c.b)("p",null,"Response"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "result": "0x278"\n}\n')))}s.isMDXComponent=!0},182:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var o=n(0),r=n.n(o);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),s=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=s(n),b=o,f=u["".concat(a,".").concat(b)]||u[b]||d[b]||c;return n?r.a.createElement(f,l(l({ref:t},i),{},{components:n})):r.a.createElement(f,l({ref:t},i))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=b;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var i=2;i<c;i++)a[i]=n[i];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);