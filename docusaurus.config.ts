import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Skylos — Dead Code Detection & SAST for Python, TypeScript, Go',
  tagline: 'Find dead code, security vulnerabilities, and quality issues. Framework-aware static analysis with 98% recall and 3x fewer false positives than Vulture.',
  favicon: 'img/favicon-96x96.png',

  url: 'https://docs.skylos.dev',
  baseUrl: '/',

  organizationName: 'duriantaco',
  projectName: 'skylos',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'keywords',
        content: 'dead code detection, python static analysis, SAST, unused code finder, security scanner, code quality, vulture alternative, django dead code, fastapi dead code, typescript dead code, MCP server',
      },
    },
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Skylos',
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Windows, macOS, Linux',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        description: 'Dead code detection and SAST tool for Python, TypeScript, and Go. Framework-aware analysis with AI-powered fixes.',
        url: 'https://github.com/duriantaco/skylos',
        downloadUrl: 'https://pypi.org/project/skylos/',
      }),
    },
  ],

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
        blog: {
          showReadingTime: true,
          blogTitle: 'Skylos Blog',
          blogDescription: 'Dead code detection, Python security, and developer tools insights.',
          blogSidebarCount: 5,
        },
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
          to: '/case-studies',
          label: 'Benchmarks',
          position: 'right',
        },
        {
          to: '/cli-reference',
          label: 'CLI',
          position: 'right',
        },
        {
          href: 'https://discord.gg/Ftn9t9tErf',
          label: 'Discord',
          position: 'right',
        },
        {
          href: 'https://github.com/duriantaco/skylos',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
        {
          to: '/installation',
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
            { label: 'Case Studies', to: '/case-studies' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'GitHub', href: 'https://github.com/duriantaco/skylos' },
            { label: 'Discord', href: 'https://discord.gg/Ftn9t9tErf' },
            { label: 'Issues', href: 'https://github.com/duriantaco/skylos/issues' },
            { label: 'Discussions', href: 'https://github.com/duriantaco/skylos/discussions' },
            { label: 'PyPI', href: 'https://pypi.org/project/skylos/' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'VS Code Extension', href: 'https://marketplace.visualstudio.com/items?itemName=oha.skylos-vscode-extension' },
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