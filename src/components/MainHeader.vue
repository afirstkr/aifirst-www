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
                a(href='') 기업
              li
                a(href='') 학교
              li
                a(href='') 연구소
              li
                a(href='') 온라인커뮤니티
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
                a(href='') 팝니다
              li
                a(href='') 삽니다
              li
                a(href='') 구인구직
              li
                a(href='') 프로젝트
          li.dropdown
            a.dropdown-toggle(aria-expanded='false', role='button', href='post_detail.html', data-toggle='dropdown')
              span  이벤트 
              span.caret
            ul.dropdown-menu(role='menu')
              li
                a(href='') 공모전
              li
                a(href='') 스터디모임
              li
                a(href='') 세미나
              li
                a(href='') 컨퍼런스
              li
                a(href='') 엑스포
          li.dropdown
            a.dropdown-toggle(aria-expanded='false', role='button', href='post_detail.html', data-toggle='dropdown')
              span  컨소시엄 
              span.caret
            ul.dropdown-menu(role='menu')
              li
                a(href='') 정부사업공고
              li
                a(href='') R&D사업제안
              li
                a(href='') 참여사목록
              li
                a(href='') 전문가목록
              li
                a(href='') Q&A
        ul.nav.navbar-top-links.navbar-right
          li
            router-link(to="/login")
              i.fa.fa-sign-out
                |  Log out

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
</style>