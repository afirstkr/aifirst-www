<template lang="pug">
  #wrapper
    #page-wrapper.gray-bg
      main-header
      .row.wrapper.border-bottom.white-bg.page-heading
        .col-lg-12
          ol.breadcrumb(style='margin-top: 18px;')
            h1 강의자료
            li
              a(href='index.html') 아카데미
            li.active
              strong 강의자료

      .wrapper.wrapper-content
        .row
          .col-lg-offset-1.col-lg-10.editor
            .ibox.float-e-margins
              .ibox-title
                input.form-control(type='text', v-model='post.title' placeholder='제목을 넣어주세요.' style='border: 0px;')
              .ibox-content.no-padding
                <vue-editor id='editor' v-model='post.html' @imageAdded="handleImageAdded" useCustomImageHandler placeholder='Type...'></vue-editor>
        .row(style='margin-top: 20px;')
          .col-lg-offset-4.col-lg-2
            button.btn.btn-lg.btn-default.full-width.m-b(type='submit') 임시저장
          .col-lg-2
            button.btn.btn-lg.btn-primary.full-width.m-b(type='submit', @click='save(post)') 등록
</template>

<script>
import Vue from 'vue'
import MainHeader from '@/components/MainHeader'
import store from '@/store'
import firebase from 'firebase'

//https://github.com/davidroyer/vue2-editor
import { VueEditor } from 'vue2-editor' 

export default {
  name: 'PostEditor',
  components: {
    MainHeader,
    VueEditor
  },
  data: (() => {
    return {
      account: firebase.auth().currentUser ? firebase.auth().currentUser : store.state.account,
      channel: null,
      post: {
        title: null,
        html: null
      },
      postRef: null
    }
  }),
  methods: {
    save(post) {
      if(!post.title) return
      if(!post.html) return

      const vm = this
      this.postRef
        .add({
          channel: this.channel,
          id: Date.now(),
          displayName: this.account.displayName,
          email: this.account.email,
          title: post.title,
          html: post.html,
          createdAt: Date.now()
        })
        .then(function () {
          Vue.router.push({path: `/${vm.channel}/posts`})
        })
        .catch(function (err) {
          console.error('Error adding document: ', err)
        })

    },
    handleImageAdded(file, Editor, cursorLocation) {
      console.log('file', file)
      console.log('Editor', Editor)
      console.log('cursorLocation', cursorLocation)
      let formData = new FormData()
      formData.append('image', file)

      
      // axios({
      //   url: 'https://fakeapi.yoursite.com/images',
      //   method: 'POST',
      //   data: formData
      // })
      // .then((result) => {
      //   let url = result.data.url // Get url from response
      //   Editor.insertEmbed(cursorLocation, 'image', url);
      // })
      // .catch((err) => {
      //   console.log(err);
      // })

    }
  },
  mounted() {
    this.channel = store.state.route.params.channel
    this.postRef = Vue.$db.collection(`aifirst/${this.channel}/posts`)
  }
}

</script>


<style>

.editor {
  background-color: white;
  border-radius: 5px;
}
.editor .ibox-title {
  border: 0px;
}

.ql-container.ql-snow {
  border: 0px !important;
}

.ql-toolbar.ql-snow {
  border: 0px !important;
  border-bottom: 1px solid #e7eaec !important;
}

.editor .form-control {
  padding: 24px 0px !important;
  font-size: 18px;
}

.ql-editor.ql-blank {
  padding: 14px;
}

</style>