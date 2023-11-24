import 'font-awesome/css/font-awesome.css'

import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORARIO!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ikxlb25hcmRvIE0uIExlaXTDo28iLCJlbWFpbCI6Imxlb25hcmRvQGNvZGVyLmNvbS5iciIsImFkbWluIjp0cnVlLCJpYXQiOjE3MDA4MDM4OTAsImV4cCI6MTcwMTA2MzA5MH0.YzNWp9pAY0ZpX0abR2vuVd2ZQdSRq_m6cjHoeoMUBwM'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')