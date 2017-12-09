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
import './plugins/vue-moment';
import './plugins/vue-firebase';

/* ============
 * Main App
 * ============
 */

import App from './App'
import store from './store';
import firebase from 'firebase'

Vue.config.productionTip = false;

let app;
firebase.auth().onAuthStateChanged((user) => {
  store.dispatch('auth/check', user);

  if (!app) {
    app = new Vue({
      el: '#app',
      i18n,
      router,
      store,
      template: '<App/>',
      components: { App }
    })
  }
})
/* eslint-disable no-new */