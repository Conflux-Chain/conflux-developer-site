(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(7),a=(n(0),n(182)),c={},l={unversionedId:"run-a-node/zh/how-to-get",id:"run-a-node/zh/how-to-get",isDocsHomePage:!1,title:"\u5982\u4f55\u83b7\u53d6 Conflux \u5ba2\u6237\u7aef\u7a0b\u5e8f",description:"Conflux-rust \u662f\u7531\u57fa\u91d1\u4f1a\u4f7f\u7528 Rust \u8bed\u8a00\u5f00\u53d1\u7684 Conflux \u534f\u8bae\u9ad8\u6027\u80fd\u5b9e\u73b0\u3002\u5b83\u662f\u4e00\u4e2a Conflux \u7f51\u7edc\u5ba2\u6237\u7aef\uff0c\u53ef\u4ee5\u7528\u6765\u8fd0\u884c Conflux \u7f51\u7edc\u8282\u70b9\uff0c\u4ee5\u53ca\u5bf9\u5916\u63d0\u4f9b RPC \u670d\u52a1\u3002\u9664\u6b64\u4e4b\u5916\u5b83\u8fd8\u662f\u4e00\u4e2a\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u53ef\u4ee5\u7ba1\u7406\u672c\u5730\u8d26\u6237\u5e76\u540c\u8282\u70b9\u8fdb\u884c RPC \u4ea4\u4e92\u3002\u5176\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u4efb\u610f\u4e00\u79cd\u65b9\u5f0f\u83b7\u53d6\uff1a",source:"@site/docs/run-a-node/zh/how-to-get.md",sourceDirName:"run-a-node/zh",slug:"/run-a-node/zh/how-to-get",permalink:"/run-a-node/zh/how-to-get",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/run-a-node/zh/how-to-get.md",version:"current",frontMatter:{}},u=[{value:"\u76f4\u63a5\u4e0b\u8f7d\u8282\u70b9\u7a0b\u5e8f",id:"\u76f4\u63a5\u4e0b\u8f7d\u8282\u70b9\u7a0b\u5e8f",children:[]},{value:"\u83b7\u53d6 conflux-rust Docker \u955c\u50cf",id:"\u83b7\u53d6-conflux-rust-docker-\u955c\u50cf",children:[]}],i={toc:u};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://github.com/conflux-chain/conflux-rust"},"Conflux-rust")," \u662f\u7531\u57fa\u91d1\u4f1a\u4f7f\u7528 Rust \u8bed\u8a00\u5f00\u53d1\u7684 Conflux \u534f\u8bae\u9ad8\u6027\u80fd\u5b9e\u73b0\u3002\u5b83\u662f\u4e00\u4e2a Conflux \u7f51\u7edc\u5ba2\u6237\u7aef\uff0c\u53ef\u4ee5\u7528\u6765\u8fd0\u884c Conflux \u7f51\u7edc\u8282\u70b9\uff0c\u4ee5\u53ca\u5bf9\u5916\u63d0\u4f9b RPC \u670d\u52a1\u3002\u9664\u6b64\u4e4b\u5916\u5b83\u8fd8\u662f\u4e00\u4e2a\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u53ef\u4ee5\u7ba1\u7406\u672c\u5730\u8d26\u6237\u5e76\u540c\u8282\u70b9\u8fdb\u884c RPC \u4ea4\u4e92\u3002\u5176\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u4efb\u610f\u4e00\u79cd\u65b9\u5f0f\u83b7\u53d6\uff1a"),Object(a.b)("h2",{id:"\u76f4\u63a5\u4e0b\u8f7d\u8282\u70b9\u7a0b\u5e8f"},"\u76f4\u63a5\u4e0b\u8f7d\u8282\u70b9\u7a0b\u5e8f"),Object(a.b)("p",null,"Conflux-rust \u7684 Github ",Object(a.b)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/conflux-rust/releases"},"Release")," \u9875\u9762\u63d0\u4f9b\u4e86\u7f16\u8bd1\u540e\u53ef\u76f4\u63a5\u4e0b\u8f7d\u8fd0\u884c\u7684\u8282\u70b9\u7a0b\u5e8f\u3002\u76ee\u524d\u5305\u542b\u4e3b\u7f51\uff0c\u6d4b\u8bd5\u7f51\u4e24\u6761\u7248\u672c\u53d1\u5e03\u7ebf\uff1a\u4e3b\u7f51\u7684\u7248\u672c\u4e3a Conflux vx.x.x, \u6d4b\u8bd5\u7f51\u7684\u7248\u672c\u4e3a Conflux vx.x.x-testnet \uff08\u5e26 testnet \u540e\u7f00\uff09\u3002\u5e76\u4e14\u6bcf\u4e2a\u7248\u672c\u90fd\u4f1a\u63d0\u4f9b Linux\uff0cWindows10\uff0cMacOS \u4e09\u5927\u5e73\u53f0\u7684\u7a0b\u5e8f\u3002"),Object(a.b)("p",null,"\u5728 Release \u9875\u9762\uff0c\u6bcf\u4e2a\u7248\u672c\u90fd\u5305\u542b\u4e00\u4e2a\u7248\u672c\u66f4\u65b0\u8bf4\u660e\uff0c\u53ca ",Object(a.b)("inlineCode",{parentName:"p"},"Assets"),"\uff08\u53ef\u4e0b\u8f7d\u7a0b\u5e8f\uff09\u3002\u9009\u62e9\u5bf9\u5e94\u5e73\u53f0\uff0c\u70b9\u51fb\u94fe\u63a5\u5373\u53ef\u4e0b\u8f7d\u4e00\u4e2a zip \u538b\u7f29\u5305\uff0c\u5982 ",Object(a.b)("inlineCode",{parentName:"p"},"conflux_linux_v1.1.2.zip"),"\uff0c\u89e3\u538b\u540e\u662f\u4e00\u4e2a ",Object(a.b)("inlineCode",{parentName:"p"},"run")," \u6587\u4ef6\u5939\uff0c\u91cc\u9762\u5305\u542b\u8282\u70b9\u7a0b\u5e8f\uff0c\u914d\u7f6e\u6587\u4ef6\uff0c\u542f\u52a8\u811a\u672c\u3002\u5177\u4f53\u6587\u4ef6\u5982\u4e0b\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"\u279c  run tree\n.\n\u251c\u2500\u2500 conflux\n\u251c\u2500\u2500 log.yaml\n\u251c\u2500\u2500 start.bat\n\u251c\u2500\u2500 start.sh\n\u251c\u2500\u2500 tethys.toml\n\u2514\u2500\u2500 throttling.toml\n\n0 directories, 6 files\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"conflux")," \u8282\u70b9\u7a0b\u5e8f"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"tethys.toml")," \u4e3b\u7f51\u914d\u7f6e\u6587\u4ef6\uff08\u5982\u679c\u4e0b\u8f7d\u6d4b\u8bd5\u7f51\u7a0b\u5e8f\uff0c\u8be5\u914d\u7f6e\u6587\u4ef6\u4e3a testnet.toml)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"log.yaml")," \u65e5\u5fd7\u914d\u7f6e\u6587\u4ef6"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"throttling.toml")," \u7f51\u901f\u9650\u6d41\u914d\u7f6e\u6587\u4ef6(\u7528\u4e8e\u5f00\u53d1\u6d4b\u8bd5)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"start.sh")," Linux \u7cfb\u7edf\u542f\u52a8\u811a\u672c"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"start.bat")," Windows \u7cfb\u7edf\u542f\u52a8\u811a\u672c")),Object(a.b)("h2",{id:"\u83b7\u53d6-conflux-rust-docker-\u955c\u50cf"},"\u83b7\u53d6 conflux-rust Docker \u955c\u50cf"),Object(a.b)("p",null,"Conflux \u5b98\u65b9\u63d0\u4f9b\u4e86 conflux-rust \u7684 ",Object(a.b)("a",{parentName:"p",href:"https://hub.docker.com/r/confluxchain/conflux-rust"},"Docker \u955c\u50cf")," \u53ef\u7528\u4e8e\u5feb\u901f\u542f\u52a8\u8282\u70b9: ",Object(a.b)("inlineCode",{parentName:"p"},"\u4e0b\u8f7d\u955c\u50cf"),"\uff0c",Object(a.b)("inlineCode",{parentName:"p"},"\u8fd0\u884c\u5bb9\u5668"),"\uff0c\u4e24\u6b65\u5373\u53ef\u542f\u52a8\u4e00\u4e2a\u8282\u70b9\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"$ docker pull confluxchain/conflux-rust\n$ docker run -p 12537:12537 --name cfx-node confluxchain/conflux-rust\n")),Object(a.b)("p",null,"\u76ee\u524d\u5b98\u65b9\u53d1\u5e03\u955c\u50cf\u6709\u4e09\u6761 tag \u7ebf, \u5206\u522b\u4e3a\uff1a"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"x.x.x"),Object(a.b)("li",{parentName:"ol"},"x.x.x-mainnet"),Object(a.b)("li",{parentName:"ol"},"x.x.x-testnet")),Object(a.b)("p",null,"\u7b2c\u4e00\u79cd\u955c\u50cf\u4f1a\u9ed8\u8ba4\u542f\u52a8\u4e00\u4e2a dev mode \u7684\u79c1\u94fe\u8282\u70b9\uff0c\u94fe\u7684 chainId \u548c miner \u8d26\u53f7\u968f\u673a\u751f\u6210\u3002\u540c\u65f6\u8fd8\u4f1a\u521b\u5efa 10 \u4e2a genesis \u8d26\u53f7\uff08\u8d26\u53f7\u89e3\u9501\u5bc6\u7801\u4e3a",Object(a.b)("inlineCode",{parentName:"p"},"123456"),"\uff09\uff0c\u5e76\u4e3a\u6bcf\u4e2a\u8d26\u53f7\u5206\u914d 1000CFX\uff0c\u65b9\u4fbf\u7528\u4e8e\u5f00\u53d1\u548c\u6d4b\u8bd5\u3002"),Object(a.b)("p",null,"\u5e26 mainnet\uff08testnet\uff09 \u540e\u7f00 tag \u7684\u955c\u50cf\uff0c\u5219\u4f1a\u9ed8\u8ba4\u542f\u52a8\u4e3b\u7f51\uff08\u6d4b\u8bd5\u7f51\uff09\u7684\u8282\u70b9\uff0c\u8282\u70b9\u4f1a\u901a\u8fc7\u7f51\u7edc\u4ece Epoch 0 \u5f00\u59cb\u540c\u6b65\u6570\u636e\u3002\uff08\u540c\u6b65\u8fc7\u7a0b\u82b1\u8d39\u65f6\u95f4\u8f83\u957f\uff0c\u4e14\u4e0d\u80fd\u5904\u7406\u4ea4\u6613\u53d1\u9001\u8bf7\u6c42\uff09"),Object(a.b)("p",null,"\u5b83\u4eec\u90fd\u652f\u6301\u901a\u8fc7\u6302\u8f7d\u76ee\u5f55\u7684\u65b9\u5f0f\uff0c\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6\u548c\u6570\u636e\u76ee\u5f55\uff0c\u5177\u4f53\u4f7f\u7528\u65b9\u6cd5\u53ef\u4ee5\u53c2\u770b ",Object(a.b)("a",{parentName:"p",href:"https://github.com/conflux-chain/conflux-docker"},"Conflux-rust docker \u7684 Github \u6587\u6863")))}b.isMDXComponent=!0},182:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),b=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),p=b(n),f=r,m=p["".concat(c,".").concat(f)]||p[f]||s[f]||a;return n?o.a.createElement(m,l(l({ref:t},i),{},{components:n})):o.a.createElement(m,l({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var i=2;i<a;i++)c[i]=n[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);