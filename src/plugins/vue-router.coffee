
# http://router.vuejs.org/en/index.html

import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/routes'
import shared from '@/shared'

import firebase from 'firebase'

Vue.use(VueRouter)

export router = new VueRouter { routes }

router.beforeEach (to, from, next) ->
  localStorage.setItem 'from.path', from.path
  if to.matched.some((m) -> m.meta.auth) and not shared.state.me
    next name: 'login'
  else if to.matched.some((m) -> m.meta.guest) and shared.state.me
    next name: 'main'
  else
    next()

Vue.router = router

export default router
