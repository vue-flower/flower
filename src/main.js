import Vue from 'vue'

import router from '../src/router'
import App from './App.vue'
import { 
  Button, Select,Pagination,
  Loading,Message,Backtop,
  Image, Dropdown,DropdownMenu,
  DropdownItem,InputNumber,
  Form,Input,FormItem,Tabs,TabPane,
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './theme/index.css'
import * as API from './api'
// import ElementUI from 'element-ui';
// Vue.config.productionTip = false
// Vue.use(ElementUI);

import VueLazyload from 'vue-lazyload'
// Vue.config.productionTip = false

import store from './store'
import TopHeader from './components/TopHeader/TopHeader'
import Banner from './components/Banner/Banner'
import TopNav from './components/TopNav/TopNav'
import TopNavLeft from './components/TopNavLeft/TopNavLeft'
import TopNavRight from './components/TopNavRight/TopNavRight'
import TopNavAside from './components/TopNavAside/TopNavAside'
import Aside from './components/Aside/Aside'
import Ad from './components/Ad/Ad'
import TimeLimit from './components/TimeLimit/TimeLimit.vue'
import Floor from './components/Floor/Floor'
import LoginItem from './components/Login/LoginItem'
import Test from './components/test/tset'

Vue.config.productionTip = false



//Vue全局注册组件的语法:Vue
Vue.component('TopHeader',TopHeader)
Vue.component('Banner',Banner)
Vue.component('TopNav',TopNav)
Vue.component('TopNavAside',TopNavAside)
Vue.component('TopNavLeft',TopNavLeft)
Vue.component('TopNavRight',TopNavRight)
Vue.component('Aside',Aside)
Vue.component('Ad',Ad)
Vue.component('TimeLimit',TimeLimit)
Vue.component('Floor',Floor)
Vue.component('LoginItem',LoginItem)
Vue.component('Test',Test)

// 注册element UI
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
Vue.use(Loading.directive);
Vue.use(Form);
Vue.use(Input);
Vue.use(FormItem);
Vue.use(Tabs);
Vue.use(TabPane);
// Vue.use(Message);

Vue.use(VueLazyload,{
  preLoad: 1.3,
  loading: './image/loading.gif',
})

Vue.prototype.$message = Message;
Vue.prototype.$API = API
Vue.prototype.$loading = Loading.service;


new Vue({
  components:{
    App
  },
  template: '<App />',
  router, //注册路由
  store
}).$mount('#app')
