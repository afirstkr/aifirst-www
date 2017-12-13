<template lang="pug">
  .row.border-bottom.white-bg
    nav.navbar.navbar-static-top(role='navigation')
      .navbar-header
        button.navbar-toggle.collapsed(aria-controls='navbar', aria-expanded='false', data-target='#navbar', data-toggle='collapse', type='button')
          i.fa.fa-reorder
        router-link.navbar-brand(to='/') AIFIRST.KR
      #navbar.navbar-collapse.collapse
        ul.nav.navbar-nav
          li.dropdown
            a.dropdown-toggle(aria-expanded='false', role='button', href='post_detail.html', data-toggle='dropdown')
              span  커뮤니티 
              span.caret
            ul.dropdown-menu(role='menu')
              li
                router-link(to='/free/posts') 자유게시판
              li
                router-link(to='/moim/posts') 소모임
              li
                router-link(to='/issue/posts') 이슈토론방
              li
                router-link(to='/paper/posts') 논문자료실
          li.dropdown
            a.dropdown-toggle(aria-expanded='false', role='button', href='post_detail.html', data-toggle='dropdown')
              span  포럼 
              span.caret
            ul.dropdown-menu(role='menu')
              li
                router-link(to='/company/posts') 기업
              li
                router-link(to='/school/posts') 학교
              li
                router-link(to='/lab/posts') 연구소
              li
                router-link(to='/community/posts') 온라인커뮤니티
          li.dropdown
            a.dropdown-toggle(aria-expanded='false', role='button', href='post_detail.html', data-toggle='dropdown')
              span  아카데미 
              span.caret
            ul.dropdown-menu(role='menu')
              li
                router-link(to='/lecture/posts') 강좌목록
              li
                router-link(to='/ref/posts') 협회자료
          li.dropdown
            a.dropdown-toggle(aria-expanded='false', role='button', href='post_detail.html', data-toggle='dropdown')
              span  마켓 
              span.caret
            ul.dropdown-menu(role='menu')
              li
                router-link(to='/sell/posts') 팝니다
              li
                router-link(to='/buy/posts') 삽니다
              li
                router-link(to='/hr/posts') 구인구직
              li
                router-link(to='/project/posts') 프로젝트
          li.dropdown
            a.dropdown-toggle(aria-expanded='false', role='button', href='post_detail.html', data-toggle='dropdown')
              span  이벤트 
              span.caret
            ul.dropdown-menu(role='menu')
              li
                router-link(to='/study/posts') 스터디모임
              li
                router-link(to='/seminar/posts') 세미나
              li
                router-link(to='/conf/posts') 컨퍼런스
              li
                router-link(to='/expo/posts') 엑스포
          li.dropdown
            a.dropdown-toggle(aria-expanded='false', role='button', href='post_detail.html', data-toggle='dropdown')
              span  컨소시엄 
              span.caret
            ul.dropdown-menu(role='menu')
              li
                router-link(to='/gov/posts') 정부사업공고
              li
                router-link(to='/rnd/posts') R&D사업제안
              li
                router-link(to='/partner/posts') 참여사목록
              li
                router-link(to='/export/posts') 전문가목록
              li
                router-link(to='/qna/posts') Q&A
          li.dropdown
            a.dropdown-toggle(aria-expanded='false', role='button', href='post_detail.html', data-toggle='dropdown')
              span  회원 
              span.caret
            ul.dropdown-menu(role='menu')
              li
                router-link(to='/members') 전문가
              li
                router-link(to='/members') 기업

        ul.nav.navbar-top-links.navbar-right(v-if='!authenticated')
          li
            router-link(to='/login') 로그인

        ul.nav.navbar-top-links.navbar-right(v-if='authenticated')
          li.dropdown
            a.dropdown-toggle.count-info(data-toggle='dropdown', href='#')
              i.fa.fa-bell
              span.label.label-primary 8
            ul.dropdown-menu.dropdown-alerts
              li
                router-link(to='/')
                  div
                    i.fa.fa-envelope.fa-fw
                    |  You have 16 messages
                    span.pull-right.text-muted.small 4 minutes ago
              li.divider
              li
                router-link(to='/')
                  div
                    i.fa.fa-twitter.fa-fw
                    |  3 New Followers
                    span.pull-right.text-muted.small 12 minutes ago
              li.divider
              li
                router-link(to='/')
                  div
                    i.fa.fa-upload.fa-fw
                    |  Server Rebooted
                    span.pull-right.text-muted.small 4 minutes ago
              li.divider
              li
                .text-center.link-block
                  router-link(to='/')
                    strong See All Alerts
                    i.fa.fa-angle-right

          
          li.dropdown
            a.dropdown-toggle(aria-expanded='false', role='button', href='post_detail.html', data-toggle='dropdown')
              span {{account.displayName || account.email}} 
              span.caret
            ul.dropdown-menu(role='menu')
              li
                router-link(to='/profile') 프로필
              li
                router-link(to='/posts') 메뉴
              li
                router-link(to='/posts') 찜목록
              li.divider
              li
                a(@click='logout()') 로그아웃
          //- li
          //-   a.right-sidebar-toggle
          //-     i.fa.fa-tasks


</template>

<script lang="coffee">
################################################
# coffee 
################################################
import store from '@/store'
import firebase from 'firebase'

export default
  name: 'MainHeader'
  data: () ->
    authenticated: store.state.auth.authenticated
    account: if firebase.auth().currentUser then firebase.auth().currentUser else store.state.account
  methods:
    logout: () ->
      this.$store.dispatch('auth/logout')

################################################
</script>


<style>
.top-navigation .nav > li > a {
    padding: 15px 12px;
    color: #676a6c;
}
</style>