<template lang="pug">
  #user-activity.ibox.float-e-margins
    .ibox-title
      span.label.label-warning.pull-right Updated 11.2017
      h5 사용자 활동정보
    .ibox-content
      .row
        .col-xs-4
          small.stats-label Pages / Visit
          h4 236 321.80
        .col-xs-4
          small.stats-label % New Visits
          h4 46.11%
        .col-xs-4
          small.stats-label Last week
          h4 432.021
    .ibox-content
      .row
        .col-xs-4
          small.stats-label Pages / Visit
          h4 436 547.20
        .col-xs-4
          small.stats-label % New Visits
          h4 150.23%
        .col-xs-4
          small.stats-label Last week
          h4 124.990
</template>

<script lang="coffee">

export default {
  name: 'UserStatus'
  data: () =>
    return {
      hi: 'hi'
    }
}
</script>