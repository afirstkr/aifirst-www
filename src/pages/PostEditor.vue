<template lang="pug">
  #wrapper
    #page-wrapper.gray-bg
      main-header
      .row.wrapper.border-bottom.white-bg.page-heading
        .col-lg-12
          ol.breadcrumb(style='margin-top: 18px;')
            h1
              router-link(:to="{ name: 'postList', params: { channelID: channelID } }") {{channelName}}
            li
              router-link(:to="{ name: 'postList', params: { channelID: channelID } }") 게시판
            li.active
              strong {{channelID}}

      .wrapper.wrapper-content
        .row
          .col-lg-offset-1.col-lg-10.editor
            .ibox.float-e-margins
              .ibox-title
                input.form-control(type='text', v-model='post.title' placeholder='제목을 넣어주세요.' style='border: 0px;')
              .ibox-content.no-padding(@paste="onPaste")
                <vue-editor id='editor' v-model='post.html' @imageAdded="handleImageAdded" useCustomImageHandler placeholder='Type...' />
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
import shared from '@/shared'
import Axios from 'axios'

# https://github.com/davidroyer/vue2-editor
import { VueEditor } from 'vue2-editor' 

export default
  name: 'PostEditor'
  components: { MainHeader, VueEditor }
  data: () ->
    channelID: this.$route.params.channelID
    post: 
      title: null
      html: null
    shared: shared.state
  computed:
    channelName: ->
      switch this.channelID
        when 'free'     then '자유게시판'
        when 'parents'  then '학부모 게시판'
        when 'workers'  then '직장인 게시판'
        when 'college'  then '대학생 게시판'
        when 'students' then '초중고 게시판'
        when 'study'    then '스터디 게시판'
        when 'lab'      then '온라인연구소'
        when 'academy'  then '학회&컨퍼런스'
        when 'expo'     then '엑스포'
        when 'seminar'  then '세미나'
        when 'recruit'  then '구인 게시판'
        when 'job'      then '구직 게시판'
        when 'project'  then '프로젝트'
        when 'trend'    then '인공지능 트랜드'
        when 'review'   then '인공지능 리뷰'
        when 'expert'   then '전문가'
        when 'company'  then '회사'
        else '게시판'
  methods:
    save: (post) ->
      return unless post.title
      return unless post.html  

      post.email      = this.shared.me.email
      post.userName   = this.shared.me.userName

      to = "/#{this.channelID}/posts"
      shared.createPost(this.channelID, post, to)

    handleImageAdded: (file, Editor, cursorLocation) ->
      formData = new FormData()
      formData.append('image', file)
      response = await Axios.post "/image", formData
      url = response.data.data[0].url
      Editor.insertEmbed(cursorLocation, 'image', url);
    onPaste: (e) ->
      clipboardData = e.clipboardData || window.clipboardData
      pastedData = clipboardData.getData 'Text'
      log 'pastedData: ', regUrlType(pastedData)
  mounted: () ->
    this.channelID       = this.$route.params.channelID
    


regUrlType = (data) ->
	regex = /(((http(s)?:\/\/)\S+(\.[^(\n|\t|\s,)]+)+)|((http(s)?:\/\/)?(([a-zA-z\-_]+[0-9]*)|([0-9]*[a-zA-z\-_]+)){2,}(\.[^(\n|\t|\s,)]+)+))+/gi
	data.match(regex)
  
  

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