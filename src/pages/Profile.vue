<template lang="pug">
  #wrapper
    #page-wrapper.gray-bg
      main-header
      .row.wrapper.border-bottom.white-bg.page-heading
        .col-lg-12
          ol.breadcrumb(style='margin-top: 18px;')
            h1 프로필
            li
              router-link(to='/') 프로필
            li.active
              strong {{account.displayName || account.email}}

      .wrapper.wrapper-content.animated.fadeInRight
        .row.animated.fadeInRight

          .col-md-3
            .ibox.float-e-margins
              .ibox-title
                h5 프로필 상세
              div
                .ibox-content.no-padding.border-left-right
                  img.img-responsive(alt='image', src='static/img/profile_big.jpg')
                .ibox-content.profile-content
                  h4
                    strong 브루스리 / (1,000p)
                  p
                    i.fa.fa-map-marker
                    |  서울시 성북구 돈암동
                  p
                    | 인공지능 최고 전문가. 
                    | Javascript, Python, Node, 아무거나 다 잘함.
                  
                  .user-button
                    .row
                      .col-md-6
                        button.btn.btn-primary.btn-sm.btn-block(type='button')
                          i.fa.fa-envelope
                          |  메시지
                      .col-md-6
                        button.btn.btn-default.btn-sm.btn-block(type='button')
                          i.fa.fa-coffee
                          |  미팅요청
          .col-md-7
            .ibox.float-e-margins
              .ibox-title
                h5 활동목록
              .ibox-content
                div
                  .feed-activity-list
                    .feed-element
                      a.pull-left(href='#')
                        img.img-circle(alt='image', src='static/img/bruce.jpg')
                      .media-body
                        small.pull-right.text-navy 1m ago
                        strong 브루스리
                        |  게시글을 작성하였습니다.
                        br
                        small.text-muted Today 5:60 pm - 12.06.2014
                    .feed-element
                      a.pull-left(href='#')
                        img.img-circle(alt='image', src='static/img/profile.jpg')
                      .media-body
                        small.pull-right 5m ago
                        strong 청심이
                        |  댓글을 작성하였습니다. 
                        br
                        small.text-muted Today 5:60 pm - 12.06.2014
                  button.btn.btn-primary.btn-block.m
                    i.fa.fa-arrow-down
                    |  Show More



</template>

<script lang='coffee'>
################################################
# coffee 
################################################

import MainHeader from '@/components/MainHeader'
import firebase from 'firebase'
import store from '@/store'

export default
  name: 'Profile'
  components: { MainHeader }
  data: () ->
    account: if firebase.auth().currentUser then firebase.auth().currentUser else store.state.account
    title: 'Profile'

################################################
</script>


<style>
.feed-activity-list .media-body {
  line-height: 2;
}

</style>