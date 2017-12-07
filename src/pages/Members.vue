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
          .col-lg-4
            .contact-box
              a(href='profile.html')
                .col-sm-4
                  .text-center
                    img.img-circle.m-t-xs.img-responsive(alt='image', src='static/img/bruce.jpg')
                    .m-t-xs.font-bold 개발자
                .col-sm-8
                  h3
                    strong 브루스리
                  p
                    i.fa.fa-map-marker
                    |  서울시 성북구 종암동
                  address
                    strong (사)한국인공지능협회
                    br
                    |                             795 Folsom Ave, Suite 600
                    br
                    |                             San Francisco, CA 94107
                    br
                    abbr(title='Phone') P:
                    |  (123) 456-7890
                .clearfix
          .col-lg-4
            .contact-box
              a(href='profile.html')
                .col-sm-4
                  .text-center
                    img.img-circle.m-t-xs.img-responsive(alt='image', src='static/img/bruce.jpg')
                    .m-t-xs.font-bold 개발자
                .col-sm-8
                  h3
                    strong 브루스리
                  p
                    i.fa.fa-map-marker
                    |  서울시 성북구 종암동
                  address
                    strong (사)한국인공지능협회
                    br
                    |                             795 Folsom Ave, Suite 600
                    br
                    |                             San Francisco, CA 94107
                    br
                    abbr(title='Phone') P:
                    |  (123) 456-7890
                .clearfix


</template>

<script>

import MainHeader from '@/components/MainHeader'

export default {
  name: 'Members',
  components: {
    MainHeader
  },
  data: (() => {
    return {
      title: 'Members'
    }
  })
}
</script>


<style>
</style>