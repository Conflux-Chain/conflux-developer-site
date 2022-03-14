(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(184)),c={id:"conflux_rpcs",title:"Public RPCs endpoints",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/sdks-and-tools/en/rpc-endpoints.md",keywords:["endpoints"]},i={unversionedId:"sdks-and-tools/en/conflux_rpcs",id:"sdks-and-tools/en/conflux_rpcs",isDocsHomePage:!1,title:"Public RPCs endpoints",description:"Public available Conflux network RPC endpoints",source:"@site/docs/sdks-and-tools/en/rpc-endpoints.md",sourceDirName:"sdks-and-tools/en",slug:"/sdks-and-tools/en/conflux_rpcs",permalink:"/sdks-and-tools/en/conflux_rpcs",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/sdks-and-tools/en/rpc-endpoints.md",version:"current",frontMatter:{id:"conflux_rpcs",title:"Public RPCs endpoints",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/sdks-and-tools/en/rpc-endpoints.md",keywords:["endpoints"]},sidebar:"docs",previous:{title:"Papers",permalink:"/introduction/en/conflux_papers"},next:{title:"Overview",permalink:"/v2-hardfork/hydra_overview"}},l=[{value:"Notes",id:"notes",children:[]},{value:"Backup RPC Endpoints",id:"backup-rpc-endpoints",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Public available Conflux network RPC endpoints"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Network"),Object(o.b)("th",{parentName:"tr",align:null},"Chain ID"),Object(o.b)("th",{parentName:"tr",align:null},"Explorer"),Object(o.b)("th",{parentName:"tr",align:null},"Endpoint"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Mainnet"),Object(o.b)("td",{parentName:"tr",align:null},"1029"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://confluxscan.io"},"https://confluxscan.io")),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://main.confluxrpc.com"},"https://main.confluxrpc.com")," ",Object(o.b)("br",null)," wss://main.confluxrpc.com/ws")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Testnet"),Object(o.b)("td",{parentName:"tr",align:null},"1"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://testnet.confluxscan.io"},"https://testnet.confluxscan.io")),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://test.confluxrpc.com"},"https://test.confluxrpc.com")," ",Object(o.b)("br",null)," wss://test.confluxrpc.com/ws")))),Object(o.b)("h2",{id:"notes"},"Notes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"cfx_getLogs")," method's ",Object(o.b)("inlineCode",{parentName:"li"},"max epoch gap")," is configured to ",Object(o.b)("inlineCode",{parentName:"li"},"1000"),"."),Object(o.b)("li",{parentName:"ul"},"To ensure the service availability, we have set http's rate limit to ",Object(o.b)("a",{parentName:"li",href:"https://www.nginx.com/blog/rate-limiting-nginx/"},Object(o.b)("inlineCode",{parentName:"a"},"rate=100r/s burst=80 nodelay")),". If the request ratio succeed the limit, the service will return ",Object(o.b)("inlineCode",{parentName:"li"},"503"),". If you have requirement to send a lot transaction, one solution is send transaction in batch.")),Object(o.b)("h2",{id:"backup-rpc-endpoints"},"Backup RPC Endpoints"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Mainnet: ",Object(o.b)("a",{parentName:"li",href:"https://main.confluxrpc.org"},"https://main.confluxrpc.org")),Object(o.b)("li",{parentName:"ul"},"Testnet: ",Object(o.b)("a",{parentName:"li",href:"https://test.confluxrpc.org"},"https://test.confluxrpc.org"))))}p.isMDXComponent=!0},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(m,i(i({ref:t},s),{},{components:n})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);