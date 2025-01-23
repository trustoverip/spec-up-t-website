// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Spec-Up-T',
  tagline: 'A tool for writing specifications',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://blockchainbird.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/spec-up-t-website',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Blockchainbird', // Usually your GitHub org/user name.
  projectName: 'Spec-Up-T', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/blockchainbird/spec-up-t-website/tree/main/',
        },
        // blog: {
        //   showReadingTime: true,
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Home',
        logo: {
          alt: 'Spec-Up-T Logo',
          src: 'img/logo.svg',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Admin section',
          // },
          { to: '/docs/introduction/overview/', label: 'Enter Documentation', position: 'left' },
          { to: '/docs/spec-up-t-demo-site', label: 'Demo', position: 'left' },
          { to: '/docs/getting-started/github-token', label: 'GitHub token', position: 'left' },
          // { to: '/docs/admins-guide', label: 'Admin section', position: 'left' },
          {
            href: 'https://github.com/blockchainbird/spec-up-t-website',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/blockchainbird/spec-up-t-website',
              },
            ],
          },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} Spec-Up-T.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      mermaid: {
        theme: { light: 'neutral', dark: 'forest' },
      }
    }),
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),// https://github.com/easyops-cn/docusaurus-search-local
      {
        // options here
        hashed: true,
        highlightSearchTermsOnTargetPage: true
      },
    ],
  ],
};

export default config;
