<template lang="pug">
  .ibox.float-e-margins
    .ibox-title
      h5 {{board.title}}
      .ibox-tools
        a
          i.fa.fa-plus
    .ibox-content
      router-link(to='/post' v-for='post in board.posts' :key='post.id')
        p  {{post.title}}
</template>

<script lang="coffee">
################################################
# coffee 
################################################

export default
  name: 'TopFivePosts'
  props: ['board']
  data: () ->
    hello: 'world',

################################################
</script>