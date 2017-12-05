import Vue from 'vue'
import App from './App'
import router from './router'
import VueMoment from 'vue-moment'
import './plugins/axios'

Vue.config.productionTip = false

Vue.use(VueMoment)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
