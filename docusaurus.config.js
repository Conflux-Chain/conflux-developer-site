/** @type {import('@docusaurus/types').DocusaurusConfig} */

const algolia = {
  apiKey: process.env.ALGOLIA_SEARCH_API_KEY,
  indexName: process.env.ALGOLIA_INDEX_NAME,
}

const docusaurusConfig = {
  title: 'Conflux',
  tagline: 'Where Valuable Bits are Exchanged and Validated',
  url: 'https://developer.conflux-chain.org',
  baseUrl: '/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Conflux-Chain', // Usually your GitHub org/user name.
  projectName: 'conflux-developer-site', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Conflux Developer',
      logo: {
        alt: 'Conflux Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'guides/en/how_to_use_cfx_faucet',
          position: 'left',
          label: 'Guides',
        },
        {
          type: 'doc',
          docId: 'introduction/en/conflux_overview',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'doc',
          docId: 'conflux-doc/docs/json_rpc',
          position: 'left',
          label: 'APIs',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/conflux-chain/conflux-rust',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: "Overview",
              to: "docs/introduction/en/conflux_overview"
            },
            {
              label: "Portal",
              to: "https://conflux-portal-docs.conflux-chain.org/docs/portal/introduction/",
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: "Bounty",
              href: "https://bounty.conflux-chain.org",
            },
            {
              label: "Forum",
              href: "https://forum.conflux.fun/"
            }
          ],
        },
        {
          title: 'Social',
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
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Conflux. All Rights Reserved.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

if (process.env.ALGOLIA_SEARCH_API_KEY) {
  docusaurusConfig.themeConfig.algolia = algolia
}

module.exports = docusaurusConfig;