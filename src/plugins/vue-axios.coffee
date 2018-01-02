
import Vue from 'vue'
import Axios from 'axios'

Axios.defaults.baseURL = process.env.API_LOCATION
console.log 'Axios.defaults.baseURL', Axios.defaults.baseURL
Axios.defaults.headers.common.Accept = 'application/json'

Axios.interceptors.request.use(
  (config) ->
    token = localStorage.getItem 'token'
    if token
      config.headers.Authorization = "Bearer #{token}"
    config
)

Axios.interceptors.response.use(
  (response) -> response
  (error) ->
    if (error.response.status == 401)
      console.log('response.status: 401')
    Promise.reject(error)
)

# Bind Axios to Vue.
Vue.$http = Axios;
Object.defineProperty Vue.prototype, '$http', get: () -> return Axios
