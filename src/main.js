import Vue from 'vue'

import router from '../src/router'
import App from './App.vue'
import * as API from './api'
// import ViewUI from 'view-design';
// import 'view-design/dist/styles/iview.css';
import ElementUI from 'element-ui';
import { 
  Button,
  Select,
  Pagination,
  Loading ,
  Form,
  Input,
  FormItem,
  Tabs,
  TabPane,} from 'element-ui';
// Vue.config.productionTip = false
// Vue.use(ElementUI);


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

Vue.use(Button)
Vue.use(Select)
Vue.use(Pagination);
Vue.use(Loading.directive);
Vue.use(Form);
Vue.use(Input);
Vue.use(FormItem);
Vue.use(Tabs);
Vue.use(TabPane,);

Vue.prototype.$API = API

new Vue({
  components:{
    App
  },
  template: '<App />',
  router, //注册路由
  store
}).$mount('#app')
