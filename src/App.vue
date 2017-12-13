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

export default
  name: 'app'
  data: () ->
    currentUser: firebase.auth().currentUser
    chatRef: Vue.$db.collection('chat')

################################################
</script>

<style>

</style>
