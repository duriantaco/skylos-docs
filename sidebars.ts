const sidebars = {
  tutorialSidebar: [
    { 
      type: 'doc', 
      id: 'getting-started', 
      label: 'Getting Started', 
      className: 'sb-rocket' 
    },
    { 
      type: 'doc', 
      id: 'installation', 
      label: 'Installation', 
      className: 'sb-download' 
    },

    {
      type: 'category',
      label: 'Scanning',
      className: 'sb-gauge',
      collapsible: false,
      items: [
        { type: 'doc', id: 'dead-code-detection', label: 'Dead Code' },
        { type: 'doc', id: 'smart-tracing', label: 'Smart Tracing' },
        { type: 'doc', id: 'security-analysis', label: 'Security' },
        { type: 'doc', id: 'code-quality', label: 'Code Quality' },
      ],
    },

    {
      type: 'category',
      label: 'Concepts',
      className: 'sb-book',
      collapsible: false,
      items: [
        'concepts/static-analysis',
        'concepts/dead-code',
        'concepts/vibe-coding',
      ],
    },

    {
      type: 'category',
      label: 'Guides',
      className: 'sb-book-open',
      collapsible: false,
      items: [
        'guides/how-it-works',
        'guides/legacy-codebase',
      ],
    },

    {
      type: 'category',
      label: 'CI/CD',
      className: 'sb-dog',
      collapsible: false,
      items: [
        { type: 'doc', id: 'quality-gate', label: 'Quality Gate' },
        { type: 'doc', id: 'ci-cd', label: 'CI/CD Integration' },
      ],
    },

    { 
      type: 'doc', 
      id: 'ai-features', 
      label: 'AI Features', 
      className: 'sb-sparkles' 
    },

    {
      type: 'category',
      label: 'Reference',
      className: 'sb-shield',
      collapsible: false,
      items: [
        { type: 'doc', id: 'cli-reference', label: 'CLI Reference' },
        { type: 'doc', id: 'configuration', label: 'Configuration' },
        { type: 'doc', id: 'faq', label: 'FAQ' },
      ],
    },
  ],
};

export default sidebars;