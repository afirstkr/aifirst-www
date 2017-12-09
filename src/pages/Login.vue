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
              input.form-control(type='email', v-model='user.email', @keyup='onKeyup()', placeholder='Username', required='')
            .form-group
              input.form-control(type='password', v-model='user.password', @keyup='onKeyup()', placeholder='Password', required='')
            .error
              p {{error}}
            button.btn.btn-lg.btn-primary.full-width.m-b(type='submit') 로그인
            router-link(to='/forgot_password')
              small.underline Forgot password?
            p.text-muted.text-center
              small Do not have an account?
            router-link.btn.btn-sm.btn-white.btn-block(to="/signup") 회원가입

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
      error: null
    }
  }),
  methods: {
    login(user) {
      this.$store
        .dispatch('auth/login', user)
        .catch((err) => {
          this.error = err.message
        })
    },
    onKeyup() {
      this.error = null
    }
  }
}
</script>


<style scoped>
.error p {
  color: #DE372C;
}
.underline {
  text-decoration: underline;
}
</style>