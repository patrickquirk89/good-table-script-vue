export const data = {
  "key": "v-fffb8e28",
  "path": "/guide/",
  "title": "Getting Started",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Installation",
      "slug": "installation",
      "children": []
    },
    {
      "level": 2,
      "title": "Basic Example",
      "slug": "basic-example",
      "children": []
    },
    {
      "level": 2,
      "title": "Usage with Nuxt.js",
      "slug": "usage-with-nuxt-js",
      "children": []
    }
  ],
  "filePathRelative": "guide/README.md",
  "git": {
    "updatedTime": 1596938183000,
    "contributors": [
      {
        "name": "Akshay Anand",
        "email": "aks9800@gmail.com",
        "commits": 6
      },
      {
        "name": "Tom Hopcraft",
        "email": "CHEWX@users.noreply.github.com",
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
