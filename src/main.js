import Vue from 'vue'

import router from '../src/router'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  components:{
    App
  },
  template: '<App />',
  router, //注册路由
  store, //状态集中管理对象store
}).$mount('#app')
