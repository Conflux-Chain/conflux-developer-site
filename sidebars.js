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
            items: []
          }
        ]
      },
      {
        type: "category",
        label: "Try Conflux",
        items: [
          { type: "doc", folder: "introduction", id: "try_conflux_core" },
          {
            type: "doc",
            folder: "conflux-doc",
            id: "send_transaction"
          }
        ]
      },
      {
        type: "category",
        label: "Fullnode Interaction",
        items: [
          {
            type: "category",
            label: "Fullnode CLI",
            items: []
          }
        ]
      },
      {
        type: "category",
        label: "SDK",
        items: []
      },
      {
        type: "category",
        label: "Use Conflux In Browser With Portal",
        items: [
          { type: "doc", folder: "conflux-portal", id: "introduction" },
          { type: "doc", folder: "conflux-portal", id: "getting_started" },
          { type: "doc", folder: "conflux-portal", id: "accessing_accounts" },
          { type: "doc", folder: "conflux-portal", id: "sending_transactions" },
          { type: "doc", folder: "conflux-portal", id: "provider_api" },
          { type: "doc", folder: "conflux-portal", id: "signing_data_with_portal" },
        ]
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
    ]
  }
};
