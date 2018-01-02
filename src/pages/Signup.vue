<template lang="pug">
  #wrapper
    #page-wrapper.gray-bg
      .middle-box.text-center.loginscreen.animated.fadeInDown
        div
          div
            router-link(to='/')
              h1.logo-name(style='font-size: 100px;') AI First
          form.m-t(role='form', @submit.prevent='register(user)', @keyup='onKeyup()')
            .form-group
              input.form-control(type='email', v-model='user.email', placeholder='Email', required='')
            .form-group
              .otp-pannel
                .btn.btn-sm.btn-outline.btn-warning.otp-button(@click='requestOtp(user.email)') 인증메일 요청
                input.otp-input(type='text', v-model='user.otp', placeholder='OTP No.', required='' @keyup='')
                p(v-if='isRequestOtp') 이메일주소로 인증번호가 전송되었습니다.
            .form-group
              input.form-control(type='text', v-model='user.userName', placeholder='Name', required='')
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
                  |  커뮤니티 정책동의 
            button.btn.btn-lg.btn-primary.block.full-width.m-b(type='submit') 회원가입
            p.text-muted.text-center
              small 기존 계정으로 로그인?
            router-link.btn.btn-sm.btn-white.btn-block(to='/login') 로그인 페이지로 이동

</template>

<script lang='coffee'>
################################################
# coffee 
################################################
import Vue from 'vue'
import Axios from 'axios'
import shared from '@/shared'

export default
  name: 'Signup'
  data: () ->
    user:
      email: 'unamedkr@gmail.com'
      userName: 'bruce'
      passwordConfirm: '111111'
      password: '111111',
      otp: null
    error: null
    isRequestOtp: null
  methods:
    requestOtp: (email) ->
      shared.sendOtpEmail(email)
      this.isRequestOtp = true
    register: (user) ->
      if user.password != user.passwordConfirm
        this.error = '비밀번호를 확인해 주세요.'
      try
        await shared.signup(user)
      catch error
        this.error = error.response.data.data
    onKeyup: () ->
      this.error = null
      this.isRequestOtp = null

################################################
</script>

<style scoped>

.otp-pannel p {

  font-size: 10px;
  color: #DE372C;
  height: 10px;
  margin-top: 8px;
  margin-left: 5px;
}
.otp-pannel {
  text-align: left;
  display: block;
}
.otp-button {
  height: 30px;
  width: 28%;
}
.otp-input {
  display: inline;
  float: right;
  height: 30px;
  width: 70%;

  background-color: #FFFFFF;
  background-image: none;
  border: 1px solid #e5e6e7;
  border-radius: 1px;
  color: inherit;
  display: block;
  padding: 6px 12px;
  transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
  font-size: 12px;
}

.error p {
  text-align: left;
  color: #DE372C;
  margin-left: 5px;
}
</style>