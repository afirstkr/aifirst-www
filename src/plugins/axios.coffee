
import Vue from 'vue'
import Axios from 'axios'

Axios.defaults.baseURL = process.env.API_LOCATION
Axios.defaults.headers.common.Accept = 'application/json'
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
