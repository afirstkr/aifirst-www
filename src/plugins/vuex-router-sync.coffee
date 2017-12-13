# https://github.com/vuejs/vuex-router-sync

import VuexRouterSync from 'vuex-router-sync'
import store from '@/store'
import { router } from './vue-router'

VuexRouterSync.sync(store, router)
