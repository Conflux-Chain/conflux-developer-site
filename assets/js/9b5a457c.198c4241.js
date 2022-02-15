(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),c=(n(0),n(183)),a={id:"intro_of_evm_space",title:"Introduction",custom_edit_url:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/EVM-Space/intro.md",keywords:["Introduction"]},i={unversionedId:"conflux-doc/docs/EVM-Space/zh/intro_of_evm_space",id:"conflux-doc/docs/EVM-Space/zh/intro_of_evm_space",isDocsHomePage:!1,title:"Introduction",description:"Conflux \u5728 v2.0 \u5f15\u5165\u4e86\u4e00\u4e2a\u517c\u5bb9 EVM \u7f51\u7edc\u7684\u7a7a\u95f4\uff0c\u80fd\u591f\u5b9e\u73b0\u865a\u62df\u673a\u5b8c\u5168\u517c\u5bb9\u4ee5\u53ca\u6838\u5fc3 eth RPC \u517c\u5bb9\u3002\u52a0\u5bc6\u7528\u6237\u548c\u5f00\u53d1\u8005\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u4ee5\u592a\u574a\u751f\u6001\u7684\u94b1\u5305(MetaMask)\u548c\u5f00\u53d1\u5de5\u5177(Truffle, Hardhat, Remix, web3.js, ethers.js\u7b49) \u6765\u8ddf EVM Space \u76f4\u63a5\u4ea4\u4e92\u3002\u4f7f\u5f97\u4ee5\u592a\u574a\u751f\u6001\u7528\u6237\u548c\u5f00\u53d1\u8005\u53ef\u4ee5\u5f88\u65b9\u4fbf\u4f53\u9a8c Conflux \u7f51\u7edc\u7684\u9ad8 TPS \u548c\u4f4e\u624b\u7eed\u8d39\u4f18\u52bf\u3002",source:"@site/docs/conflux-doc/docs/EVM-Space/zh/intro_zh.md",sourceDirName:"conflux-doc/docs/EVM-Space/zh",slug:"/conflux-doc/docs/EVM-Space/zh/intro_of_evm_space",permalink:"/conflux-doc/docs/EVM-Space/zh/intro_of_evm_space",editUrl:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/EVM-Space/intro.md",version:"current",frontMatter:{id:"intro_of_evm_space",title:"Introduction",custom_edit_url:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/EVM-Space/intro.md",keywords:["Introduction"]}},u=[],p={toc:u};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Conflux \u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"v2.0")," \u5f15\u5165\u4e86\u4e00\u4e2a\u517c\u5bb9 EVM \u7f51\u7edc\u7684\u7a7a\u95f4\uff0c\u80fd\u591f\u5b9e\u73b0",Object(c.b)("inlineCode",{parentName:"p"},"\u865a\u62df\u673a\u5b8c\u5168\u517c\u5bb9"),"\u4ee5\u53ca",Object(c.b)("inlineCode",{parentName:"p"},"\u6838\u5fc3 eth RPC \u517c\u5bb9"),"\u3002\u52a0\u5bc6\u7528\u6237\u548c\u5f00\u53d1\u8005\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u4ee5\u592a\u574a\u751f\u6001\u7684\u94b1\u5305(MetaMask)\u548c\u5f00\u53d1\u5de5\u5177(Truffle, Hardhat, Remix, web3.js, ethers.js\u7b49) \u6765\u8ddf EVM Space \u76f4\u63a5\u4ea4\u4e92\u3002\u4f7f\u5f97\u4ee5\u592a\u574a\u751f\u6001\u7528\u6237\u548c\u5f00\u53d1\u8005\u53ef\u4ee5\u5f88\u65b9\u4fbf\u4f53\u9a8c Conflux \u7f51\u7edc\u7684\u9ad8 TPS \u548c\u4f4e\u624b\u7eed\u8d39\u4f18\u52bf\u3002"),Object(c.b)("p",null,"\u5e95\u5c42\u5b9e\u73b0\u4e0a EVM Space \u540c Conflux Native Space \u5171\u7528\u4e00\u5957\u5171\u8bc6\u534f\u8bae\u53ca\u6570\u636e\u8d26\u672c\uff0c\u4f46\u4ece\u903b\u8f91\u4e0a\u770b\u662f\u72ec\u7acb\u7684\u4e24\u6761\u94fe\u3002\u901a\u8fc7\u5185\u7f6e\u5408\u7ea6\u53ef\u4ee5\u5b9e\u73b0 CFX \u5728\u4e2a Space \u4e4b\u95f4\u4e92\u8de8\u3002\u5e76\u4e14\u53ef\u4ee5\u5b9e\u73b0\u4e00\u5b9a\u7a0b\u5ea6\u7684\u8de8 Space \u5408\u7ea6\u8c03\u7528\uff08\u4ece Conflux Native Space call EVM Space \u5408\u7ea6\uff09\u3002"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://forum.conflux.fun/t/cip-90-evm/13143"},"CIP-90"))))}l.isMDXComponent=!0},183:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},f=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),f=l(n),d=r,m=f["".concat(a,".").concat(d)]||f[d]||s[d]||c;return n?o.a.createElement(m,i(i({ref:t},p),{},{components:n})):o.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var p=2;p<c;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);