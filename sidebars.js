module.exports = {
  docs: {
    en: [
      {
        type: "category",
        label: "Confnlux Overview",
        items: [
          { type: "doc", id: "what_is_conflux", folder: "introduction" },
          { type: "doc", id: "core_concepts", folder: "introduction" },
          {
            type: "category",
            label: "Concepts",
            items: [{ type: "doc", id: "treegraph", folder: "introduction" }]
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
        label: "Try Conflux Portal",
        items: [{ type: "doc", folder: "conflux-portal", id: "quick_start" }]
      }
    ]
  }
};
