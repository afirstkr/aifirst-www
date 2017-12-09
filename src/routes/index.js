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

export default [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/login',
    name: 'login',
    component: Login,

    meta: {
      guest: true,
    },
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup,

    meta: {
      guest: true,
    },
  },
  {
    path: '/members',
    name: 'members',
    component: Members
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,

    meta: {
      auth: true,
    },
  },
  {
    path: '/post',
    name: 'post',
    component: Post
  },
  {
    path: '/:channel/post/edit',
    name: 'PostEditor',
    component: PostEditor,

    meta: {
      auth: true,
    },
  },
  {
    path: '/forgot_password',
    name: 'ForgotPassword',
    component: ForgotPassword,

    meta: {
      guest: true,
    },
  },
  {
    path: '/:channel/posts',
    name: 'postList',
    component: PostList
  },
  {
    path: '/*',
    redirect: '/',
  }
]
