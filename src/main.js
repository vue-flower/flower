import Vue from 'vue'

import router from '../src/router'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  components:{
    App
  },
  template: '<App />',
  router //注册路由
}).$mount('#app')
