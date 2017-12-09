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

      .wrapper.wrapper-content.animated.fadeInRight
        .row
          .col-lg-10
            .ibox
              .ibox-title
                .ibox-tools
                  router-link(to='/post/edit') 
                    a.btn.btn-primary(href='') 게시글 작성
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
                      tr
                        td
                          span 1100
                        td
                          a(href='#') 
                            | 부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)
                        td
                          | 이강훈
                        td
                          | <span>Sun, 10AM</span>
                        td
                          span 100
                        td
                          span 100
                      tr
                        td
                          span 1122
                        td
                          a(href='#')
                            | 부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)
                        td
                          | 이강훈
                        td
                          | <span>Sun, 10AM</span>
                        td
                          span 100
                        td
                          span 100
                      tr
                        td
                          span 1123
                        td
                          a(href='#')
                            | 부모님이 결혼전에 상대방이랑 같이 살아보라는데 (1)
                        td
                          | 이강훈
                        td
                          | <span>Sun, 10AM</span>
                        td
                          span 100
                        td
                          span 100
    
    chat-panel

</template>

<script>

import MainHeader from '@/components/MainHeader'
import ChatPanel from '@/components/ChatPanel'
import 'vue-moment'

export default {
  name: 'PostList',
  components: {
    MainHeader,
    ChatPanel
  },
  data: (() => {
    return {
      title: '기계 학습(Machine Learning, 머신 러닝)은 즐겁다!'
    }
  })
}
</script>


<style>

.table-post-list td, .table-post-list th{
  padding: 12px !important;
}
</style>