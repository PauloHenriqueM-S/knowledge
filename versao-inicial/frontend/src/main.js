import 'font-awesome/css/font-awesome.css'

import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORARIO!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NiwibmFtZSI6Ikpvw6NvIiwiZW1haWwiOiJqb2FvQHlhaG9vLmNvbSIsImFkbWluIjpmYWxzZSwiaWF0IjoxNzAwNzgyMDQ5LCJleHAiOjE3MDEwNDEyNDl9.CfiGlmWhbE6uqq3E4iI5neZVXbzMgdmF7JgdgbA0NKs'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')