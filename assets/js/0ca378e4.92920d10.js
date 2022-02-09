(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{178:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return h}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),u=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=u(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(t),b=r,h=d["".concat(c,".").concat(b)]||d[b]||p[b]||a;return t?o.a.createElement(h,s(s({ref:n},l),{},{components:t})):o.a.createElement(h,s({ref:n},l))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=b;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<a;l++)c[l]=t[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},245:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/full-stack-ed2cd98d1901c448217b93bcb23849ff.png"},73:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(7),a=(t(0),t(178)),c={},s={unversionedId:"conflux-doc/docs/design",id:"conflux-doc/docs/design",isDocsHomePage:!1,title:"Conflux Design Document",description:"In this document, we describe the architecture and organization of Conflux software stack and its design rationale.",source:"@site/docs/conflux-doc/docs/design.md",sourceDirName:"conflux-doc/docs",slug:"/conflux-doc/docs/design",permalink:"/conflux-doc/docs/design",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/conflux-doc/docs/design.md",version:"current",frontMatter:{}},i=[],l={toc:i};function u(e){var n=e.components,c=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,c,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In this document, we describe the architecture and organization of Conflux software stack and its design rationale.\nThe following figure shows the overview of the Conflux full node stack.\n",Object(a.b)("img",{alt:"Full Stack",src:t(245).default}),"\nIt consists of several key components."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Peer-to-Peer Layer"),Object(a.b)("li",{parentName:"ul"},"Synchronization Graph"),Object(a.b)("li",{parentName:"ul"},"Consensus Graph"),Object(a.b)("li",{parentName:"ul"},"Storage Layer"),Object(a.b)("li",{parentName:"ul"},"Transaction Pool"),Object(a.b)("li",{parentName:"ul"},"Block Generator")),Object(a.b)("p",null,"Generally speaking, the peer-to-peer layer takes charge of disseminating blocks and transactions among the nodes in the entire network where each node maintains several inbound/outbound connections to its peers.\nEach node also maintains an in-memory synchronization graph data structure. When a new block is received from a peer or generated locally, the block will be first inserted into the synchronization graph where it goes through some basic validation which does not require graph-wise information.\nAt the time when a block enters the synchronization graph, its past-set blocks may not already entered.\nThe synchronization graph monitors the block and puts it into the consensus graph once all its past-set blocks enters the synchronization graph.\nWhen a block enters the consensus graph, its past-set blocks should all already entered this graph.\nThen the consensus algorithm will be conducted based on this newly arrived block to adjust the total order of blocks accordingly. The consensus graph component executes the newly arrived block and updates the account states in the storage layer. "),Object(a.b)("p",null,"Each node maintains a transaction pool that holds the to-be-packed transactions and relays the transactions to its peers that may need them.\nThe block generator component drives the mining efforts, picks transactions from the pool, and packs them into the newly generated block."),Object(a.b)("p",null,"This document is organized as in the following sections."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/conflux-doc/docs/consensus"},"Consensus Mechanism")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/conflux-doc/docs/sync"},"Block Synchronization Process")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/conflux-doc/docs/trans"},"Transaction Relay"))))}u.isMDXComponent=!0}}]);