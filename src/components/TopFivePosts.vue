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

<script>

export default {
  name: 'TopFivePosts',
  props: ['board'],
  data: (() => {
    return {
      hello: 'world',
    }
  })
}
</script>