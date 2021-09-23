const path = require('@vuepress/utils').path;

module.exports = {
  title: 'vue-good-table-next',
  description: 'A powerful data table plugin for Vue 3.X',
  base: '/vue-good-table-next/',
  head: [
    ['link', { rel: 'icon', href: '/vue-good-table-next/favicon.png' }]
  ],
  
  plugins: [
    { clientAppEnhanceFiles: path.resolve(__dirname, './theme/enhanceApp.js') },
    [
      '@vuepress/plugin-register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
      },
    ],
    [
      '@vuepress/plugin-google-analytics',
      {
        id: 'G-0V4SMPYCC4',
      },
    ],
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
          },
        },
      },
    ],
  ],

  // theme: '@vuepress/default',
  theme: path.resolve(__dirname, './theme'),

  themeConfig: {
    repo: 'borisflesch/vue-good-table-next',
    logo: '/vgt-logo.png',
    lastUpdated: true,
    darkMode: false,
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
    ],
    sidebar: {  
      '/guide/': [
        {
          text: 'Introduction',
          children: [
            '/guide/',
          ]
        },
        {
          text: 'Configuration',
          children: [
            '/guide/configuration/',
            '/guide/configuration/table-events',
            '/guide/configuration/search-options',
            '/guide/configuration/sort-options',
            '/guide/configuration/pagination-options',
            '/guide/configuration/column-options',
            '/guide/configuration/column-filter-options',
          ]
        },
        {
          text: 'Advanced Configuration',
          children: [
            '/guide/advanced/',
            '/guide/advanced/checkbox-table',
            '/guide/advanced/grouped-table',
            '/guide/advanced/remote-workflow',
          ]
        },
        {
          text: 'Style Configuration',
          children: [
            '/guide/style-configuration/',
            '/guide/style-configuration/style-classes',
            '/guide/style-configuration/sass',
          ]
        },
      ],
    },
  }
}