<template lang='pug'>
  #app
    router-view

    
</template>

<script lang='coffee'>
################################################
# coffee 
################################################

import Vue from 'vue'
import firebase from 'firebase'
import Axios from 'axios'
import shared from '@/shared'

export default
  name: 'app'
  data: () ->
    me: null
    chatRef: Vue.$db.collection('chat')
  moundted: () ->
    
################################################
</script>

<style>

</style>
