<template lang='pug'>
  #app
    router-view

    
</template>

<script>
import Vue from 'vue'

import firebase from 'firebase'

export default {
  name: 'app',
  data: () => {
    return {
      currentUser: firebase.auth().currentUser,
      chatRef: Vue.$db.collection('chat'),
    } 
  }
}

</script>

<style>

</style>
