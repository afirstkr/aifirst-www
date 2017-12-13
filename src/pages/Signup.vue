<template lang="pug">
  #wrapper
    #page-wrapper.gray-bg
      .middle-box.text-center.loginscreen.animated.fadeInDown
        div
          div
            router-link(to='/')
              h1.logo-name(style='font-size: 100px;') AI First
          form.m-t(role='form', @submit.prevent='register(user)')
            .form-group
              input.form-control(type='text', v-model='user.displayName', placeholder='Name', required='')
            .form-group
              input.form-control(type='email', v-model='user.email', placeholder='Email', required='')
            .form-group
              input.form-control(type='password', v-model='user.password',placeholder='Password', required='')
            .form-group
              input.form-control(type='password', v-model='user.passwordConfirm',placeholder='Password Confirm.', required='')
            .error
              p {{error}}
            .form-group
              .checkbox.i-checks
                label
                  input(type='checkbox')
                  i
                  |  Agree the terms and policy
            button.btn.btn-lg.btn-primary.block.full-width.m-b(type='submit') Register
            p.text-muted.text-center
              small Already have an account?
            router-link.btn.btn-sm.btn-white.btn-block(to='/login') Login

</template>

<script lang='coffee'>
################################################
# coffee 
################################################

import Firebase from 'firebase'

export default
  name: 'Signup'
  data: () ->
    user:
      displayName: null
      email: null
      passwordConfirm: null
      password: null
    error: null
  methods:
    register: (user) ->
      if user.password != user.passwordConfirm
        this.error = '비밀번호를 확인해 주세요.'

      this.$store
        .dispatch 'auth/register', user
        .catch (err) ->
          this.error = err.message
    onKeyup: () ->
      this.error = null

################################################
</script>

<style scoped>
.error p {
  color: #DE372C;
}
</style>