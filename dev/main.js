// eslint-disable-next-line import/no-extraneous-dependencies
import Vue from 'vue';
import App from './App';
// import VueGoodTable from '../dist/vue-good-table.es';
import '../dist/vue-good-table.css';
import VueGoodTable from '../src';

Vue.use(VueGoodTable);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
});
