import Vue from 'vue'

import router from '../src/router'
import App from './App.vue'

import TopHeader from './components/TopHeader/TopHeader'
import Banner from './components/Banner/Banner'
import TopNav from './components/TopNav/TopNav'
Vue.config.productionTip = false

//Vue全局注册组件的语法:Vue
Vue.component('TopHeader',TopHeader)
Vue.component('Banner',Banner)
Vue.component('TopNav',TopNav)

new Vue({
  components:{
    App
  },
  template: '<App />',
  router //注册路由
}).$mount('#app')
