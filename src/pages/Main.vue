<template lang="pug">
  #wrapper
    #page-wrapper.gray-bg
      .row.border-bottom.white-bg
        nav.navbar.navbar-static-top(role='navigation')
          .navbar-header
            button.navbar-toggle.collapsed(aria-controls='navbar', aria-expanded='false', data-target='#navbar', data-toggle='collapse', type='button')
              i.fa.fa-reorder
            a.navbar-brand(href='index.html') AIFIRST.KR
          #navbar.navbar-collapse.collapse
            ul.nav.navbar-nav
              li.dropdown
                a.dropdown-toggle(aria-expanded='false', role='button', href='post_detail.html', data-toggle='dropdown')
                  span  커뮤니티 
                  span.caret
                ul.dropdown-menu(role='menu')
                  li
                    a(href='') 자유게시판
                  li
                    a(href='') 소모임
                  li
                    a(href='') 이슈토론방
                  li
                    a(href='') 논문자료실
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
                a(href='login.html')
                  i.fa.fa-sign-out
                  |  Log out
      .wrapper.wrapper-content
        .container
          .row
            .col-lg-8
              user-chart
            .col-lg-4
              user-status
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

</template>


<script lang="coffee">

import Vue from 'vue'
import UserChart from '@/components/UserChart'
import UserStatus from '@/components/UserStatus'
import TopFivePosts from '@/components/TopFivePosts'


export default {
  name: 'Main'
  components: {
    UserChart
    UserStatus
    TopFivePosts
  }
  data: () ->
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
  methods: {
    getPosts: ()->
      console.log 'getPosts'
  }
  created: ()->
    data = 
      _from: 'MENU_01'
    Vue.$http['get']('http://localhost:3000/channel/list/' + data._from)
      .then (response) =>
        @posts = response.data.data
      .catch (e) =>
        console.log 'err', e
  
}

window.addEventListener 'load', ->
  d1 = [[1262304000000, 6], [1264982400000, 3057], [1267401600000, 20434], [1270080000000, 31982], [1272672000000, 26602], [1275350400000, 27826], [1277942400000, 24302], [1280620800000, 24237], [1283299200000, 21004], [1285891200000, 12144], [1288569600000, 10577], [1291161600000, 10295]]
  d2 = [[1262304000000, 5], [1264982400000, 200], [1267401600000, 1605], [1270080000000, 6129], [1272672000000, 11643], [1275350400000, 19055], [1277942400000, 30062], [1280620800000, 39197], [1283299200000, 37000], [1285891200000, 27000], [1288569600000, 21000], [1291161600000, 17000]]
  data1 = [
    { label: "Data 1", data: d1, color: '#17a084' }
    { label: "Data 2", data: d2, color: '#127e68' }
  ]
  lineData = 
    labels: ["January", "February", "March", "April", "May", "June", "July"]
    datasets: [
      {
        label: 'Example dataset'
        fillColor: 'rgba(220,220,220,0.5)'
        strokeColor: 'rgba(220,220,220,1)'
        pointColor: 'rgba(220,220,220,1)'
        pointStrokeColor: '#fff'
        pointHighlightFill: '#fff'
        pointHighlightStroke: 'rgba(220,220,220,1)'
        data: [20, 39, 40, 51, 76, 95, 140]
      }
      {
        label: 'Example dataset'
        fillColor: 'rgba(26,179,148,0.5)'
        strokeColor: 'rgba(26,179,148,0.7)'
        pointColor: 'rgba(26,179,148,1)'
        pointStrokeColor: '#fff'
        pointHighlightFill: '#fff'
        pointHighlightStroke: 'rgba(26,179,148,1)'
        data: [28, 38, 60, 39, 56, 37, 30]
      }
    ]
  lineOptions = 
    scaleShowGridLines: true
    scaleGridLineColor: 'rgba(0,0,0,.05)'
    scaleGridLineWidth: 1
    bezierCurve: true
    bezierCurveTension: 0.4
    pointDot: true
    pointDotRadius: 4
    pointDotStrokeWidth: 1
    pointHitDetectionRadius: 20
    datasetStroke: true
    datasetStrokeWidth: 2
    datasetFill: true
    responsive: true
  
  ctx = document.getElementById('lineChart').getContext('2d')
  myNewChart = new Chart(ctx).Line(lineData, lineOptions)
  return

</script>

<style>
</style>
