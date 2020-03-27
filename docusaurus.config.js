const { resolve } = require("path");

module.exports = {
  title: "Conflux",
  tagline: "Where Valuable Bits are Exchanged and Validated",
  url: "https://devdoctest.conflux-chain.org",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "Conflux-Chain", // Usually your GitHub org/user name.
  projectName: "conflux-developer-site", // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: false,
    navbar: {
      title: "Conflux Developer",
      logo: {
        alt: "Conflux Logo",
        src: "img/logo.svg"
      },
      links: [
        // {
        //   to: "docs/introduction/en/conflux_overview",
        //   label: "Docs",
        //   position: "left"
        // },
        // { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/Conflux-Chain/conflux-developer-site",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Overview",
              to: "docs/introduction/en/conflux_overview"
            },
            {
              label: "Portal",
              to: "docs/conflux-portal/docs/en/portal/introduction"
            }
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "Bounty",
              href: "https://bounty.conflux-chain.org"
            }
            // {
            //   label: "Discord",
            //   href: "https://discordapp.com/invite/docusaurus"
            // }
          ]
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
              href: "https://github.com/Conflux-Chain"
            },
            {
              label: "Twitter",
              href: "https://twitter.com/Conflux_Network"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Conflux Chain, Inc. Built with Docusaurus.`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "docs",
          routeBasePath: "docs",
          sidebarPath: resolve(__dirname, "sidebars.en.js"),
          editUrl:
            "https://github.com/Conflux-Chain/conflux-developer-site/edit/master",
          showLastUpdateTime: true,
          showLastUpdateAuthor: true
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
