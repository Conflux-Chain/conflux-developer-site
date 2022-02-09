(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),i=n(7),o=(n(0),n(178)),r={},l={unversionedId:"conflux-rust/core/src/pos/config/management/genesis/README",id:"conflux-rust/core/src/pos/config/management/genesis/README",isDocsHomePage:!1,title:"Diem Config Manager",description:"The diem-genesis-tool provides a tool for the genesis ceremony of the Diem blockchain. The functionality of the tool is dictated by the organization of nodes within the system:",source:"@site/docs/conflux-rust/core/src/pos/config/management/genesis/README.md",sourceDirName:"conflux-rust/core/src/pos/config/management/genesis",slug:"/conflux-rust/core/src/pos/config/management/genesis/README",permalink:"/conflux-rust/core/src/pos/config/management/genesis/README",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/conflux-rust/core/src/pos/config/management/genesis/README.md",version:"current",frontMatter:{}},s=[{value:"Generating Genesis",id:"generating-genesis",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"The Tools",id:"the-tools",children:[]},{value:"The Process",id:"the-process",children:[{value:"Build a Configuration File",id:"build-a-configuration-file",children:[]},{value:"The Association",id:"the-association",children:[]},{value:"Validator Owners",id:"validator-owners",children:[]},{value:"Validator Operators",id:"validator-operators",children:[]},{value:"Important Notes",id:"important-notes",children:[]}]}],c={toc:s};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"diem-genesis-tool")," provides a tool for the genesis ceremony of the Diem blockchain. The functionality of the tool is dictated by the organization of nodes within the system:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A diem root account that maintains the set of validator owners, validator operators, and the active validator set."),Object(o.b)("li",{parentName:"ul"},"A treasury compliance account that maintains VASPs, DDs, and other related topics."),Object(o.b)("li",{parentName:"ul"},"Validator owners (OW) that have accounts on the blockchain. These accounts contain a validator configuration and specify a validator operator."),Object(o.b)("li",{parentName:"ul"},"Validator operators (OP) that have accounts on the blockchain. These accounts have the ability to manipulate validator configuration.")),Object(o.b)("h2",{id:"generating-genesis"},"Generating Genesis"),Object(o.b)("p",null,"The process for starting organization of the planned and current functionality includes:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Initialization ceremony",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"The association sets up a secure-backend for data uploads, ",Object(o.b)("inlineCode",{parentName:"li"},"shared storage"),", e.g., GitHub.  The association then distributes credentials for each OW and OP."),Object(o.b)("li",{parentName:"ul"},"The association generates its ",Object(o.b)("inlineCode",{parentName:"li"},"diem root key")," and shares the public key to the ",Object(o.b)("inlineCode",{parentName:"li"},"shared storage"),"."),Object(o.b)("li",{parentName:"ul"},"Each OW will generate a private ",Object(o.b)("inlineCode",{parentName:"li"},"owner key")," and share the public key to the ",Object(o.b)("inlineCode",{parentName:"li"},"shared storage"),"."),Object(o.b)("li",{parentName:"ul"},"Each OP will generate a private ",Object(o.b)("inlineCode",{parentName:"li"},"operator key")," and share the public key to the ",Object(o.b)("inlineCode",{parentName:"li"},"shared storage"),"."))),Object(o.b)("li",{parentName:"ul"},"Validator initialization",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Each OW will select a OP and submit this as a transaction signed by their ",Object(o.b)("inlineCode",{parentName:"li"},"owner key")," and uploads it to the ",Object(o.b)("inlineCode",{parentName:"li"},"shared storage"),"."),Object(o.b)("li",{parentName:"ul"},"For each validator supported by a OP, the OP will generate network, execution and consensus keys as well as network addresses for full node and validator endpoints. The OP will generate a transaction containing this data signed by their ",Object(o.b)("inlineCode",{parentName:"li"},"operator key")," and uploads it to the ",Object(o.b)("inlineCode",{parentName:"li"},"shared storage"),"."))),Object(o.b)("li",{parentName:"ul"},"Genesis",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Each OP will download the accumulated data to produce a genesis.blob"),Object(o.b)("li",{parentName:"ul"},"The association will download the accumulated data to produce both a genesis.blob and genesis waypoint."))),Object(o.b)("li",{parentName:"ul"},"Starting",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"The association publishes the data associated with genesis, the genesis.blob, and the genesis waypoint."),Object(o.b)("li",{parentName:"ul"},"Each OP downloads the genesis waypoint provided by the association and inserts it into their Diem instance(s)."),Object(o.b)("li",{parentName:"ul"},"Each OP verifies that the genesis.blob, waypoint, and local configuration are correct and broadcast their results to other OPs and the association."),Object(o.b)("li",{parentName:"ul"},"Upon a quorum of validators having correct status, the association instructs the OPs to begin their validators."),Object(o.b)("li",{parentName:"ul"},"Upon a quorum of validators coming online, the blockchain will begin processing transactions.")))),Object(o.b)("p",null,"Notes:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"This describes a process for instantiating organization that has yet to be specified but extends from the current state of the Diem Testnet."),Object(o.b)("li",{parentName:"ul"},"The implementation as described has yet to be fully implemented in Move, hence, this tool maps to the current state."),Object(o.b)("li",{parentName:"ul"},"A new OP / OW onboarding to an existing blockchain follow the same process and delegate the initial creation of accounts and setting of configuration to the association.")),Object(o.b)("h2",{id:"requirements"},"Requirements"),Object(o.b)("p",null,"Each individual instance, OW or OP, should have access to a secure storage solution. Those leveraging Diem Secure Storage can directly use this tool, those that do not will need to provide their own tooling."),Object(o.b)("h2",{id:"the-tools"},"The Tools"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"diem-genesis-tool")," offers several facilities:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Simplified configuration management via a config file that can store frequently reused paramters including validator and shared storage."),Object(o.b)("li",{parentName:"ul"},"Retrieving and submitting OW, OP, and validator configuration -- this is from a local secure storage to a remote secure storage -- leveraging the identity tool."),Object(o.b)("li",{parentName:"ul"},"Converting a genesis configuration and a secure storage into a genesis.blob / genesis waypoint.")),Object(o.b)("h2",{id:"the-process"},"The Process"),Object(o.b)("p",null,"The end-to-end process assumes that each participant has their own secure storage solution, e.g., Vault, and a token stored locally on their disk in a file accessible to the management tool."),Object(o.b)("p",null,"In addition, the association will provide an entry point into a ",Object(o.b)("inlineCode",{parentName:"p"},"shared storage"),", e.g., GitHub repository (and repository owner) along with a distinct namespace for each participant. GitHub namespaces equate to directories within the repository."),Object(o.b)("p",null,"Each participant must retrieve an appropriate GitHub ",Object(o.b)("a",{parentName:"p",href:"https://github.com/settings/tokens"},"token")," for their account that allows access to the ",Object(o.b)("inlineCode",{parentName:"p"},"repo")," scope. This token must be stored locally on their disk in a file accessible to the management tool."),Object(o.b)("p",null,"Finally, each participant should initialize their respective key: ",Object(o.b)("inlineCode",{parentName:"p"},"diem_root"),", ",Object(o.b)("inlineCode",{parentName:"p"},"treasury_compliance"),", ",Object(o.b)("inlineCode",{parentName:"p"},"owner"),", or ",Object(o.b)("inlineCode",{parentName:"p"},"operator")," in a secure storage solution. How this is done is outside the scope of this document."),Object(o.b)("p",null,"The remainder of this section specifies distinct behaviors for each role."),Object(o.b)("h3",{id:"build-a-configuration-file"},"Build a Configuration File"),Object(o.b)("p",null,"While ",Object(o.b)("inlineCode",{parentName:"p"},"diem-genesis-tool")," supports setting the backends on each command, doing so is cumbersome and fraught with error. Instead, all participants, should first construct a configuration file for use in genesis and later use via the operational tool. Below is an example configuration file in yaml format:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'# config.yaml\n\nchain_id: "MAINNET"\njson_server: "http://127.0.0.1:8080"\nshared_backend:\n    type: "github"\n    repository_owner: "REPOSITORY_OWNER"\n    repository: "REPOSITORY"\n    namespace: "REPOSITOR_FOLDER"\n    token:\n        from_config: "test"\nvalidator_backend:\n    type: "vault"\n    server: "127.0.0.1:8200"\n    namespace: "VIRTUAL_NAMESPACE"\n    token:\n        from_config: "test"\n')),Object(o.b)("p",null,"Overview of fields:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"chain_id")," specifies a distinct chain and is written into genesis, checked during network connections, and part of each transaction. It is provided by the association."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"json_server")," specifies a Diem JSON Server. This can be any that connect to your network including your own of one run by the association. It is not used in genesis, so a dummy value is acceptable during initial configuration."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"shared_backend")," is a pointer to the associaton's ",Object(o.b)("inlineCode",{parentName:"li"},"shared storage"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"validator_backend")," is a pointer to the local validator node's secure storage.")),Object(o.b)("h3",{id:"the-association"},"The Association"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The association will publish a layout containing the distinct names and roles of the participants to ",Object(o.b)("inlineCode",{parentName:"li"},"shared storage"),":")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"cargo run -p diem-genesis-tool -- \\\n    set-layout \\\n    --config config_file.yaml \\\n    --path $PATH_TO_LAYOUT\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The association will publish the the ",Object(o.b)("inlineCode",{parentName:"li"},"diem root"),"  public key to the ",Object(o.b)("inlineCode",{parentName:"li"},"shared storage"),":")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"cargo run -p diem-genesis-tool -- \\\n    diem-root-key \\\n    --config config_file.yaml\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The association will publish the the ",Object(o.b)("inlineCode",{parentName:"li"},"diem root"),"  public key to the ",Object(o.b)("inlineCode",{parentName:"li"},"shared storage"),":")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"cargo run -p diem-genesis-tool -- \\\n    diem-treasury-compliance-key \\\n    --config config_file.yaml\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Upon both OW and OP completing their portion of this process, the association will build a genesis waypoint:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"cargo run -p diem-genesis-tool -- \\\n    create-waypoint \\\n    --config config_file.yaml\n")),Object(o.b)("p",null,"The layout is a toml configuration file of the following format:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'[operator] = ["alice", "bob"]\n[owner] = ["carol", "dave"]\ndiem_root = "erin"\ntreasury_compliance = "fred"\n')),Object(o.b)("p",null,"where each field maps to a role as described in this document."),Object(o.b)("h3",{id:"validator-owners"},"Validator Owners"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Each Validator Owner member will upload their key to GitHub:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"cargo run -p diem-genesis-tool -- \\\n    owner-key \\\n    --config config_file.yaml\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Each OW will select the OP responsible for operating the validator node. This selection is done by specifying the name of the OP (as registered in the shared Github):")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"cargo run -p diem-genesis-tool --\n    set-operator \\\n    --config config_file.yaml \\\n    --operator-name $OPERATOR_NAME\n")),Object(o.b)("h3",{id:"validator-operators"},"Validator Operators"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Each Validator Operator member will upload their key to GitHub:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"cargo run -p diem-genesis-tool --\n    operator-key \\\n    --config config_file.yaml\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"For each validator managed by an operator, the operator will upload a signed validator-config. The owner corresponds to the name of the OW (as registered in the shared Github). The namespace in GitHub correlates to the operator namespace:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'cargo run -p diem-genesis-tool --\n    validator-config \\\n    --config config_file.yaml \\\n    --owner-name $OWNER_NAME \\\n    --validator-address "/dns/$VALIDATOR_DNS/tcp/$VALIDATOR_PORT" \\\n    --fullnode-address "/dns/$VFN_DNS/tcp/$VFN_PORT" \\\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Upon receiving signal from the association, OPs can now build genesis:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"cargo run -p diem-genesis-tool -- \\\n    genesis \\\n    --config config_file.yaml \\\n    --path $PATH_TO_GENESIS \\\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Similarly, the association should publish a genesis waypoint, and the OP should insert it into their storage (using the management tool):")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"cargo run -p diem-genesist-tool -- \\\n    insert-waypoint \\\n    --config config_file.yaml \\\n    --waypoint $WAYPOINT\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Perform a verify that ensures the local store maps to Genesis and Genesis maps\nto the waypoint:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"cargo run -p diem-genesis-tool -- \\\n    verify \\\n    --config config_file.yaml \\\n    --genesis_path $PATH_TO_GENESIS\n")),Object(o.b)("h3",{id:"important-notes"},"Important Notes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A namespace in Vault is represented as a subdirectory for secrets and a prefix followed by ",Object(o.b)("inlineCode",{parentName:"li"},"__")," for transit, e.g., ",Object(o.b)("inlineCode",{parentName:"li"},"namespace__"),"."),Object(o.b)("li",{parentName:"ul"},"A namespace in GitHub is represented by a subdirectory"),Object(o.b)("li",{parentName:"ul"},"The GitHub repository and repository owner translate into the following url: ",Object(o.b)("inlineCode",{parentName:"li"},"https://github.org/REPOSITORY_OWNER/REPOSITORY"))))}b.isMDXComponent=!0},178:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,h=p["".concat(r,".").concat(d)]||p[d]||u[d]||o;return n?i.a.createElement(h,l(l({ref:t},c),{},{components:n})):i.a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);