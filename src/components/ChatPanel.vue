<template lang="pug">
  div
    .small-chat-box.fadeInRight.animated( :class="{active: isActive}")
      .heading(draggable='true')
        small.chat-date.pull-right
          | {{shared.me.userName}}
        |                 {{channel}}
      .content(v-chat-scroll="{always: true}")
        div(v-for='chat in chatList', :key='chat.id')
          .left(v-if="!isMe(chat.email)", :id='chat.id')
            .author-name
              | {{chat.userName}}
              small.chat-date
                | {{transDate(chat.createdAt)}}
            .chat-message.active
              | {{chat.text}}
          .right(v-if="isMe(chat.email)", :id='chat.id')
            .author-name
              small.chat-date
                | {{transDate(chat.createdAt)}}
            .chat-message
              | {{chat.text}}
        
      .form-chat
        .input-group.input-group-sm( @keyup.esc="toggleChatButton()" )
          input.form-control(type='text' v-model='text' @keyup.enter="sendMessage(text); text=''")
          span.input-group-btn
            button.btn.btn-primary(type='button' @click="sendMessage(text); text=''")
              | Send
    #small-chat
      //- span.badge.badge-warning.pull-right 5
      a.open-small-chat( @click='toggleChatButton()')
        i.fa( :class="{'fa-comments': !isActive, 'fa-remove': isActive}" ) 
</template>

<script lang="coffee">
################################################
# coffee 
################################################
import Vue from 'vue'
import VueChatScroll from 'vue-chat-scroll'
import shared from '@/shared'
import firebase from 'firebase'
import moment from 'moment-timezone'

Vue.use(VueChatScroll)

unsubscribe = null
export default
  name: 'ChatPanel'
  props: ['channel']
  data: () ->
    shared: shared.state
    isActive: false
    chatRef: Vue.$db.collection("aifirst/#{this.channel}/chats")
    chatList: []
    text: ''
  watch:
    "$route": (to, from) ->
      @chatRef = Vue.$db.collection("aifirst/#{this.channel}/chats")
      if(unsubscribe)
        unsubscribe()
        unsubscribe = null
      
      unsubscribe = @chatRef
        .orderBy('createdAt', 'desc').limit(50)
        .onSnapshot (querySnapshot) =>
          lastId = ''
          @chatList = []
          querySnapshot.forEach (doc) =>
            unless lastId then lastId = doc.data().id
            @chatList.unshift(doc.data())
          scrollToBottom()
  methods:
    transDate: (date) ->
      moment.tz(date, "Etc/GMT-9").format("HH:mm")
  
    toggleChatButton: () ->
      this.isActive = !this.isActive
      
      if this.isActive
        setTimeout () ->
          scrollToBottom()
        , 1000

    isMe: (email) ->
      if(email is this.shared.me.email) then return true 
      else return false
    sendMessage: (text) ->
      unless text then return
      this.chatRef.add({
        channel: this.channel
        id: Date.now()
        userName: this.shared.me.userName
        email: this.shared.me.email
        text: text
        createdAt: Date.now()
      })
      scrollToBottom()
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
        scrollToBottom()

  

initWidgets = () ->
  $('.small-chat-box .content').slimScroll({
    height: '414px',
    railOpacity: 0.4,
    start: 'bottom'
  })

scrollToBottom = () ->
  bottom = $('.small-chat-box .content').prop('scrollHeight')
  $('.small-chat-box .content').slimScroll { scrollTo: bottom }
  

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