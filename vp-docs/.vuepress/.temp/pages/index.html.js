export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "heroImage": "/hero-image.png",
    "actions": [
      {
        "text": "Get Started →",
        "link": "/guide/"
      }
    ],
    "footer": "MIT Licensed | Copyright © 2021 Boris Flesch (based on xaksis' project)"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "README.md",
  "git": {
    "updatedTime": 1632392731000,
    "contributors": [
      {
        "name": "Akshay Anand",
        "email": "aks9800@gmail.com",
        "commits": 6
      },
      {
        "name": "Boris Flesch",
        "email": "boris.flesch@gmail.com",
        "commits": 1
      }
    ]
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
