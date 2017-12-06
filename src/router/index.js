import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/Main'
import Login from '@/pages/Login'
import Signup from '@/pages/Signup'


import Members from '@/pages/Members'
import Profile from '@/pages/Profile'
import Post from '@/pages/Post'
import PostList from '@/pages/PostList'
import PostEditor from '@/pages/PostEditor'
import ForgotPassword from '@/pages/ForgotPassword'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/members',
      name: 'Members',
      component: Members
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/post',
      name: 'Post',
      component: Post
    },
    {
      path: '/posts',
      name: 'PostList',
      component: PostList
    },
    {
      path: '/post/edit',
      name: 'PostEditor',
      component: PostEditor
    },
    {
      path: '/forgot_password',
      name: 'ForgotPassword',
      component: ForgotPassword
    }
  ]
})
