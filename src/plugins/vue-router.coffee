
# http://router.vuejs.org/en/index.html

import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/routes'
import store from '@/store'

import firebase from 'firebase'

Vue.use(VueRouter)

export router = new VueRouter { routes }

router.beforeEach (to, from, next) ->
  if to.matched.some((m) -> m.meta.auth) and not store.state.auth.authenticated
    next name: 'login'
  else if to.matched.some((m) -> m.meta.guest) and store.state.auth.authenticated
    next name: 'main'
  else
    next()

Vue.router = router

export default router
