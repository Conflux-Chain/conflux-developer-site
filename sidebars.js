module.exports = {
  docs: [
    {
      type: "category",
      label: "Learn About Conflux",
      items: [
        { type: "doc", id: "conflux_overview", folder: "introduction" },
        {
          type: "doc",
          folder: "introduction",
          id: "conflux_basics",
        },
        {
          type: "doc",
          folder: "conflux-rust",
          id: "internal_contract",
        },
        {
          type: "doc",
          folder: 'introduction',
          id: 'conflux_papers',
        },
        {
          type: "category",
          label: "Technical Papers",
          items: [],
        },
      ],
    },
    {
      type: "category",
      label: "Run Conflux Client",
      items: [
        { type: "doc", folder: "conflux-doc", id: "installation", label: "How to get" },
        { type: "doc", folder: "conflux-doc", id: "get_started", label: "Run mainnet/testnet node" },
        {
          type: "doc",
          folder: "conflux-doc",
          id: "independent_chain",
        },
        {
          type: "doc",
          folder: "conflux-doc",
          id: "light_node",
        },
      ],
    },
    {
      type: "category",
      label: "Sending Transaction",
      items: [
        {
          type: "doc",
          folder: "conflux-doc",
          id: "send_transaction",
        },
      ],
    },
    {
      type: "category",
      label: "SDKs and Tools",
      items: [
        {
          type: "doc",
          folder: "sdks-and-tools",
          id: "conflux_rpcs",
        },
        {
          type: "doc",
          folder: "sdks-and-tools",
          id: "conflux_sdks",
        },
        {
          type: "doc",
          folder: "sdks-and-tools",
          id: "conflux_tools",
        },
      ],
    },
    {
      type: "category",
      label: "APIs",
      items: [
        { type: "doc", folder: "conflux-doc", id: "json_rpc" },
        { type: "doc", folder: "conflux-doc", id: "pubsub" },
        { type: "doc", folder: "conflux-doc", id: "cli_sub_commands" },
        { type: "doc", folder: "apis", id: "node_config_example" },
        // { type: "doc", folder: "js-conflux-sdk", id: "javascript_sdk" },
        // { type: "doc", folder: "go-conflux-sdk", id: "go_sdk" },
      ],
    },
    {
      type: "category",
      label: "ConfluxPortal",
      items: [
        { type: "doc", folder: "conflux-portal", id: "introduction" },
        { type: "doc", folder: "conflux-portal", id: "getting_started" },
        { type: "doc", folder: "conflux-portal", id: "accessing_accounts" },
        { type: "doc", folder: "conflux-portal", id: "sending_transactions" },
        { type: "doc", folder: "conflux-portal", id: "provider_api" },
        {
          type: "doc",
          folder: "conflux-portal",
          id: "signing_data_with_portal",
        },
      ],
    },
    // {
    //   type: "category",
    //   label: "Changelogs",
    //   items: [
    //     {
    //       type: "doc",
    //       folder: "conflux-rust",
    //       id: "",
    //     },
    //   ],
    // },
  ],
};
