// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Minecodes Docs',
  tagline: 'The documentation for all repositories of Minecodes',
  url: 'https://docs.minecodes.de',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Minecodes', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Minecodes/docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Minecodes',
        logo: {
          alt: 'Minecodes',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          /**{
            type: 'localeDropdown',
            position: 'right',
          },**/
          {
            href: 'https://github.com/Minecodes/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Pages',
            items: [
              {
                label: 'Docs',
                to: '/docs/intro',
              },
              {
                label: 'Old website',
                to: 'https://old.minecodes.de',
              },
              {
                label: 'Old Gitlab',
                to: 'https://minecodes13.gitlab.io/Minecodes/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Minecodes',
              }, {
                label: 'GitLab',
                href: 'https://gitlab.com/Minecodes13',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Youtube',
                href: 'https://youtube.com/Minecodes',
              },
              {
                label: 'Twitch',
                href: 'https://twitch.com/Minecodes',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/ngZaGzPnmq',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/minecodes_',
              },
              {
                label: 'Mastodon',
                href: 'https://mastodon.social/@minecodes',
              },
              {
                label: 'Reddit',
                href: 'https://reddit.com/r/minecodes',
              },
              {
                label: 'dev.to',
                href: 'https://dev.to/minecodes', 
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Docusaurus',
                href: 'https://docusaurus.io/',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Minecodes. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      metadata: [
        {
          name: 'keywords',
          content: 'Minecodes, Minecodes13, Mr.T .P, Mr.T.P, MrTP, MrTPYT, docs, documentation, git, github, gitlab'
        },
        {
          name: 'description',
          content: 'The documentation for all repositories of Minecodes'
        }
      ]
    }),
};

module.exports = config;
