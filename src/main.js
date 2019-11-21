import Vue from 'vue'

import router from '../src/router'
import App from './App.vue'
// import ViewUI from 'view-design';
// import 'view-design/dist/styles/iview.css';
import ElementUI from 'element-ui';
import { Button, Select,Pagination } from 'element-ui';
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Button)
Vue.use(Select)
Vue.use(Pagination);
new Vue({
  components:{
    App
  },
  template: '<App />',
  router //注册路由
}).$mount('#app')
