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

import Firebase from 'firebase'

let app
let config = {
  apiKey: 'AIzaSyCTu_hsnRd0jm7cTRlMbZD5rYK7KQgDAII',
  authDomain: 'aifirst-8c56c.firebaseapp.com',
  databaseURL: 'https://aifirst-8c56c.firebaseio.com',
  projectId: 'aifirst-8c56c',
  storageBucket: '',
  messagingSenderId: '1019177554448'
}

Firebase.initializeApp(config)
Firebase.auth().onAuthStateChanged((user) => {
  store.dispatch('auth/check');
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