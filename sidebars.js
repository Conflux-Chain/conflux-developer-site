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
            folder: "introduction",
            id: "make_your_first_transaction"
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
        label: "Conflux Portal",
        items: [{ type: "doc", folder: "conflux-portal", id: "quick_start" }]
      }
    ]
  }
};
