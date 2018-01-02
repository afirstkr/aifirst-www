<template lang="pug">
  #wrapper
    #page-wrapper.gray-bg
      main-header
      .wrapper.wrapper-content
        .container
          .row
            .col-md-6
              top-five-posts(channelID='free', title='자유게시판')
            .col-md-6
              top-five-posts(channelID='study', title='스터디모임')
          .row
            .col-md-6
              top-five-posts(channelID='seminar', title='세미나')
            .col-md-6
              top-five-posts(channelID='recruit', title='구인')
          .row
            .col-md-6
              top-five-posts(channelID='project', title='프로젝트')
            .col-md-6
              top-five-posts(channelID='trend', title='인공지능 트랜드')
          .row
            .col-md-6
              top-five-posts(channelID='review', title='인공지능 리뷰')
            .col-md-6
              top-five-posts(channelID='expert', title='전문가')
      .footer.footer-main
        .pull-right
          | {{contact}}
        div
          a(href='http://koraia.org', target='_blank', style='color:white;') © 2017 KORAIA All rights reserved.
      //- right-sidebar

      chat-panel( channel='main' )

</template>


<script lang="coffee">
################################################
# coffee 
################################################

import Vue from 'vue'
import Axios from 'axios'
import shared from '@/shared'

import Login from '@/pages/Login'
import MainHeader from '@/components/MainHeader'
import RightSidebar from '@/components/RightSidebar'
import TopFivePosts from '@/components/TopFivePosts'
import TopDummyFivePosts from '@/components/TopDummyFivePosts'
import ChatPanel from '@/components/ChatPanel'

import store from '@/store'

obj =
  id: 11,
  name: 'bruce'

export default
  name: 'Home'
  components: { Login, MainHeader, RightSidebar, TopFivePosts, TopDummyFivePosts, ChatPanel }
  data: () ->
    shared: shared.state
    channel: store.state.route.path
    contact: '문의메일 - koraiaoffice@gmail.com'
    posts: []
    freeBoard:
      title: '자유게시판'
      posts: [
        {id: 0, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'}
        {id: 1, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'}
        {id: 2, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'}
        {id: 3, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'}
        {id: 4, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'}
      ]
    issueBoard:
      title: '이슈게시판'
      posts: [
        {id: 0, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'}
        {id: 1, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'}
        {id: 2, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'}
        {id: 3, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'}
        {id: 4, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'}
      ]
    tradeBoard:
      title: '팝니다 / 삽니다'
      posts: [
        {id: 0, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'}
        {id: 1, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'}
        {id: 2, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'}
        {id: 3, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'}
        {id: 4, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'}
      ]
    hrBoard:
      title: '구인구직 / 프로젝트'
      posts: [
        {id: 0, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'}
        {id: 1, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'}
        {id: 2, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'}
        {id: 3, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'}
        {id: 4, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'}
      ]
    govBoard:
      title: '정부사업공고'
      posts: [
        {id: 0, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'}
        {id: 1, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'}
        {id: 2, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'}
        {id: 3, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'}
        {id: 4, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'}
      ]
    rndBoard:
      title: 'R&D 사업제안'
      posts: [
        {id: 0, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'}
        {id: 1, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'}
        {id: 2, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'}
        {id: 3, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'}
        {id: 4, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'}
      ]
    forumBoard:
      title: '포럼'
      posts: [
        {id: 0, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'}
        {id: 1, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'}
        {id: 2, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'}
        {id: 3, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'}
        {id: 4, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'}
      ]
    academyBoard:
      title: '아카데미'
      posts: [
        {id: 0, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'}
        {id: 1, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'}
        {id: 2, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'}
        {id: 3, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'}
        {id: 4, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'}
      ]
  methods:
    getPosts: () ->
      console.log('getPosts')

  mounted: () ->
    
    
################################################
</script>
<style scoped>

</style>

