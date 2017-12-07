<template lang="pug">
  #wrapper
    #page-wrapper.gray-bg
      .middle-box.text-center.loginscreen.animated.fadeInDown
        div
          div
            router-link(to="/")
              h1.logo-name(style='font-size: 100px;') AI First
          form.m-t(role='form', @submit.prevent='login(user)')
            .form-group
              input.form-control(type='email', v-model='user.email', placeholder='Username', required='')
            .form-group
              input.form-control(type='password', v-model='user.password', placeholder='Password', required='')
            button.btn.btn-lg.btn-primary.full-width.m-b(type='submit') Login
            router-link(to='/forgot_password')
              small Forgot password?
            p.text-muted.text-center
              small Do not have an account?
            router-link.btn.btn-sm.btn-white.btn-block(to="/signup") Create an account

</template>

<script>

export default {
  name: 'Login',
  data: (() => {
    return {
      user: {
        email: null,
        password: null,
      },
    }
  }),
  methods: {
    login(user) {
      this.$store.dispatch('auth/login', user);
    },
  }
}
</script>


<style>
</style>