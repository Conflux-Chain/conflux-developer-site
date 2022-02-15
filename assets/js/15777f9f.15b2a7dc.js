(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{183:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,m=b["".concat(o,".").concat(d)]||b[d]||s[d]||c;return n?a.a.createElement(m,l(l({ref:t},i),{},{components:n})):a.a.createElement(m,l({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var i=2;i<c;i++)o[i]=n[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),c=(n(0),n(183)),o={id:"evm_space_networks",title:"Network Endpoints",custom_edit_url:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/EVM-Space/networks.md",keywords:["endpoint"]},l={unversionedId:"conflux-doc/docs/EVM-Space/evm_space_networks",id:"conflux-doc/docs/EVM-Space/evm_space_networks",isDocsHomePage:!1,title:"Network Endpoints",description:"eSpace status:",source:"@site/docs/conflux-doc/docs/EVM-Space/networks.md",sourceDirName:"conflux-doc/docs/EVM-Space",slug:"/conflux-doc/docs/EVM-Space/evm_space_networks",permalink:"/conflux-doc/docs/EVM-Space/evm_space_networks",editUrl:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/EVM-Space/networks.md",version:"current",frontMatter:{id:"evm_space_networks",title:"Network Endpoints",custom_edit_url:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/EVM-Space/networks.md",keywords:["endpoint"]},sidebar:"evmSpace",previous:{title:"Introduction",permalink:"/conflux-doc/docs/EVM-Space/intro_of_evm_space"},next:{title:"Conflux eSpace Guide",permalink:"/v2-hardfork/evm_space_guide"}},p=[{value:"Endpoints",id:"endpoints",children:[{value:"Mainnet",id:"mainnet",children:[]},{value:"Testnet",id:"testnet",children:[]}]}],i={toc:p};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"eSpace status:"),Object(c.b)("div",{class:"networks-table"}),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Network"),Object(c.b)("th",{parentName:"tr",align:null},"Chain ID"),Object(c.b)("th",{parentName:"tr",align:null},"RPC Endpoint URL"),Object(c.b)("th",{parentName:"tr",align:null},"Explorer"),Object(c.b)("th",{parentName:"tr",align:null},"Status"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"#mainnet"},"Mainnet")),Object(c.b)("td",{parentName:"tr",align:null},"1030 (0x406)"),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"https://evm.confluxrpc.com"},"https://evm.confluxrpc.com")),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"https://evm.confluxscan.net"},"https://evm.confluxscan.net")),Object(c.b)("td",{parentName:"tr",align:null},"Forked at EpochNumber 36935000 ",Object(c.b)("br",null)," BlockNumber 92060600")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"#testnet"},"Testnet")),Object(c.b)("td",{parentName:"tr",align:null},"71 (0x47)"),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"https://evmtestnet.confluxrpc.com"},"https://evmtestnet.confluxrpc.com")),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"https://evmtestnet.confluxscan.net"},"https://evmtestnet.confluxscan.net")),Object(c.b)("td",{parentName:"tr",align:null},"Online ",Object(c.b)("br",null)," Forked at EpochNumber 61465000 ",Object(c.b)("br",null)," BlockNumber 77340000")))),Object(c.b)("h2",{id:"endpoints"},"Endpoints"),Object(c.b)("h3",{id:"mainnet"},"Mainnet"),Object(c.b)("p",null,"The Mainnet Web3 endpoint is at: ",Object(c.b)("inlineCode",{parentName:"p"},"https://evm.confluxrpc.com")," (port 443)"),Object(c.b)("h3",{id:"testnet"},"Testnet"),Object(c.b)("p",null,"The Testnet Web3 endpoint is at: ",Object(c.b)("inlineCode",{parentName:"p"},"https://evmtestnet.confluxrpc.com")," (port 443)"))}u.isMDXComponent=!0}}]);