export const themeData = {
  "repo": "borisflesch/vue-good-table-next",
  "logo": "/vgt-logo.png",
  "lastUpdated": true,
  "darkMode": false,
  "navbar": [
    {
      "text": "Home",
      "link": "/"
    },
    {
      "text": "Guide",
      "link": "/guide/"
    }
  ],
  "sidebar": {
    "/guide/": [
      {
        "title": "Introduction",
        "collapsable": false,
        "children": [
          ""
        ]
      },
      {
        "title": "Configuration",
        "collapsable": false,
        "children": [
          "/guide/configuration/",
          "/guide/configuration/table-events",
          "/guide/configuration/search-options",
          "/guide/configuration/sort-options",
          "/guide/configuration/pagination-options",
          "/guide/configuration/column-options",
          "/guide/configuration/column-filter-options"
        ]
      },
      {
        "title": "Advanced Configuration",
        "collapsable": false,
        "children": [
          "/guide/advanced/",
          "/guide/advanced/checkbox-table",
          "/guide/advanced/grouped-table",
          "/guide/advanced/remote-workflow"
        ]
      },
      {
        "title": "Style Configuration",
        "collapsable": false,
        "children": [
          "/guide/style-configuration/",
          "/guide/style-configuration/style-classes",
          "/guide/style-configuration/sass"
        ]
      }
    ]
  },
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
