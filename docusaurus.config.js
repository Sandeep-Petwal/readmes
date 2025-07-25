// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Learn with Sandeep',
  tagline: 'A living collection of everything I learn and document in tech.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://learn.sandeepprasad.xyz',
  baseUrl: '/',

  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Sandeep-Petwal', // Usually your GitHub org/user name.
  projectName: 'readmes', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

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
            'https://github.com/Sandeep-Petwal/readmes/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Sandeep-Petwal/readmes/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
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
        title: 'Learn with Sandeep',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'My notes',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://sandeepprasad.xyz/',
            label: 'Website',
            position: 'right',
          },
          {
            href: 'https://github.com/Sandeep-Petwal/readmes',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Frontend Technologies',
                to: '/docs/category/frontend-technologies',
              },
              {
                label: 'Backend Technologies',
                to: '/docs/category/backend-technologies',
              },
            ],
          },
          {
            title: 'Connect',
            items: [
              {
                label: 'Website',
                href: 'https://sandeepprasad.xyz/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Sandeep-Petwal/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'About',
                to: '/docs/intro',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Sandeep Prasad. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      metadata: [
        { name: 'keywords', content: 'Sandeep Prasad, learn, notes, web development, MERN stack, Git, Docker, Docusaurus, documentation, developer learning, second brain' },
        { name: 'author', content: 'Sandeep Prasad' },
        { name: 'robots', content: 'index, follow' },
      ],

      algolia: {
        appId: 'M3NYB9R6NK',
        apiKey: '0ca4557fdd41beccebcbfc4c31c217a0',
        indexName: 'learn-sandeepprasad',
        contextualSearch: true,
        insights: true,
        debug: false,
      },

    }),
};

export default config;
