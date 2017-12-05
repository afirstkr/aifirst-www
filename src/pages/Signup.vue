<template lang="pug">
  #wrapper
    #page-wrapper.gray-bg
      .middle-box.text-center.loginscreen.animated.fadeInDown
        div
          div
            router-link(to='/')
              h1.logo-name(style='font-size: 100px;') AI First
          form.m-t(role='form', action='login.html')
            .form-group
              input.form-control(type='text', placeholder='Name', required='')
            .form-group
              input.form-control(type='email', placeholder='Email', required='')
            .form-group
              input.form-control(type='password', placeholder='Password', required='')
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

export default {
  name: 'Signup',
  data: (() => {
    return {
      pageTitle: 'Signup'
    }
  })
}
</script>