import Vue from 'vue'

import router from '../src/router'
import App from './App.vue'
// import ViewUI from 'view-design';
// import 'view-design/dist/styles/iview.css';
// import ElementUI from 'element-ui';
// import { Button, Select,Pagination } from 'element-ui';
// Vue.config.productionTip = false
// Vue.use(ElementUI);
// Vue.use(Button)
// Vue.use(Select)
// Vue.use(Pagination);

import TopHeader from './components/TopHeader/TopHeader'
import Banner from './components/Banner/Banner'
import TopNav from './components/TopNav/TopNav'
import Aside from './components/Aside/Aside'
Vue.config.productionTip = false

//Vue全局注册组件的语法:Vue
Vue.component('TopHeader',TopHeader)
Vue.component('Banner',Banner)
Vue.component('TopNav',TopNav)
Vue.component('Aside',Aside)

new Vue({
  components:{
    App
  },
  template: '<App />',
  router //注册路由
}).$mount('#app')
