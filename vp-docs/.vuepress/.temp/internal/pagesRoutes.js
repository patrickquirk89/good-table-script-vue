import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","",["/index.html","/README.md"]],
  ["v-fffb8e28","/guide/","Getting Started",["/guide/index.html","/guide/README.md"]],
  ["v-7676ace1","/guide/advanced/","Customizations",["/guide/advanced/index.html","/guide/advanced/README.md"]],
  ["v-3925db94","/guide/advanced/checkbox-table.html","Checkbox Table",["/guide/advanced/checkbox-table","/guide/advanced/checkbox-table.md"]],
  ["v-41a19b8a","/guide/advanced/grouped-table.html","Grouped Table",["/guide/advanced/grouped-table","/guide/advanced/grouped-table.md"]],
  ["v-0be65194","/guide/advanced/remote-workflow.html","Server Side Table",["/guide/advanced/remote-workflow","/guide/advanced/remote-workflow.md"]],
  ["v-1d4155e5","/guide/configuration/","Table Options",["/guide/configuration/index.html","/guide/configuration/README.md"]],
  ["v-444d75de","/guide/configuration/column-filter-options.html","Column Filter Options",["/guide/configuration/column-filter-options","/guide/configuration/column-filter-options.md"]],
  ["v-6d812fe6","/guide/configuration/column-options.html","Column Options",["/guide/configuration/column-options","/guide/configuration/column-options.md"]],
  ["v-61739cc9","/guide/configuration/pagination-options.html","Pagination Options",["/guide/configuration/pagination-options","/guide/configuration/pagination-options.md"]],
  ["v-0c6baafb","/guide/configuration/search-options.html","Search Options",["/guide/configuration/search-options","/guide/configuration/search-options.md"]],
  ["v-0f317d85","/guide/configuration/sort-options.html","Sort Options",["/guide/configuration/sort-options","/guide/configuration/sort-options.md"]],
  ["v-d56a7ec8","/guide/configuration/table-events.html","Table Events",["/guide/configuration/table-events","/guide/configuration/table-events.md"]],
  ["v-6a970c81","/guide/style-configuration/","Themes",["/guide/style-configuration/index.html","/guide/style-configuration/README.md"]],
  ["v-c9e8fdec","/guide/style-configuration/sass.html","Sass",["/guide/style-configuration/sass","/guide/style-configuration/sass.md"]],
  ["v-3cf1e560","/guide/style-configuration/style-classes.html","Style Classes",["/guide/style-configuration/style-classes","/guide/style-configuration/style-classes.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
