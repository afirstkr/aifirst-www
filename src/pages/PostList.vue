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

      .wrapper.wrapper-content.animated.fadeInRight
        .row
          .col-lg-10
            .ibox
              .ibox-title
                .ibox-tools
                  router-link.btn.btn-primary(to="post/edit") 게시글 작성
              .ibox-content
                .table-responsive
                  table.table.table-hover
                    thead
                      tr
                        th #
                        th 제목
                        th 작성자
                        th 시간
                        th 댓글수
                        th 조회수
                    tbody
                      tr( v-for="post in postList" :key="post.id")
                        td
                          span {{post.postID}}
                        td(width='60%')
                          router-link(:to="{ name: 'post', params: { channelID: channelID, postID: post.postID }}").link-panel
                            | {{post.title}}
                        td
                          | {{post.userName}}
                        td
                          //- | <span>{{post.createdAt | moment('timezone', 'Asia/Tokyo', 'from')}}</span>
                          | <span>{{transDate(post.createdAt)}}</span>
                        td
                          span {{post.replies}}
                        td
                          span {{post.views}}
                  .dataTables_paginate.paging_simple_numbers
                    ul.pagination
                      li.paginate_button.previous(:class="{disabled: !isPrevBtnActive}" @click="getListByPage(meta.page - 1)")
                        a Previous
                      li.paginate_button(v-for="idx in meta.pages", :class="{active: idx==meta.page}" @click="getListByPage(idx)")
                        a {{idx}}
                      li.paginate_button.next(:class="{disabled: !isNextBtnActive}" @click="getListByPage(meta.page + 1)")
                        a Next

    
    chat-panel( :channel="channelID")

</template>

<script lang='coffee'>
################################################
# coffee 
################################################

import Vue from 'vue'
import MainHeader from '@/components/MainHeader'
import ChatPanel from '@/components/ChatPanel'
import shared from '@/shared'
import moment from 'moment-timezone'

export default
  name: 'PostList'
  components: { MainHeader, ChatPanel }
  data: () ->
    channelID: this.$route.params.channelID
    meta: 
      offset: 0
      page: 0
      pages: 0
      size: 0
      total: 0
    postList: []
    shared: shared.state
  computed:
    isPrevBtnActive: ->
      this.meta.page > 1
    isNextBtnActive: ->
      this.meta.page < this.meta.pages
    channelName: ->
      switch this.channelID
        when 'free' then '자유게시판'
        when 'moim' then '소모임'
        when 'issue' then '이슈토론방'
        when 'paper' then '논문자료실'
        else '게시판'

  watch:
    "$route": (to, from) ->
      this.channelID    = this.$route.params.channelID
      this.meta         = { page: 1, size: 10 }
      
      query = {}
      query.preset      = 'DEFAULT'
      query.page        = this.meta.page
      query.size        = this.meta.size
      
      response          = await shared.getPostList(this.channelID, query)
      this.meta         = response.data.meta
      this.postList     = response.data.data
  methods:
    transDate: (date) ->
      moment.tz(date, "Etc/GMT-9").format("HH:mm")
    getListByPage: (page) ->
      if page < 1 or page > this.meta.pages then return null

      this.meta.page    = page
      
      query = {}
      query.preset      = 'DEFAULT'
      query.page        = this.meta.page
      query.size        = this.meta.size
      
      response          = await shared.getPostList(this.channelID, query)
      this.meta         = response.data.meta
      this.postList     = response.data.data

  mounted: () ->
    this.channelID    = this.$route.params.channelID
    this.meta         = { page: 1, size: 10 }

    query = {}
    query.preset      = 'DEFAULT'
    query.page        = this.meta.page
    query.size        = this.meta.size
    
    response          = await shared.getPostList(this.channelID, query)
    this.meta         = response.data.meta
    this.postList     = response.data.data
    
################################################
</script>


<style>

.link-panel {
  display:block;
  width: 100%;
}
.table-post-list td, .table-post-list th{
  padding: 12px !important;
}
</style>