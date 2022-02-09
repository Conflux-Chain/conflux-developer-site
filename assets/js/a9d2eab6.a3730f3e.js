(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(7),i=(n(0),n(178)),a={},c={unversionedId:"conflux-doc/docs/stratum",id:"conflux-doc/docs/stratum",isDocsHomePage:!1,title:"Stratum Protocol in Conflux-Rust",description:"Design Goal",source:"@site/docs/conflux-doc/docs/stratum.md",sourceDirName:"conflux-doc/docs",slug:"/conflux-doc/docs/stratum",permalink:"/conflux-doc/docs/stratum",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/conflux-doc/docs/stratum.md",version:"current",frontMatter:{}},l=[{value:"General Workflow",id:"general-workflow",children:[]},{value:"RPC Interface",id:"rpc-interface",children:[{value:"Server-side RPCs",id:"server-side-rpcs",children:[]},{value:"Client-side Notification",id:"client-side-notification",children:[]}]}],s={toc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Design Goal"),Object(i.b)("p",null,"Rust is an excellent language to develop distributed systems like Conflux, but\nit is not very so good for developing miners. Miners are typically developed\nvia languages like C/C++ that can operate with high performance and GPUs. We\ntherefore design a stratum-like protocol in Conflux-Rust to enable external\nminers to connect to Conflux."),Object(i.b)("p",null,"Note that to keep the protocol simple, the design goal of the stratum-like\nprotocol is for solo-mining only, i.e., Conflux-Rust are connected with miner\nprocesses in local or remote machines that belong to the same entity. It is not\ndesigned to run as a mining pool server. For those who wish to run a mining\npool, it is recommended to build their own customized proxy server that\nconnects to Conflux-Rust."),Object(i.b)("h2",{id:"general-workflow"},"General Workflow"),Object(i.b)("p",null,"In the scenario where an external miner connecting to Conflux-Rust via its\nstratum port (default 32525), here is the typical workflow."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The miner connects via TCP to the stratum port. Conflux-Rust must run with\nthe configuration that enables stratum.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The miner sends a ",Object(i.b)("inlineCode",{parentName:"p"},"mining.subscribe")," RPC call via the TCP stream. It informs\nConflux-Rust the miner name. ",Object(i.b)("inlineCode",{parentName:"p"},"mining.subscribe")," also performs a basic password\nbased authentication, where the password can be set at the configuration file\nof Conflux-Rust.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"After successful subscription, Conflux-Rust will continue to send\n",Object(i.b)("inlineCode",{parentName:"p"},"mining.notify")," RPC calls to the miner via the TCP stream. Each ",Object(i.b)("inlineCode",{parentName:"p"},"mining.notify"),"\ncorresponds to a new proof-of-work (PoW) problem for the miner to solve. Miners\nare expected to work on the last received job.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Whenever miner solves a PoW problem, it returns the solution (i.e., the\nnonce) to Conflux-Rust via calling ",Object(i.b)("inlineCode",{parentName:"p"},"mining.submit")," RPC calls. ")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Miner can simply disconnect any time in this process to quit."))),Object(i.b)("h2",{id:"rpc-interface"},"RPC Interface"),Object(i.b)("h3",{id:"server-side-rpcs"},"Server-side RPCs"),Object(i.b)("h4",{id:"miningsubscribe"},"mining.subscribe"),Object(i.b)("p",null,"Start to subscribe the proof-of-work notification from the stratum server"),Object(i.b)("h5",{id:"parameters"},"Parameters"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"WORKER_ID, string - the name of the miner"),Object(i.b)("li",{parentName:"ol"},"Secret, empty or 32-bytes, the secret that corresponds to the keccak result\nof the password in the configuration. Empty if password is not enabled.")),Object(i.b)("h5",{id:"returns"},"Returns"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Bool")," - ",Object(i.b)("inlineCode",{parentName:"p"},"true")," if successful, ",Object(i.b)("inlineCode",{parentName:"p"},"false")," if not."),Object(i.b)("h5",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'// Request\n\'{"jsonrpc":"2.0","method":"mining.subscribe","params":["cfxmine", ""],"id":1}\'\n\n// Response\n{\n  "jsonrpc": "2.0",\n  "result": "true",\n  "id": 1\n}\n')),Object(i.b)("hr",null),Object(i.b)("h4",{id:"miningsubmit"},"mining.submit"),Object(i.b)("p",null,"Submit a PoW solution to the stratum server"),Object(i.b)("h5",{id:"parameters-1"},"Parameters"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"WORKER_ID, string - the name of the miner"),Object(i.b)("li",{parentName:"ol"},"JOB_ID, hex-string - the identifier of the job, which is typically same as\nthe hash of the PoW problem."),Object(i.b)("li",{parentName:"ol"},"NONCE, hex-string of 32-bytes - the nonce solution of the PoW problem"),Object(i.b)("li",{parentName:"ol"},"HASH, hex-string of 32-bytes - the hash of the solved PoW problem.")),Object(i.b)("h5",{id:"returns-1"},"Returns"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Array")," - A single element of ",Object(i.b)("inlineCode",{parentName:"p"},"true")," if successful, the first element will be\n",Object(i.b)("inlineCode",{parentName:"p"},"false")," if not and the second element will explain reasons in string."),Object(i.b)("h5",{id:"example-1"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'// Request\n\'{"jsonrpc":"2.0","method":"mining.submit","params":["cfxmine", "0x2106e1162d1199483fa010bcaa7d4f05b23b85d456b4a7089d787ae2e880deaf","0x21b49d385865819a171ed8cd9d9f80acc468e501f3486d3600000000000c786c","0x2106e1162d1199483fa010bcaa7d4f05b23b85d456b4a7089d787ae2e880deaf"],"id":1}\'\n\n// Response\n{\n  "jsonrpc": "2.0",\n  "result": ["true"],\n  "id": 1\n}\n\n{\n  "jsonrpc": "2.0",\n  "result": ["false", "invlaid nonce"],\n  "id": 1\n}\n')),Object(i.b)("hr",null),Object(i.b)("h3",{id:"client-side-notification"},"Client-side Notification"),Object(i.b)("p",null,"Note that although the server notifies the mining client via a RPC like\nrequest, it is not a true RPC -- it does not expect the client to return any\nresponse. Instead, the client will just update the PoW problem it works on and\nsubmits whenever it finds solution."),Object(i.b)("h4",{id:"miningnotify"},"mining.notify"),Object(i.b)("p",null,"Notify the client about a new PoW problem."),Object(i.b)("h5",{id:"parameters-2"},"Parameters"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"JOB_ID, hex-string - the identifier of the job."),Object(i.b)("li",{parentName:"ol"},"HASH, 32-bytes - the hash of the PoW problem."),Object(i.b)("li",{parentName:"ol"},"BOUNDARY, U256 - the difficulty boundary of the problem. For a nonce to be valid, the resulting\nhash must be smaller than the BOUNDARY.")),Object(i.b)("h5",{id:"example-2"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'// Request\n\'{"jsonrpc":"2.0","method":"mining.notify","params":["0x4e08db21d43a7696afa3d00ed948568210f3ab3f34673f1d17198625ec175a9c","0x4e08db21d43a7696afa3d00ed948568210f3ab3f34673f1d17198625ec175a9c","0x1a4e3422948568210f3ab3f34673f1d17198625ec175a9c"],"id":3}\'\n\n---\n')))}b.isMDXComponent=!0},178:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(n),m=r,d=u["".concat(a,".").concat(m)]||u[m]||p[m]||i;return n?o.a.createElement(d,c(c({ref:t},s),{},{components:n})):o.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);