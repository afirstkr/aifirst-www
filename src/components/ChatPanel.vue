<template lang="pug">
  div
    .small-chat-box.fadeInRight.animated( :class="{active: isActive}")
      .heading(draggable='true')
        small.chat-date.pull-right
          | {{account.displayName}}
        |                 {{channel}}
      .content(v-chat-scroll="{always: false}")
        div(v-for='chat in chatList', :key='chat.id')
          .left(v-if="!isMe(chat.email)", :id='chat.id')
            .author-name
              | {{chat.displayName}}
              small.chat-date
                | {{chat.createdAt}}
            .chat-message.active
              | {{chat.text}}
          .right(v-if="isMe(chat.email)", :id='chat.id')
            .author-name
              small.chat-date
                | {{chat.createdAt}}
            .chat-message
              | {{chat.text}}
        
      .form-chat
        .input-group.input-group-sm
          input.form-control(type='text' v-model='text' @keyup.enter="sendMessage(text); text=''")
          span.input-group-btn
            button.btn.btn-primary(type='button' @click="sendMessage(text); text=''")
              | Send
    #small-chat
      //- span.badge.badge-warning.pull-right 5
      a.open-small-chat( @click='isActive = !isActive')
        i.fa( :class="{'fa-comments': !isActive, 'fa-remove': isActive}" ) 
</template>

<script lang="coffee">
################################################
# coffee 
################################################
import Vue from 'vue'
import VueChatScroll from 'vue-chat-scroll'
import store from '@/store'
import firebase from 'firebase'

Vue.use(VueChatScroll)

unsubscribe = null
export default
  name: 'ChatPanel'
  props: ['channel']
  data: () ->
    authenticated: store.state.auth.authenticated
    account: if firebase.auth().currentUser then firebase.auth().currentUser else store.state.account
    isActive: false
    chatRef: Vue.$db.collection("aifirst/#{this.channel}/chats")
    chatList: []
    text: ''
  watch:
    "$route": (to, from) ->
      vm = @
      this.chatRef = Vue.$db.collection("aifirst/#{this.channel}/chats")
      if(unsubscribe)
        unsubscribe()
        unsubscribe = null
      
      unsubscribe = this.chatRef
        .orderBy('createdAt', 'desc').limit(50)
        .onSnapshot (querySnapshot) ->
          lastId = ''
          vm.chatList = []
          querySnapshot.forEach (doc) ->
            unless lastId then lastId = doc.data().id
            vm.chatList.unshift(doc.data())
          bottom = $('.small-chat-box .content').prop('scrollHeight')
          $('.sscroll').slimScroll { scrollTo: bottom }


  mounted: () ->
    initWidgets()
    vm = this
    this.chatRef = Vue.$db.collection("aifirst/#{this.channel}/chats")
    if(unsubscribe)
      unsubscribe()
      unsubscribe = null

    unsubscribe = this.chatRef
      .orderBy('createdAt', 'desc').limit(50)
      .onSnapshot (querySnapshot) ->
        lastId = ''
        vm.chatList = []
        querySnapshot.forEach((doc) ->
          unless lastId then lastId = doc.data().id
          vm.chatList.unshift(doc.data())
        )        
        bottom = $('.small-chat-box .content').prop('scrollHeight')
        $('.sscroll').slimScroll { scrollTo: bottom }
  
  methods:
    isMe: (email) ->
      if(email is this.account.email) then return true 
      else return false
    sendMessage: (text) ->
      unless text then return
      this.chatRef.add({
        channel: this.channel
        id: Date.now()
        displayName: this.account.displayName
        email: this.account.email
        text: text
        createdAt: Date.now()
      })
      .then(() ->
        console.log('success: ')
        text = ''
      )
      .catch((err) ->
        console.error('Error adding document: ', err)
      )

initWidgets = () ->
  $('.small-chat-box .content').slimScroll({
    height: '414px',
    railOpacity: 0.4,
    start: 'bottom'
  })

################################################
</script>

<style scoped>
.small-chat-box .content {
  padding-bottom: 15px;
}
.slimScrollDiv {
  position: relative;
  overflow: hidden;
  width: auto;
  height: 414px;
}
</style>