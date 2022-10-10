(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{129:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),i=r(7),a=(r(0),r(183)),o={},c={unversionedId:"conflux-rust/util/hibitset/README",id:"conflux-rust/util/hibitset/README",isDocsHomePage:!1,title:"hibitset",description:"Build Status",source:"@site/docs/conflux-rust/util/hibitset/README.md",sourceDirName:"conflux-rust/util/hibitset",slug:"/conflux-rust/util/hibitset/README",permalink:"/conflux-rust/util/hibitset/README",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/conflux-rust/util/hibitset/README.md",version:"current",frontMatter:{}},s=[{value:"Usage",id:"usage",children:[]},{value:"License",id:"license",children:[]}],u={toc:s};function l(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://travis-ci.org/slide-rs/hibitset"},Object(a.b)("img",{parentName:"a",src:"https://travis-ci.org/slide-rs/hibitset.svg",alt:"Build Status"})),"\n",Object(a.b)("a",{parentName:"p",href:"https://crates.io/crates/hibitset"},Object(a.b)("img",{parentName:"a",src:"https://img.shields.io/crates/v/hibitset.svg?maxAge=2592000",alt:"Crates.io"}))),Object(a.b)("p",null,"Provides hierarchical bit sets, which allow very fast iteration on\nsparse data structures."),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("p",null,"Just add this to your ",Object(a.b)("inlineCode",{parentName:"p"},"Cargo.toml"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\nhibitset = "0.6"\n')),Object(a.b)("h2",{id:"license"},"License"),Object(a.b)("p",null,"This library is licensed under the Apache License 2.0,\nsee ",Object(a.b)("a",{parentName:"p",href:"LICENSE"},"the LICENSE file")," for more information."))}l.isMDXComponent=!0},183:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),f=n,d=p["".concat(o,".").concat(f)]||p[f]||b[f]||a;return r?i.a.createElement(d,c(c({ref:t},u),{},{components:r})):i.a.createElement(d,c({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var u=2;u<a;u++)o[u]=r[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);