<template lang="pug">
  #wrapper
    #page-wrapper.gray-bg
      .middle-box.text-center.loginscreen.animated.fadeInDown
        div
          div
            router-link(to="/")
              h1.logo-name(style='font-size: 100px;') AI First
          form.m-t(role='form', @submit.prevent='login(loginUser)', @keyup='onKeyup()')
            .form-group
              input.form-control(type='email', v-model='loginUser.email', placeholder='Username', required='')
            .form-group
              input.form-control(type='password', v-model='loginUser.password', placeholder='Password', required='')
            .error
              p {{error}}
            button.btn.btn-lg.btn-primary.full-width.m-b(type='submit') 로그인
            router-link(to='/forgot_password')
              small.underline Forgot password?
            p.text-muted.text-center
              small Do not have an account?
            router-link.btn.btn-sm.btn-white.btn-block(to="/signup") 회원가입
</template>

<script lang='coffee'>
################################################
# coffee 
################################################
import Vue from 'vue'
import Axios from 'axios'
import shared from '@/shared'

export default
  name: 'Login'
  data: () ->
    loginUser:
      email: 'unamedkr@gmail.com'
      password: '111111'
    error: null
    shared: shared.state
  methods:
    login: (loginUser) ->
      shared.login(loginUser, 'home')
    onKeyup: () ->
      this.error = null
  mounted: () ->
    localStorage.getItem 'from.path'


################################################
</script>


<style scoped>
.error p {
  color: #DE372C;
}
.underline {
  text-decoration: underline;
}
</style>