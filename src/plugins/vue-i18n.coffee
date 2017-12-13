####################################
# https://kazupon.github.io/vue-i18n/
####################################

import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from '@/locale/index'

Vue.use(VueI18n)

export i18n = new VueI18n({
  locale: 'en'
  fallbackLocale: 'en'
  messages
})

export default i18n