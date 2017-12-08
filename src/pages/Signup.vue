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

<script>
import Firebase from 'firebase'

export default {
  name: 'Signup',
  data: (() => {
    return {
      user: {
        displayName: null,
        email: null,
        passwordConfirm: null,
        password: null,
      }
    }
  }),
  methods: {
    register: function (user) {
      console.log('register:user', user)
      this.$store.dispatch('auth/register', user)
    }
  }
}
</script>