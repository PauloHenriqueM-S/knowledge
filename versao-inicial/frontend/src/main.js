import 'font-awesome/css/font-awesome.css'

import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORARIO!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ikxlb25hcmRvIE0uIExlaXTDo28iLCJlbWFpbCI6Imxlb25hcmRvQGNvZGVyLmNvbS5iciIsImFkbWluIjp0cnVlLCJpYXQiOjE3MDEwNjY2MTIsImV4cCI6MTcwMTMyNTgxMn0.dFLLO5LKUM_COiMV6kJDDU2YGtoMpGfK16xrr3UpC5U'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')