import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/Users/boris/Documents/Micro-entreprise/Projets/vue-good-table-next/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/Users/boris/Documents/Micro-entreprise/Projets/vue-good-table-next/vp-docs/.vuepress/theme/layouts/Layout.vue")),
}
