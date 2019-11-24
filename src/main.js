import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css';
import router from '../src/router'

import App from './App.vue'

import store from './store'

import TopHeader from './components/TopHeader/TopHeader'




import ElementUI from 'element-ui'




//Vue全局注册组件的语法:Vue
Vue.component('TopHeader',TopHeader)


Vue.config.productionTip = false


new Vue({
  components:{
    App
  },
  template: '<App />',
  router, //注册路由
  store
}).$mount('#app')
