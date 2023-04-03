/** @type {import('@docusaurus/types').DocusaurusConfig} */

const algolia = {
  appId: process.env.ALGOLIA_APP_ID,
  apiKey: process.env.ALGOLIA_SEARCH_API_KEY,
  indexName: process.env.ALGOLIA_INDEX_NAME,
}

const docusaurusConfig = {
  title: "Conflux",
  tagline: "Where Valuable Bits are Exchanged and Validated",
  url: "https://developer.confluxnetwork.org/",
  baseUrl: "/",
  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Conflux-Chain", // Usually your GitHub org/user name.
  projectName: "conflux-developer-site", // Usually your repo name.
  // presets: {
  //   docs: {
  //     lastVersion: 'current',
  //     versions: {
  //       current: {
  //         label: '1.0.0',
  //         banner: "unmaintained"
  //       },
  //     },
  //   }
  // },
    
  themeConfig: {
    announcementBar: {
      id: 'support_ukraine',
      content:
        'This document site is deprecated. Visit our latest site at <a href="https://doc.confluxnetwork.org">https://doc.confluxnetwork.org</a>',
      backgroundColor: '#20232a',
      textColor: '#fff',
      isCloseable: false,
    },
    navbar: {
      title: "Conflux Developer",
      logo: {
        alt: "Conflux Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "guides/en/guides_list",
          position: "left",
          label: "Guides",
        },
        {
          type: "doc",
          docId: "introduction/en/conflux_overview",
          position: "left",
          label: "Core",
        },
        {
          type: "doc",
          docId: "conflux-doc/docs/EVM-Space/intro_of_evm_space",
          position: "left",
          label: "eSpace",
        },
        {
          type: "doc",
          docId: "conflux-doc/docs/json_rpc",
          position: "left",
          label: "APIs",
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: "https://github.com/conflux-chain/conflux-rust",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Overview",
              to: "/",
            },
            {
              label: "Fluent Wallet",
              to: "https://fluentwallet.com/",
            },
            {
              label: "Conflux Scan",
              to: "https://confluxscan.io/",
            },
            {
              label: "Testnet Faucet",
              to: "https://faucet.confluxnetwork.org/",
            },
            {
              label: "Space Bridge",
              to: "https://evm.fluentwallet.com/",
            },
          ],
        },
        {
          title: "Tools",
          items: [
            {
              label: "Conflux studio",
              to: "https://www.obsidians.io/",
            },
            {
              label: "ChainIDE",
              to: "https://chainide.com/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Bounty",
              href: "https://bountyv2.confluxnetwork.org",
            },
            {
              label: "Forum",
              href: "https://forum.conflux.fun/",
            },
            {
              label: "Discord",
              href: "https://discord.com/invite/aCZkf2C",
            },
          ],
        },
        {
          title: "Social",
          items: [
            // {
            //   label: "Blog",
            //   to: "blog"
            // },
            {
              label: "GitHub",
              href: "https://github.com/Conflux-Chain",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/Conflux_Network",
            },
            {
              label: "Medium",
              href: "https://medium.com/@ConfluxNetwork",
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Conflux. All Rights Reserved.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
}

if (process.env.ALGOLIA_SEARCH_API_KEY) {
  docusaurusConfig.themeConfig.algolia = algolia
}

module.exports = docusaurusConfig
