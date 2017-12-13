<template lang="pug">
  #wrapper
    #page-wrapper.gray-bg
      main-header
      .row.wrapper.border-bottom.white-bg.page-heading
        .col-lg-12
          ol.breadcrumb(style='margin-top: 18px;')
            h1 {{channel}}
            li
              router-link(to='/') 게시판
            li.active
              strong {{channel}}

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
                        th 조회수
                        th 추천수
                    tbody
                      tr( v-for="post in postList" :key="post.id")
                        td
                          span {{post.id}}
                        td
                          a(href='#') 
                            | {{post.title}}
                        td
                          | {{post.displayName}}
                        td
                          | <span>{{post.createdAt}}</span>
                        td
                          span 100
                        td
                          span 100
    
    chat-panel( :channel="channel")

</template>

<script lang='coffee'>
################################################
# coffee 
################################################

import Vue from 'vue'
import MainHeader from '@/components/MainHeader'
import ChatPanel from '@/components/ChatPanel'
import store from '@/store'
import firebase from 'firebase'

import 'vue-moment'

unsubscribe = null
export default
  name: 'PostList'
  components: { MainHeader, ChatPanel }
  data: () ->
    channel: store.state.route.params.channel
    postRef: null
    postList: []
  watch:
    "$route": (to, from) ->
      vm = this
      this.channel = store.state.route.params.channel
      this.postRef = Vue.$db.collection("aifirst/#{this.channel}/posts")
      
      if(unsubscribe)
        unsubscribe()
        unsubscribe = null
      
      unsubscribe = this.postRef
        .orderBy('createdAt').limit(50)
        .onSnapshot (querySnapshot) ->
          vm.postList = []
          querySnapshot.forEach (doc) ->
            vm.postList.unshift doc.data()
  
  mounted: () ->
    vm = this
    this.postRef = Vue.$db.collection("aifirst/#{this.channel}/posts")

    if(unsubscribe)
      unsubscribe()
      unsubscribe = null

    unsubscribe = this.postRef
      .orderBy('createdAt').limit(50)
      .onSnapshot (querySnapshot) ->
        vm.postList = []
        querySnapshot.forEach (doc) ->
          vm.postList.unshift doc.data()

################################################
</script>


<style>

.table-post-list td, .table-post-list th{
  padding: 12px !important;
}
</style>