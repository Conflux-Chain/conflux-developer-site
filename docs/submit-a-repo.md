# How To Submit A Repo

- create a conflux-docs.json file under your docs folder
- add metadata to your markdown file
- add a ci config to trigger the build workflow of this repo

## The `conflux-docs.json` File

A `conflux-docs.json` like below one
```js
{
  "docs": {
    "en": {                            // language version
      "Learn About Conflux": [         // sidebar category name ❶ 
        "en/welcome.md",               // md file path relative to this json file
        "en/conflux_introduction.md",
        {
          "Concepts": [                // 2nd level sidebar category name ❷ 
            "en/treegraph.md",
          ]
        },
      ],
      "Try Conflux Core": [
        "en/fullnode-installation.md"  // md file path relative to this json file ❸
      ] 
    }
  }
}
```

Will generate the site like this.

<div class="HTML">
<p align="center"><img src="sidebar-demo.png" /></p>
</div>

## Add Metadata To Your Markdown File

❸'s title is defined in `en/fullnode-installation.md` like below.
```md
---
id: fullnode-installation
title: Installation
---
```

Other headers can be

```md
---
id: doc-markdown
title: Markdown Features
hide_title: false
hide_table_of_contents: false
sidebar_label: Markdown :)
custom_edit_url: https://github.com/facebook/docusaurus/edit/master/docs/api-doc-markdown.md
description: How do I find you when I cannot solve this problem
keywords:
  - docs
  - docusaurus
image: https://i.imgur.com/mErPwqL.png
---
```
The `id`, `title` and `custom_edit_url` is required.

The specs can be found
[here](https://v2.docusaurus.io/docs/markdown-features#markdown-headers
"docusaurus markdown-headers documentation").  

## Add A CI Config To Trigger The Build Workflow of This Repo

Create a PR for this repo, add your repo as a git submodule in [docs](./) folder
like the `conflux-portal` one. Add the submodule folder name to
[conflux-docs-index.json](../conflux-docs-index.json) file (order matters). 

I'll check your repo and submit a PR to add the CI config.

## Why It Works

The CI config in your repo will trigger the build workflow of this repo.

The workflow will pull your repo down, check if any doc files being updated in
the latest commits to your **master** branch depending on the
`conflux-docs.json` file, use docusaurus build the doc and update
developer.conflux-chain.org.