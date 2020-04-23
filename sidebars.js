module.exports = {
  docs: {
    en: [
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
        ],
      },
      {
        type: "category",
        label: "SDK",
        items: [
          { type: "doc", folder: "placeholder", id: "json_rpc" },
          { type: "doc", folder: "placeholder", id: "cli_sub_commands" },
          { type: "doc", folder: "placeholder", id: "javascript_sdk" },
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
      //   label: "Conflux DEX SDK",
      //   items: [
      //     { type: "doc", folder: "conflux-dex-sdk", id: "boomflow_backend_sdk" },
      //     { type: "doc", folder: "conflux-dex-sdk", id: "shuttleflow_backend_sdk" },
      //     { type: "doc", folder: "conflux-dex", id: "matchflow" },
      //   ]
      // }
    ],
  },
};
