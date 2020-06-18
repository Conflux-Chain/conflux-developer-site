module.exports = {
  docs: [
    {
      type: "category",
      label: "Learn About Conflux",
      items: [
        { type: "doc", id: "conflux_overview", folder: "introduction" },
        {
          type: "category",
          label: "Technical Papers",
          items: [],
        },
      ],
    },
    {
      type: "category",
      label: "Try Conflux",
      items: [
        { type: "doc", folder: "conflux-doc", id: "installation" },
        { type: "doc", folder: "conflux-doc", id: "get_started" },
        {
          type: "doc",
          folder: "conflux-doc",
          id: "send_transaction",
        },
        {
          type: "doc",
          folder: "conflux-doc",
          id: "independent_chain",
        },
        {
          type: "doc",
          folder: "conflux-rust",
          id: "internal_contract",
        },
      ],
    },
    {
      type: "category",
      label: "SDK",
      items: [
        { type: "doc", folder: "conflux-doc", id: "json_rpc" },
        { type: "doc", folder: "conflux-doc", id: "cli_sub_commands" },
        { type: "doc", folder: "js-conflux-sdk", id: "javascript_sdk" },
        { type: "doc", folder: "go-conflux-sdk", id: "go_sdk" },
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
  ],
};
