import Vue from 'vue'

/* ============
 * Plugins
 * ============
 */

 import './plugins/vuex';
import './plugins/axios';
import { i18n } from './plugins/vue-i18n';
import { router } from './plugins/vue-router';
import './plugins/vuex-router-sync';

/* ============
 * Main App
 * ============
 */

import App from './App'
import store from './store';

Vue.config.productionTip = false;


new Vue({
  el: '#app',
  i18n,
  router,
  store,
  template: '<App/>',
  components: { App }
})
