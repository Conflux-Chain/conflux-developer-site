module.exports = {
  docs: {
    en: {
      "Learn About Conflux": [     // sidebar category name ❶
        "en/introduction/welcome", // md file id <language>/<repo_name>/<markdown_id>
        "en/introduction/conflux_introduction",
        {
          Concepts: [              // 2nd level sidebar category name ❷
            "en/introduction/treegraph"
          ]
        }
      ],
      "Try Conflux Core": [
        "en/introduction/fullnode-installation" // md file id ❸
      ]
    }
  }
};
