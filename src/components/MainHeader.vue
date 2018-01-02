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
                router-link(to='/free/posts') 자유 게시판
              li
                router-link(to='/parents/posts') 학부모 게시판
              li
                router-link(to='/workers/posts') 직장인 게시판
              li
                router-link(to='/college/posts') 대학생 게시판
              li
                router-link(to='/students/posts') 초중고 게시판
          li.dropdown
            a.dropdown-toggle(aria-expanded='false', role='button', href='post_detail.html', data-toggle='dropdown')
              span  소모임
              span.caret
            ul.dropdown-menu(role='menu')
              li
                router-link(to='/study/posts') 스터디모임
              li
                router-link(to='/lab/posts') 온라인연구소
          li.dropdown
            a.dropdown-toggle(aria-expanded='false', role='button', href='post_detail.html', data-toggle='dropdown')
              span  이벤트 
              span.caret
            ul.dropdown-menu(role='menu')
              li
                router-link(to='/academy/posts') 학회 & 컨퍼런스
              li
                router-link(to='/expo/posts') 엑스포
              li
                router-link(to='/seminar/posts') 세미나
          li.dropdown
            a.dropdown-toggle(aria-expanded='false', role='button', href='post_detail.html', data-toggle='dropdown')
              span  구인구직
              span.caret
            ul.dropdown-menu(role='menu')
              li
                router-link(to='/recruit/posts') 구인
              li
                router-link(to='/job/posts') 구직
              li
                router-link(to='/project/posts') 프로젝트
          li.dropdown
            a.dropdown-toggle(aria-expanded='false', role='button', href='post_detail.html', data-toggle='dropdown')
              span  월간 인공지능 
              span.caret
            ul.dropdown-menu(role='menu')
              li
                router-link(to='/trend/posts') 인공지능 트랜드
              li
                router-link(to='/review/posts') 인공지능 리뷰
          li.dropdown
            a.dropdown-toggle(aria-expanded='false', role='button', href='post_detail.html', data-toggle='dropdown')
              span  스타트업
              span.caret
            ul.dropdown-menu(role='menu')
              li
                router-link(to='/expert/posts') 전문가
              li
                router-link(to='/members') 기업

        ul.nav.navbar-top-links.navbar-right(v-if='!shared.me')
          li
            router-link(to='/login') 로그인

        ul.nav.navbar-top-links.navbar-right(v-if='shared.me')
          //- li.dropdown
          //-   a.dropdown-toggle.count-info(data-toggle='dropdown', href='#')
          //-     i.fa.fa-bell
          //-     span.label.label-primary 8
          //-   ul.dropdown-menu.dropdown-alerts
          //-     li
          //-       router-link(to='/')
          //-         div
          //-           i.fa.fa-envelope.fa-fw
          //-           |  You have 16 messages
          //-           span.pull-right.text-muted.small 4 minutes ago
          //-     li.divider
          //-     li
          //-       router-link(to='/')
          //-         div
          //-           i.fa.fa-twitter.fa-fw
          //-           |  3 New Followers
          //-           span.pull-right.text-muted.small 12 minutes ago
          //-     li.divider
          //-     li
          //-       router-link(to='/')
          //-         div
          //-           i.fa.fa-upload.fa-fw
          //-           |  Server Rebooted
          //-           span.pull-right.text-muted.small 4 minutes ago
          //-     li.divider
          //-     li
          //-       .text-center.link-block
          //-         router-link(to='/')
          //-           strong See All Alerts
          //-           i.fa.fa-angle-right

          
          li.dropdown
            a.dropdown-toggle(aria-expanded='false', role='button', href='post_detail.html', data-toggle='dropdown')
              span {{shared.me.userName}} 
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

</template>

<script lang="coffee">
################################################
# coffee 
################################################
import Vue from 'vue'
import Axios from 'axios'
import shared from '@/shared'


export default
  name: 'MainHeader'
  data: () ->
    shared: shared.state
  methods:
    logout: () ->
      shared.logout()
      
################################################
</script>


<style>
.top-navigation .nav > li > a {
    padding: 15px 12px;
    color: #676a6c;
}
</style>