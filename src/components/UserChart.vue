<template lang="pug">
  .ibox.float-e-margins
    .ibox-content
      div
        span.pull-right.text-right
          | 전체 회원수: 162,862
        h3.font-bold.no-margins
          | 회원 활동현황
      .m-t-sm
        .row
          .col-md-8
            div
              canvas#lineChart(height='114')
          .col-md-4
            ul.stat-list.m-t-lg
              li
                h2.no-margins 1,222,346
                small 누적회원수
                .progress.progress-mini
                  .progress-bar(style='width: 48%;')
              li
                h2.no-margins 4,422
                small 신규회원
                .progress.progress-mini
                  .progress-bar(style='width: 60%;')
</template>

<script lang="coffee">

export default {
  name: 'UserChart'
  data: () =>
    return {
      contact: '문의메일 - koraiaoffice@gmail.com'
    }
}
</script>