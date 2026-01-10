import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Skylos',
  tagline: 'Static analysis for Python',
  favicon: 'img/favicon.svg',

  url: 'https://docs.skylos.dev',
  baseUrl: '/',

  organizationName: 'duriantaco',
  projectName: 'skylos',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    mermaid: true,
  },
  
  themes: [
    '@docusaurus/theme-mermaid',
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        searchBarPosition: 'right',
      },
    ],
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap',
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: 'https://github.com/duriantaco/skylos/tree/main/docs/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/skylos-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    
    mermaid: {
      theme: {
        light: 'default',
        dark: 'dark',
      },
      options: {
        look: 'handDrawn',
        theme: 'neutral',
      },
    },

    announcementBar: {
      id: 'announcement',
      content: '⭐ If you like Skylos, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/duriantaco/skylos">GitHub</a>',
      backgroundColor: '#4C1D95',
      textColor: '#ffffff',
      isCloseable: true,
    },

    navbar: {
      title: 'Skylos User Docs',
      logo: {
        alt: 'Skylos Logo',
        src: 'img/favicon.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'right',
          label: 'Docs',
        },
        {
          to: '/cli-reference',
          label: 'CLI',
          position: 'right',
        },
        {
          to: '/faq',
          label: 'FAQ',
          position: 'right',
        },
        
     
        {
          href: '#',
          label: 'Get Started Free',
          position: 'right',
          className: 'navbar-cta-button',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            { label: 'Getting Started', to: '/' },
            { label: 'Installation', to: '/installation' },
            { label: 'CLI Reference', to: '/cli-reference' },
            { label: 'Configuration', to: '/configuration' },
          ],
        },
        {
          title: 'Features',
          items: [
            { label: 'Dead Code Detection', to: '/dead-code-detection' },
            { label: 'Security Analysis', to: '/security-analysis' },
            { label: 'Code Quality', to: '/code-quality' },
            { label: 'AI Features', to: '/ai-features' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'GitHub', href: 'https://github.com/duriantaco/skylos' },
            { label: 'Issues', href: 'https://github.com/duriantaco/skylos/issues' },
            { label: 'Discussions', href: 'https://github.com/duriantaco/skylos/discussions' },
            { label: 'PyPI', href: 'https://pypi.org/project/skylos/' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Changelog', href: 'https://github.com/duriantaco/skylos/releases' },
            { label: 'Contributing', href: 'https://github.com/duriantaco/skylos/blob/main/CONTRIBUTING.md' },
            { label: 'License', href: 'https://github.com/duriantaco/skylos/blob/main/LICENSE' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Skylos. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'python', 'toml', 'yaml', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;