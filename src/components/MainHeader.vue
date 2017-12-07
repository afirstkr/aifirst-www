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
                router-link(to='/posts') 자유게시판
              li
                router-link(to='/posts') 소모임
              li
                router-link(to='/posts') 이슈토론방
              li
                router-link(to='/posts') 논문자료실
          li.dropdown
            a.dropdown-toggle(aria-expanded='false', role='button', href='post_detail.html', data-toggle='dropdown')
              span  포럼 
              span.caret
            ul.dropdown-menu(role='menu')
              li
                router-link(to='/posts') 기업
              li
                router-link(to='/posts') 학교
              li
                router-link(to='/posts') 연구소
              li
                router-link(to='/posts') 온라인커뮤니티
          li.dropdown
            a.dropdown-toggle(aria-expanded='false', role='button', href='post_detail.html', data-toggle='dropdown')
              span  아카데미 
              span.caret
            ul.dropdown-menu(role='menu')
              li
                a(href='academy_list.html') 강좌목록
              li
                a(href='academy_list.html') 협회자료
          li.dropdown
            a.dropdown-toggle(aria-expanded='false', role='button', href='post_detail.html', data-toggle='dropdown')
              span  마켓 
              span.caret
            ul.dropdown-menu(role='menu')
              li
                router-link(to='/posts') 팝니다
              li
                router-link(to='/posts') 삽니다
              li
                router-link(to='/posts') 구인구직
              li
                router-link(to='/posts') 프로젝트
          li.dropdown
            a.dropdown-toggle(aria-expanded='false', role='button', href='post_detail.html', data-toggle='dropdown')
              span  이벤트 
              span.caret
            ul.dropdown-menu(role='menu')
              li
                router-link(to='/posts') 공모전
              li
                router-link(to='/posts') 스터디모임
              li
                router-link(to='/posts') 세미나
              li
                router-link(to='/posts') 컨퍼런스
              li
                router-link(to='/posts') 엑스포
          li.dropdown
            a.dropdown-toggle(aria-expanded='false', role='button', href='post_detail.html', data-toggle='dropdown')
              span  컨소시엄 
              span.caret
            ul.dropdown-menu(role='menu')
              li
                router-link(to='/posts') 정부사업공고
              li
                router-link(to='/posts') R&D사업제안
              li
                router-link(to='/posts') 참여사목록
              li
                router-link(to='/posts') 전문가목록
              li
                router-link(to='/posts') Q&A
          li.dropdown
            a.dropdown-toggle(aria-expanded='false', role='button', href='post_detail.html', data-toggle='dropdown')
              span  회원 
              span.caret
            ul.dropdown-menu(role='menu')
              li
                router-link(to='/members') 전문가
              li
                router-link(to='/members') 기업

        ul.nav.navbar-top-links.navbar-right
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
              span  브루스 
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
                router-link(to='/login') 로그아웃
          //- li
          //-   a.right-sidebar-toggle
          //-     i.fa.fa-tasks


</template>

<script>

export default {
  name: 'MainHeader',
  data: (() => {
    return {
      pageTitle: 'MainHeader'
    }
  })
}
</script>


<style>
.top-navigation .nav > li > a {
    padding: 15px 12px;
    color: #676a6c;
}
</style>