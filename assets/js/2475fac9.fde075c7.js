(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{178:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),d=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=d(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=d(a),b=n,h=l["".concat(c,".").concat(b)]||l[b]||u[b]||o;return a?r.a.createElement(h,s(s({ref:t},p),{},{components:a})):r.a.createElement(h,s({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var p=2;p<o;p++)c[p]=a[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},87:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),o=(a(0),a(178)),c={},s={unversionedId:"conflux-doc/docs/EVM-Space/account_explain",id:"conflux-doc/docs/EVM-Space/account_explain",isDocsHomePage:!1,title:"Correspondence between addresses in two spaces",description:"The eSpace introduced by CIP-90 is an independent space that is logically isolated from the Core space.  Accounts in the eSpace have their own balance and status.",source:"@site/docs/conflux-doc/docs/EVM-Space/account_explain.md",sourceDirName:"conflux-doc/docs/EVM-Space",slug:"/conflux-doc/docs/EVM-Space/account_explain",permalink:"/conflux-doc/docs/EVM-Space/account_explain",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/conflux-doc/docs/EVM-Space/account_explain.md",version:"current",frontMatter:{}},i=[{value:"Mapped Address for Cross-Space Operations",id:"mapped-address-for-cross-space-operations",children:[]}],p={toc:i};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The eSpace introduced by CIP-90 is an independent space that is logically isolated from the Core space.  Accounts in the eSpace have their own balance and status."),Object(o.b)("p",null,"Interacting with the Core space requires base32 account addresses. Interacting with the eSpace requires hex40 addresses.  A private key can be used in both spaces simultaniously.  But in both spaces, they are two accounts."),Object(o.b)("p",null,"Notes: Although the base32 address can be converted to hex40 format, the base32 address obtained from the private key imported in Conflux wallet will most likey be different from the address obtained from the same private key imported in Ethereum wallet with hex40 format. ",Object(o.b)("strong",{parentName:"p"},"Therefore, if you are not familiar with the correspondence between these two addresses (two accounts), don't mix them in the same format"),"."),Object(o.b)("h2",{id:"mapped-address-for-cross-space-operations"},"Mapped Address for Cross-Space Operations"),Object(o.b)("p",null,"Although the two Spaces are independent, atomic-crossing of CFX and data can be achieved through CrossSpaceCall (A built-in contract). The following three methods of this contract enable CFX to span between the two Spaces. (This built-in contract can only be interacted with in Core Space)"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"function transferEVM(bytes20 to) external payable returns (bytes memory output);\nfunction mappedBalance(address addr) external view returns (uint256);\nfunction withdrawFromMapped(uint256 value) external;\n")),Object(o.b)("p",null,"To cross CFX from Core Space to eSpace, the ",Object(o.b)("inlineCode",{parentName:"p"},"transferEVM(bytes20 to)")," method of this contract need to be called. And the destination address is specified by the method parameter to. The whole crossing operation will be done in one step."),Object(o.b)("p",null,"There will be two steps while crossing CFX from eSpace to Core Space. Each account in Core Space has a mapped account(hex40) in eSpace. First of all, you should transfer CFX to mapped account of the target crossing back address in eSpace(This action in eSpace). And then call the ",Object(o.b)("inlineCode",{parentName:"p"},"withdrawFromMapped(uint256 value)")," method of the ",Object(o.b)("inlineCode",{parentName:"p"},"CrossSpaceCall")," (The built-in contract) in Core Space to cross the CFX from the mapped address back to the receiving address."),Object(o.b)("p",null,"The mapped address is calculated from the base32 address in Native Space. The rules are as follows:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Convert the base32 address to hex format, and then convert to bytes type"),Object(o.b)("li",{parentName:"ol"},"Keccak the bytes from the previous step to get the hash."),Object(o.b)("li",{parentName:"ol"},"Take the last 160 bits of the hash and convert it to hex40 format, which is the mapped address in EVM Space.")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"js-conflux-sdk v2.0")," provides a method to get the mapped address of the base32 address"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const { address } = require('js-conflux-sdk');\nconst base32Address = 'cfx:aak2rra2njvd77ezwjvx04kkds9fzagfe6ku8scz91';\nconst mappedAddress = address.cfxMappedEVMSpaceAddress(base32Address);\n// 0x12Bf6283CcF8Ad6ffA63f7Da63EDc217228d839A\n")),Object(o.b)("p",null,"Notes about the mapped address:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The mapped address is an address in eSpace, so it has a hex40 format."),Object(o.b)("li",{parentName:"ol"},"The purpose of the mapped address is to serve as a transit address when crossing CFX back to Core space."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Remember NOT to convert the base32 address directly to hex40 format as the mapped address. This action will result in the loss of your assets"))))}d.isMDXComponent=!0}}]);