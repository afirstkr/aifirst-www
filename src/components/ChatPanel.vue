<template lang="pug">
  div
    .small-chat-box.fadeInRight.animated( :class="{active: isActive}")
      .heading(draggable='true')
        small.chat-date.pull-right
          | {{account.displayName}}
        |                 {{category}}
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
        //- .left(v-if="!isMe(chat.email)" v-for='chat in chatList' :key='chat.id' :id='chat.id')
        //-   .author-name
        //-     | {{chat.displayName}}
        //-     small.chat-date
        //-       | {{chat.createdAt}}
        //-   .chat-message.active
        //-     | {{chat.text}}
        
        
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

<script>
import Vue from 'vue'
import VueChatScroll from 'vue-chat-scroll'
import store from '@/store';
import firebase from 'firebase'

Vue.use(VueChatScroll)

export default {
  name: 'ChatPanel',
  data: (() => {
    return {
      category: store.state.route.name,
      authenticated: store.state.auth.authenticated,
      account: firebase.auth().currentUser ? firebase.auth().currentUser : store.state.account,
      isActive: false,
      chatRef: Vue.$db.collection(`chat_${store.state.route.name}`),
      chatList: [],
      text: ''
    }
  }),
  mounted() {
    initWidgets()

    const vm = this
    this.chatRef
      .orderBy('createdAt', 'desc').limit(50)
      .onSnapshot(function (querySnapshot) {
        let lastId = ''
        vm.chatList = []
        querySnapshot.forEach(function (doc) {
          if(!lastId) lastId = doc.data().id
          vm.chatList.unshift(doc.data())
          console.log('message', doc.data().text)
        })        

        const bottom = $('.small-chat-box .content').prop('scrollHeight')
        $('.sscroll').slimScroll({scrollTo: bottom})
      })
  },
  methods: {
    isMe(email) {
      if(email === this.account.email) return true
      else return false
    },
    sendMessage(text) {
      if(!text) return
      
      this.chatRef.add({
        category: this.category,
        id: Date.now(),
        displayName: this.account.displayName,
        email: this.account.email,
        text: text,
        createdAt: Date.now()
      })
      .then(function () {
        console.log('success: ')
        text = ''
      })
      .catch(function (err) {
        console.error('Error adding document: ', err)
      })
    }
  }
}

function initWidgets() {
  // Initialize slimscroll for small chat
  $('.small-chat-box .content').slimScroll({
    height: '414px',
    railOpacity: 0.4,
    start: 'bottom'
  });
}
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