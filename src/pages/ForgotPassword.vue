<template lang="pug">
  #wrapper
    #page-wrapper.gray-bg
      .passwordBox.animated.fadeInDown
        .row
          .col-md-12
            .ibox-content
              h2.font-bold Forgot password
              p
                | Enter your email address and your password will be reset and emailed to you.
              .row
                .col-lg-12
                  form.m-t(role='form', action='/')
                    .form-group
                      input.form-control(type='email', placeholder='Email address', required='')
                    button.btn.btn-primary.block.full-width.m-b(type='submit') Send new password
        hr
        .row
          .col-md-6
            | Copyright KORAIA
          .col-md-6.text-right
            small © 2018 - 2020


</template>

<script>

export default {
  name: 'ForgotPassword',
  data: (() => {
    return {
      pageTitle: 'ForgotPassword'
    }
  })
}
</script>