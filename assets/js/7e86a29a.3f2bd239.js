(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),c=n(7),o=(n(0),n(192)),a={},l={unversionedId:"conflux-doc/docs/RPCs/meta-rpc",id:"conflux-doc/docs/RPCs/meta-rpc",isDocsHomePage:!1,title:"meta-rpc",description:"rpc_modules",source:"@site/docs/conflux-doc/docs/RPCs/meta-rpc.md",sourceDirName:"conflux-doc/docs/RPCs",slug:"/conflux-doc/docs/RPCs/meta-rpc",permalink:"/conflux-doc/docs/RPCs/meta-rpc",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/conflux-doc/docs/RPCs/meta-rpc.md",version:"current",frontMatter:{}},p=[{value:"rpc_modules",id:"rpc_modules",children:[]},{value:"rpc_methods",id:"rpc_methods",children:[]}],u={toc:p};function s(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"rpc_modules"},"rpc_modules"),Object(o.b)("p",null,"Return fullnode's opened RPC method groups"),Object(o.b)("h4",{id:"added-at"},"Added at"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"v2.0.0")),Object(o.b)("h4",{id:"parameters"},"Parameters"),Object(o.b)("p",null,"None"),Object(o.b)("h4",{id:"returns"},"Returns"),Object(o.b)("p",null,"Method prefix array"),Object(o.b)("h4",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'http://localhost:12537\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \' {\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "method": "rpc_modules",\n    "params": []\n  }\'\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "result": ["cfx", "txpool", "pos", "trace", "pubsub"],\n    "id": "15922956697249514502"\n}\n')),Object(o.b)("h3",{id:"rpc_methods"},"rpc_methods"),Object(o.b)("p",null,"Return fullnode's opened RPC methods"),Object(o.b)("h4",{id:"added-at-1"},"Added at"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"v2.0.0")),Object(o.b)("h4",{id:"parameters-1"},"Parameters"),Object(o.b)("p",null,"None"),Object(o.b)("h4",{id:"returns-1"},"Returns"),Object(o.b)("p",null,"All available RPC methods"),Object(o.b)("h4",{id:"example-1"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'http://localhost:12537\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \' {\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "method": "rpc_methods",\n    "params": []\n  }\'\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "result": ["cfx_getBalance"],\n    "id": "15922956697249514502"\n}\n')))}s.isMDXComponent=!0},192:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),c=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var u=c.a.createContext({}),s=function(e){var t=c.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return c.a.createElement(u.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},b=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(n),b=r,m=d["".concat(a,".").concat(b)]||d[b]||i[b]||o;return n?c.a.createElement(m,l(l({ref:t},u),{},{components:n})):c.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);