import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("action-slot-table", defineAsyncComponent(() => import("/Users/boris/Documents/Micro-entreprise/Projets/vue-good-table-next/vp-docs/.vuepress/components/action-slot-table.vue"))),
  app.component("basic-table", defineAsyncComponent(() => import("/Users/boris/Documents/Micro-entreprise/Projets/vue-good-table-next/vp-docs/.vuepress/components/basic-table.vue"))),
  app.component("before-after-columns", defineAsyncComponent(() => import("/Users/boris/Documents/Micro-entreprise/Projets/vue-good-table-next/vp-docs/.vuepress/components/before-after-columns.vue"))),
  app.component("checkbox-table", defineAsyncComponent(() => import("/Users/boris/Documents/Micro-entreprise/Projets/vue-good-table-next/vp-docs/.vuepress/components/checkbox-table.vue"))),
  app.component("custom-row", defineAsyncComponent(() => import("/Users/boris/Documents/Micro-entreprise/Projets/vue-good-table-next/vp-docs/.vuepress/components/custom-row.vue"))),
  app.component("external-query", defineAsyncComponent(() => import("/Users/boris/Documents/Micro-entreprise/Projets/vue-good-table-next/vp-docs/.vuepress/components/external-query.vue"))),
  app.component("fixed-header", defineAsyncComponent(() => import("/Users/boris/Documents/Micro-entreprise/Projets/vue-good-table-next/vp-docs/.vuepress/components/fixed-header.vue"))),
  app.component("grouped-custom-span", defineAsyncComponent(() => import("/Users/boris/Documents/Micro-entreprise/Projets/vue-good-table-next/vp-docs/.vuepress/components/grouped-custom-span.vue"))),
  app.component("grouped-custom", defineAsyncComponent(() => import("/Users/boris/Documents/Micro-entreprise/Projets/vue-good-table-next/vp-docs/.vuepress/components/grouped-custom.vue"))),
  app.component("grouped-table", defineAsyncComponent(() => import("/Users/boris/Documents/Micro-entreprise/Projets/vue-good-table-next/vp-docs/.vuepress/components/grouped-table.vue"))),
  app.component("line-numbers-table", defineAsyncComponent(() => import("/Users/boris/Documents/Micro-entreprise/Projets/vue-good-table-next/vp-docs/.vuepress/components/line-numbers-table.vue"))),
  app.component("other-projects", defineAsyncComponent(() => import("/Users/boris/Documents/Micro-entreprise/Projets/vue-good-table-next/vp-docs/.vuepress/components/other-projects.vue"))),
  app.component("pagination-table", defineAsyncComponent(() => import("/Users/boris/Documents/Micro-entreprise/Projets/vue-good-table-next/vp-docs/.vuepress/components/pagination-table.vue"))),
  app.component("rtl-table", defineAsyncComponent(() => import("/Users/boris/Documents/Micro-entreprise/Projets/vue-good-table-next/vp-docs/.vuepress/components/rtl-table.vue"))),
  app.component("search-demo", defineAsyncComponent(() => import("/Users/boris/Documents/Micro-entreprise/Projets/vue-good-table-next/vp-docs/.vuepress/components/search-demo.vue"))),
  app.component("theme-example", defineAsyncComponent(() => import("/Users/boris/Documents/Micro-entreprise/Projets/vue-good-table-next/vp-docs/.vuepress/components/theme-example.vue")))
}
