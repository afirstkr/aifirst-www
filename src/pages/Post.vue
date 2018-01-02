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

      .wrapper.wrapper-content.animated.fadeInRight.article
        .row
          .col-lg-10.col-lg-offset-1.no-margin
            .ibox
              .ibox-content
                .pull-right
                  button.btn.btn-white.btn-xs(type='button' v-for="tag in tagList") {{tag}}
                .text-center.article-title
                  span.text-muted
                    i.fa.fa-clock-o
                    |  {{ transDate(post.createdAt) }}
                  h1
                    | {{post.title}}
                .ql-snow
                  .ql-editor
                    div(v-html="post.html")
                hr
                .row
                  .col-md-6
                    h5(v-if="tagList") Tags:
                    button.tag.btn.btn-primary.btn-xs(type='button' v-for="tag in tagList") {{tag}}
                  .col-md-6
                    .small.text-right
                      div
                        i.fa.fa-comments-o  
                        |  {{post.replies}} 댓글
                      i.fa.fa-eye  
                      |  {{post.views}} 조회수
        .row
          .col-lg-10.col-lg-offset-1.no-margin(v-if="shared.me")
            h2 댓글: ({{post.replies}})
          .col-lg-10.col-lg-offset-1.no-margin(v-if="!shared.me")
            router-link(to='/login').underline 로그인후 댓글작성 가능합니다. 

          .col-lg-10.col-lg-offset-1.no-margin.replay-editor(v-if="shared.me")
            form.m-t(role='form', @submit.prevent='replySubmit()')
              .input-group
                input.form-control(type='text', v-model='reply.html' )
                span.input-group-btn
                  button.btn.btn-primary(type='button' @click="replySubmit()")
                    | 입력 ↵ 
              
          .col-lg-10.col-lg-offset-1.no-margin
            .social-feed-box(v-for="reply in replyList" :key='reply.replyID')
              .social-avatar
                .media-body
                  a(href='#')
                    | {{reply.userName}}
                  small.text-muted {{ transDate(reply.updatedAt) }}
              .social-body
                p
                  | {{reply.html}}

</template>

<script lang='coffee'>
################################################
# coffee 
################################################

import Vue from 'vue'
import MainHeader from '@/components/MainHeader'
import shared from '@/shared'
import moment from 'moment-timezone'
import { VueEditor } from 'vue2-editor' 

export default
  name: 'Post'
  components: { MainHeader, VueEditor }
  data: () ->
    post: {}
    reply: {}
    meta: null
    channelID: this.$route.params.channelID
    postID: this.$route.params.postID
    shared: shared.state
    replyList: []
  computed:
    tagList: ->
      if this.post.tag then this.post.tag.split(',')
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
    transDate: (date) ->
      moment.tz(date, "Etc/GMT-9").format("YYYY.MM.DD HH:mm")
    onPaste: (e) ->
      log 'onPaste'
    replySubmit: () ->
      unless this.reply.html then return null

      this.reply.email    = this.shared.me.email
      this.reply.userName = this.shared.me.userName
      response = await shared.createReply(this.channelID, this.postID, this.reply) 

      this.reply.html = ''

      this.reload()

    reload: () ->
      this.channelID  = this.$route.params.channelID
      this.postID     = this.$route.params.postID
      response        = await shared.getPost(this.channelID, this.postID)
      this.post       = response.data.data
      
      
      # this.tagList = this.post.tag.split(',')

      this.meta         = { page: 1, size: 50 }

      query = {}
      query.page        = this.meta.page
      query.size        = this.meta.size
      
      response          = await shared.getReplyList(this.channelID, this.postID, query)
      this.meta         = response.data.meta
      this.replyList    = response.data.data
  mounted: () ->
    this.reload()



################################################
</script>


<style>

.underline {
  text-decoration: underline;
}

.replay-editor {
  margin-bottom: 10px;
}

#replyEditor.ql-container {
  height: 100px !important;
}

#replyEditor .ql-editor {
  height: 100px !important;
}

.reply .ql-toolbar {
  display: none;
}

button.tag {
  margin-right: 5px;
}


@media (max-width: 768px) {
  .article .ibox-content {
    padding: 5px;
  }

  .wrapper.wrapper-content.article {
    padding: 5px;
  }

  .article .no-margin {
    padding: 0px;
  }

  .article-title {
    margin-bottom: 30px;
  }
}

</style>