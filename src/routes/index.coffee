import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Signup from '@/pages/Signup'


import Members from '@/pages/Members'
import Profile from '@/pages/Profile'
import Post from '@/pages/Post'
import PostList from '@/pages/PostList'
import PostEditor from '@/pages/PostEditor'
import ForgotPassword from '@/pages/ForgotPassword'

export default [
  { path: '/',                      name: 'home', component: Home }
  { path: '/login',                 name: 'login', component: Login, meta: guest: true }
  { path: '/signup',                name: 'signup', component: Signup, meta: guest: true }
  { path: '/members',               name: 'members', component: Members }
  { path: '/profile',               name: 'profile', component: Profile, meta: auth: true }
  { path: '/forgot_password',       name: 'ForgotPassword', component: ForgotPassword, meta: guest: true }
  { path: '/:channelID/post/edit',  name: 'PostEditor', component: PostEditor, meta: auth: true }
  { path: '/:channelID/posts',      name: 'postList', component: PostList }
  { path: '/:channelID/:postID',    name: 'post', component: Post }
  { path: '/*', redirect: '/' }
]
