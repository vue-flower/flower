import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css';
import router from '../src/router'

import App from './App.vue'
import store from './store'

// import TopHeader from './components/TopHeader/TopHeader'

import TopNav from './components/TopNav/TopNav'
import TopNavLeft from './components/TopNavLeft/TopNavLeft'
import TopNavRight from './components/TopNavRight/TopNavRight'




import ElementUI from 'element-ui'

import { InputNumber,} from 'element-ui';

Vue.use(InputNumber);




//Vue全局注册组件的语法:Vue


Vue.component('TopNav',TopNav)
Vue.component('TopNavLeft',TopNavLeft)
Vue.component('TopNavRight',TopNavRight)


Vue.config.productionTip = false


new Vue({
  components:{
    App
  },
  template: '<App />',
  router, //注册路由
  store, //状态集中管理对象store
}).$mount('#app')
