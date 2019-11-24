import Vue from 'vue'

import router from '../src/router'
import App from './App.vue'
import { Button, Select,Pagination,Loading,Message,Backtop,Image, Dropdown,DropdownMenu,DropdownItem,InputNumber   } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './theme/index.css'

import VueLazyload from 'vue-lazyload'
// Vue.config.productionTip = false

import store from './store'

import TopHeader from './components/TopHeader/TopHeader'
import Banner from './components/Banner/Banner.vue'
import TopNav from './components/TopNav/TopNav'
import Aside from './components/Aside/Aside'
Vue.config.productionTip = false


Vue.use(Loading.directive);
Vue.use(VueLazyload,{
  preLoad: 1.3,
  loading: './image/loading.gif',
})
Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;

//Vue全局注册组件的语法:Vue
Vue.component('TopHeader',TopHeader)
Vue.component('Banner',Banner)
Vue.component('TopNav',TopNav)
Vue.component('Aside',Aside)

Vue.use(Button)
Vue.use(Select)
Vue.use(Pagination);
Vue.use(Loading);
Vue.use(Image);
Vue.use(Backtop);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(InputNumber)

new Vue({
  components:{
    App
  },
  template: '<App />',
  router, //注册路由
  store
}).$mount('#app')
