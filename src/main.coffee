import Vue from 'vue'

###############
# Plugins
###############

import './plugins/vuex'
import './plugins/vue-axios'
import { i18n } from './plugins/vue-i18n'
import { router } from './plugins/vue-router'
import './plugins/vuex-router-sync'
import './plugins/vue-moment'
import './plugins/vue-firebase'

import './global'

###############
# Main App
###############

import App from './App'
import store from './store'
import shared from '@/shared'

Vue.config.productionTip = false

token = localStorage.getItem 'token'
init = ()->
  await shared.setMe()
  
  new Vue({ 
    el: '#app'
    i18n
    router
    store
    template: '<App/>'
    components: { App } 
  })

init()

# eslint-disable no-new
