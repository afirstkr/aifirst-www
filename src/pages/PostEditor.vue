<template lang="pug">
  #wrapper
    #page-wrapper.gray-bg
      main-header
      .row.wrapper.border-bottom.white-bg.page-heading
        .col-lg-12
          ol.breadcrumb(style='margin-top: 18px;')
            h1 강의자료
            li
              a(href='index.html') 아카데미
            li.active
              strong 강의자료

      .wrapper.wrapper-content
        .row
          .col-lg-offset-1.col-lg-10.editor
            .ibox.float-e-margins
              .ibox-title
                input.form-control(type='text', v-model='post.title' placeholder='제목을 넣어주세요.' style='border: 0px;')
              .ibox-content.no-padding
                <vue-editor id='editor' v-model='post.html' @imageAdded="handleImageAdded" useCustomImageHandler placeholder='Type...'></vue-editor>
        .row(style='margin-top: 20px;')
          .col-lg-offset-4.col-lg-2
            button.btn.btn-lg.btn-default.full-width.m-b(type='submit') 임시저장
          .col-lg-2
            button.btn.btn-lg.btn-primary.full-width.m-b(type='submit', @click='save(post)') 등록
</template>

<script lang='coffee'>
################################################
# coffee 
################################################

import Vue from 'vue'
import MainHeader from '@/components/MainHeader'
import store from '@/store'
import firebase from 'firebase'

# https://github.com/davidroyer/vue2-editor
import { VueEditor } from 'vue2-editor' 

export default
  name: 'PostEditor'
  components: { MainHeader, VueEditor }
  data: () ->
    account: if firebase.auth().currentUser then firebase.auth().currentUser else store.state.account
    channel: null
    post: 
      title: null
      html: null
    postRef: null
  methods:
    save: (post) ->
      return unless post.title
      return unless post.html  
      
      vm = this
      this.postRef.add({
          channel: this.channel,
          id: Date.now(),
          displayName: this.account.displayName,
          email: this.account.email,
          title: post.title,
          html: post.html,
          createdAt: Date.now()
        })
        .then () -> Vue.router.push {path: "/#{vm.channel}/posts"}
        .catch (err) -> console.error 'Error adding document: ', err
    handleImageAdded: (file, Editor, cursorLocation) ->
      formData = new FormData()
      formData.append('image', file)
  mounted: () ->
    this.channel = store.state.route.params.channel
    this.postRef = Vue.$db.collection("aifirst/#{this.channel}/posts")

################################################
</script>


<style>

.editor {
  background-color: white;
  border-radius: 5px;
}
.editor .ibox-title {
  border: 0px;
}

.ql-container.ql-snow {
  border: 0px !important;
}

.ql-toolbar.ql-snow {
  border: 0px !important;
  border-bottom: 1px solid #e7eaec !important;
}

.editor .form-control {
  padding: 24px 0px !important;
  font-size: 18px;
}

.ql-editor.ql-blank {
  padding: 14px;
}

</style>