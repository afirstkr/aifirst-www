<template lang="pug">
  .ibox.float-e-margins
    .ibox-title
      h5 {{title}}
      .ibox-tools
        router-link(:to="{ name: 'postList', params: { channelID: channelID } }")
          i.fa.fa-plus
    .ibox-content(style="height: 176px")
      router-link(:to="{ name: 'post', params: { channelID: channelID, postID: post.postID }}" v-for='post in postList' :key='post.postID')
        p  {{post.title}}
          small.reply-count(v-if="post.replies") ({{post.replies}})
</template>

<script lang="coffee">
################################################
# coffee 
################################################
import shared from '@/shared'

export default
  name: 'TopFivePosts'
  props: ['title', 'channelID']
  data: () ->
    meta: null
    postList: []
  methods: 
    replyCount: (count) ->
      log if count
      if count then return count
      else return null
  mounted: ->
    this.meta         = { page: 1, size: 5 }

    query = {}
    query.preset      = 'DEFAULT'
    query.page        = this.meta.page
    query.size        = this.meta.size
    
    response          = await shared.getPostList(this.channelID, query)
    this.meta         = response.data.meta
    this.postList     = response.data.data

################################################
</script>


<style>
.ibox-content .reply-count {
  margin-left: 5px;
}
</style>