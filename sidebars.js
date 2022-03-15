/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  guides: [
    "guides/en/guides_list",
    "guides/en/how_to_use_cfx_faucet",
    "guides/en/how_to_deploy_erc20_token",
    {
      type: 'link',
      label: 'Easy-to-understanding introduction of Tree-Graph',
      href: 'https://medium.com/conflux-network/understanding-the-conflux-tree-graph-consensus-algorithm-e1b57d5c3da9'
    }
  ],

  docs: [
    {
      type: "category",
      label: "Getting started",
      collapsed: false,
      items: [
        { type: "doc", id: "introduction/en/conflux_overview" },
        {
          type: "doc",
          id: "introduction/en/conflux_basics",
        },
        {
          type: 'doc',
          label: 'Internal Contracts',
          id: "conflux-rust/internal_contract/internal_contract",
        },
        {
          type: 'doc',
          id: 'introduction/en/conflux_storage'
        },
        {
          type: "doc",
          id: 'introduction/en/conflux_papers',
        }, 
        {
          type: "doc",
          id: "sdks-and-tools/en/conflux_rpcs",
          label: "Network Endpoints"
        },
        {
          type: 'link',
          label: 'Testnet Faucet',
          href: 'http://faucet.confluxnetwork.org/'
        }
      ],
    },
    {
      type: "category",
      label: "Hydra(v2.0) Hardfork",
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'v2-hardfork/hydra_overview'
        },
        {
          type: 'doc',
          id: 'v2-hardfork/pos_overview'
        },
        {
          type: 'doc',
          id: 'v2-hardfork/why_pos'
        },
        {
          type: 'doc',
          id: 'v2-hardfork/pos_faqs'
        },
        {
          type: 'doc',
          id: 'v2-hardfork/new_introduced_contracts'
        }
      ]
    },
    {
      type: "category",
      label: "Run Conflux Node",
      collapsed: false,
      items: [
        { type: 'doc', id: 'run-a-node/en/how_to_get' },
        { type: "doc", id: "conflux-doc/docs/installation" },
        { type: "doc", id: "conflux-doc/docs/get_started" },
        {
          type: "doc",
          id: "conflux-doc/docs/independent_chain",
        },
        {
          type: "doc",
          id: "conflux-doc/docs/light_node",
        },
        { type: "doc", id: "apis/en/node_config_example" },
        { type: "doc", id: "run-a-node/en/official_bootnodes" },
        {
          type: 'link',
          label: 'Run a Miner',
          href: 'https://forum.conflux.fun/t/conflux-tethys-gpu-mining-instruction-v1-1-3/3775'
        },
        {
          type: 'link',
          label: 'Archivenode snapshot',
          href: 'https://github.com/conflux-fans/archive-tool'
        },
        { type: 'doc', id: 'run-a-node/en/pos_staking' }
      ],
    },
    {
      type: "category",
      label: "Sending Transaction",
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "conflux-doc/docs/send_transaction",
        },
        {
          type: "doc",
          id: "sending-tx/en/transaction_explain",
        },
        {
          type: "doc",
          id: "sending-tx/en/transaction_stage",
        },
        {
          type: "doc",
          id: "sending-tx/en/why_tx_is_pending",
        },
        {
          type: "doc",
          label: "Common Errors",
          id: "sending-tx/en/transaction_send_common_error",
        },
        {
          type: "doc",
          label: 'FAQs',
          id: "sending-tx/en/transaction_faqs",
        },
      ],
    },
    {
      type: "category",
      label: "Smart Contract",
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "contract/en/contract_introduction",
        },
      ],
    },
    {
      type: "category",
      label: "SDKs and Tools",
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "sdks-and-tools/en/conflux_sdks",
        },
        {
          type: "doc",
          id: "sdks-and-tools/en/conflux_tools",
        },
        {
          type: "doc",
          id: "sdks-and-tools/en/using_ledger_on_core",
          label: 'Ledger Wallet'
        },
      ],
    },
    {
      type: 'link',
      label: 'Fluent Wallet Docs',
      href: 'https://fluent-wallet.zendesk.com/hc/en-001'
    },
    {
      type: 'link',
      label: 'Shuttleflow Docs',
      href: 'https://conflux-dev.github.io/conflux-dex-docs/shuttleflow/'
    },
    {
      type: 'link',
      label: 'Conflux-rust Changelog',
      href: 'https://github.com/Conflux-Chain/conflux-rust/blob/master/changelogs/CHANGELOG-1.1.x.md'
    }
  ],

  evmSpace: [
    { type: 'doc', id: 'conflux-doc/docs/EVM-Space/intro_of_evm_space' },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        { type: 'doc', id: 'conflux-doc/docs/EVM-Space/evm_space_networks' },
        { 
          type: 'doc', 
          id: 'v2-hardfork/evm_space_guide',
          label: 'eSpace Guide'
        },
      ]
    },
    {
      type: 'category',
      label: 'Tutorials',
      collapsed: false,
      items: [
        { 
          type: 'doc', 
          id: 'guides/en/user_metamask_interact_evmspace',
          label: 'MetaMask'
        }, {
          type: 'doc',
          id: 'guides/en/using_ledger_on_espace',
          label: 'Ledger Hardware Wallet'
        }, {
          type: 'doc', 
          id: 'conflux-doc/docs/EVM-Space/evm_space_faucet',
          label: 'Testnet Faucet'
        }
      ]
    },
    {
      type: 'category',
      label: 'Bridges',
      collapsed: false,
      items: [
        { 
          type: 'doc', 
          id: 'conflux-doc/docs/EVM-Space/account_explain',
          label: 'Address Explain'
        }
        , { 
          type: 'doc', 
          id: 'conflux-doc/docs/EVM-Space/cross_space_call',
          label: 'CrossSpaceCall'
        },
        { 
          type: "link", 
          label: "Space Bridge",
          href: "https://evm.fluentwallet.com/"
        },
      ]
    },
    {
      type: 'category',
      label: 'Compatibility',
      collapsed: false,
      items: [
        { 
          type: 'doc', 
          id: 'conflux-doc/docs/EVM-Space/evm_space_rpc_compatibility',
          label: 'JSON-RPC'
        },
        { 
          type: 'doc', 
          id: 'conflux-doc/docs/EVM-Space/evm_space_vm_compatibility',
          label: 'EVM'
        },
      ]
    },
    {
      type: 'category',
      label: 'Other',
      collapsed: false,
      items: [
        
      ]
    }
  ],

  api: [
    {
      type: "category",
      label: "JSON-RPCs",
      items: [
        { type: "doc", id: "conflux-doc/docs/json_rpc" },    
        { type: "doc", id: "conflux-doc/docs/RPCs/txpool_rpc" },
        { type: "doc", id: "conflux-doc/docs/RPCs/pos_rpc" },
        { type: "doc", id: "conflux-doc/docs/RPCs/debug_rpc" },
        { type: "doc", id: "conflux-doc/docs/RPCs/trace_rpc" },
        { type: "doc", id: "conflux-doc/docs/RPCs/common_rpc_error" },
        { type: "doc", id: "conflux-doc/docs/RPCs/send_tx_error" },
      ]
    },{
      type: "category",
      label: "Conflux OPEN-RPCs",
      items: [
        { 
          type: "link", 
          label: "cfx RPC",
          href: "https://playground.open-rpc.org/?uiSchema[appBar][ui:title]=Conflux%20RPC&uiSchema[appBar][ui:logoUrl]=https://avatars.githubusercontent.com/u/46887720&uiSchema[appBar][ui:examplesDropdown]=false&uiSchema[appBar][ui:splitView]=false&schemaUrl=https://raw.githubusercontent.com/darwintree/conflux-openrpc/main/static/conflux-openrpc.json"
        },
        { 
          type: "link", 
          label: "pos RPC",
          href: "https://playground.open-rpc.org/?uiSchema[appBar][ui:title]=Conflux%20RPC&uiSchema[appBar][ui:logoUrl]=https://avatars.githubusercontent.com/u/46887720&uiSchema[appBar][ui:examplesDropdown]=false&uiSchema[appBar][ui:splitView]=false&schemaUrl=https://raw.githubusercontent.com/darwintree/conflux-openrpc/main/static/pos-openrpc.json"
        }    
      ]
    },
    { type: "doc", id: "conflux-doc/docs/pubsub" },
    { type: "doc", id: "conflux-doc/docs/cli_sub_commands" },
    // { type: "doc", id: "apis/en/node_config_example" },
    {
      type: 'category',
      label: 'Internal Contracts API',
      items: [
        {
          type: 'link',
          label: 'AdminControl',
          href: 'https://github.com/conflux-fans/internal-contracts/blob/main/docs/AdminControl.md'
        },
        {
          type: 'link',
          label: 'SponsorWhitelistControl',
          href: 'https://github.com/conflux-fans/internal-contracts/blob/main/docs/SponsorWhitelistControl.md'
        },
        {
          type: 'link',
          label: 'Staking',
          href: 'https://github.com/conflux-fans/internal-contracts/blob/main/docs/Staking.md'
        },
      ]
    },
    {
      type: "doc",
      id: "introduction/en/conflux_refs",
    },
    {
      type: 'link',
      label: 'CIPs',
      href: 'https://github.com/conflux-chain/cips'
    }
  ],
};
