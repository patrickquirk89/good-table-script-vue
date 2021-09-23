const { path } = require('@vuepress/utils')

module.exports = {
  name: 'vuepress-theme-local',
  extends: '@vuepress/theme-default',
  layouts: {
    Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
  },
  alias: {
    // set alias for replaceable components
    '@theme/components/Banner.vue': path.resolve(__dirname, './components/Banner.vue'),
    '@theme/components/CarbonAds.vue': path.resolve(__dirname, './components/CarbonAds.vue'),
    '@theme/components/UserBitAd.vue': path.resolve(__dirname, './components/UserBitAd.vue'),
  },
}