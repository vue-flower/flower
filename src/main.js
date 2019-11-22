import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);



import router from '../src/router'

import { Button, Select } from 'element-ui';
import App from './App.vue'




Vue.config.productionTip = false

new Vue({
  components:{
    App
  },
  template: '<App />',
  router //注册路由
}).$mount('#app')
