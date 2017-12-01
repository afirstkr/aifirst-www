<template lang="pug">
  .ibox.float-e-margins
    .ibox-title
      h5 {{board.title}}
      .ibox-tools
        a
          i.fa.fa-plus
    .ibox-content
      a(href='post_detail.html' v-for='post in board.posts' :key='post.id')
        p  {{post.title}}
</template>

<script lang="coffee">

export default {
  name: 'TopFivePosts'
  props: ['board']
  data: () =>
    return {
      hello: 'world'
    }
}
</script>