<template lang="pug">
  #wrapper
    #page-wrapper.gray-bg
      main-header
      .wrapper.wrapper-content
        .container
          .row
            .col-md-6
              top-five-posts(:board="freeBoard")
            .col-md-6
              top-five-posts(:board="issueBoard")
          .row
            .col-md-6
              top-five-posts(:board="tradeBoard")
            .col-md-6
              top-five-posts(:board="hrBoard")
          .row
            .col-md-6
              top-five-posts(:board="govBoard")
            .col-md-6
              top-five-posts(:board="rndBoard")
          .row
            .col-md-6
              top-five-posts(:board="forumBoard")
            .col-md-6
              top-five-posts(:board="academyBoard")

      .footer.footer-main
        .pull-right
          | {{contact}}
        div
          a(href='http://koraia.org', target='_blank', style='color:white;') © 2017 KORAIA All rights reserved.
      //- right-sidebar

      chat-panel

</template>


<script>

import Vue from 'vue'
import Login from '@/pages/Login'
import MainHeader from '@/components/MainHeader'
import RightSidebar from '@/components/RightSidebar'
import TopFivePosts from '@/components/TopFivePosts'
import ChatPanel from '@/components/ChatPanel'

export default {
  name: 'Main',
  components: {
    Login,
    MainHeader,
    RightSidebar,
    TopFivePosts,
    ChatPanel
  },
  data: () => {
    return {
      contact: '문의메일 - koraiaoffice@gmail.com',
      posts: [],
      freeBoard: {
        title: '자유게시판',
        posts: [
          {id: 0, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'},
          {id: 1, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'},
          {id: 2, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'},
          {id: 3, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'},
          {id: 4, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'}
        ]
      },
      issueBoard: {
        title: '이슈게시판',
        posts: [
          {id: 0, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'},
          {id: 1, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'},
          {id: 2, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'},
          {id: 3, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'},
          {id: 4, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'}
        ]
      },
      tradeBoard: {
        title: '팝니다 / 삽니다',
        posts: [
          {id: 0, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'},
          {id: 1, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'},
          {id: 2, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'},
          {id: 3, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'},
          {id: 4, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'}
        ]
      },
      hrBoard: {
        title: '구인구직 / 프로젝트',
        posts: [
          {id: 0, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'},
          {id: 1, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'},
          {id: 2, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'},
          {id: 3, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'},
          {id: 4, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'}
        ]
      },
      govBoard: {
        title: '정부사업공고',
        posts: [
          {id: 0, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'},
          {id: 1, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'},
          {id: 2, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'},
          {id: 3, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'},
          {id: 4, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'}
        ]
      },
      rndBoard: {
        title: 'R&D 사업제안',
        posts: [
          {id: 0, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'},
          {id: 1, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'},
          {id: 2, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'},
          {id: 3, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'},
          {id: 4, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'}
        ]
      },
      forumBoard: {
        title: '포럼',
        posts: [
          {id: 0, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'},
          {id: 1, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'},
          {id: 2, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'},
          {id: 3, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'},
          {id: 4, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'}
        ]
      },
      academyBoard: {
        title: '아카데미',
        posts: [
          {id: 0, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'},
          {id: 1, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'},
          {id: 2, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'},
          {id: 3, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)'},
          {id: 4, title: '부모님이 결혼전에 상대방이랑 같이 살아보라는데 (2)'}
        ]
      }
    }
  },
  methods: {
    getPosts: ()=> {
      console.log('getPosts')
    }
  },
  created() {
    
      
    // let data = {
    //   _from: 'MENU_01'
    // }
      
    // Vue.$http['get']('http://localhost:3000/channel/list/' + data._from)
    //   .then((response) => {
    //     this.posts = response.data.data
    //   })
    //   .catch((e) => {
    //     console.log('err', e)
    //   })
  }
}
</script>
<style scoped>

</style>

