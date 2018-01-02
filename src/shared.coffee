import Vue from 'vue'
import Axios from 'axios'

export shared =
  ##################################################
  # state 
  ##################################################
  state:
    me: null
  
  

  ##################################################
  # auth actions 
  ##################################################
  logout: ->
    try 
      await Axios.post '/auth/logout'
      localStorage.setItem 'token', null
      log typeof localStorage.getItem 'token'
      this.state.me = null
    catch error
      localStorage.setItem 'token', null
      log "error #{error}"

  login: (loginUser, to) ->
    try 
      response = await Axios.post '/auth/login', loginUser
      log 'response', response.data.data
      localStorage.setItem 'token', response.data.data
      response = await Axios.get '/user/me'
      this.state.me = response.data.data

      path = localStorage.getItem 'from.path'
      Vue.router.push {path: path}
    catch error
      log 'error', error
  
  sendOtpEmail: (email) ->
    await Axios.post '/auth/sendOtpEmail', {email: email}

  signup: (user) ->
    await Axios.post '/auth/signup', user
    response = await Axios.post '/auth/login', user
    localStorage.setItem 'token', response.data.data
    response = await Axios.get '/user/me'
    this.state.me = response.data.data
    Vue.router.push {name: 'home'}

  setMe: () ->
    try
      response = await Axios.get '/user/me'
      this.state.me = response.data.data
    catch error
      log "error #{error}"
  
  clearMe: () ->
    this.state.me = null


  ##################################################
  # post actions 
  ##################################################
  
  createPost: (channelID, post, to) ->
    await Axios.post "/#{channelID}", post
    if to
      Vue.router.push {path: to}

  getPostList: (channelID, query) ->
    # {{url}}/notice?page=1&size=10&preset=TITLE&text=333
    query =
      params: query
    
    Axios.get "/#{channelID}", query

  getPost: (channelID, postID) ->
    Axios.get "/#{channelID}/#{postID}"

  createReply: (channelID, postID, reply) ->
    Axios.post "/#{channelID}/#{postID}/reply", reply
    
  getReplyList: (channelID, postID, query) ->
    query =
      params: query
    
    Axios.get "/#{channelID}/#{postID}/reply", query
    
export default shared