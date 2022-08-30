import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
// import http from 'axios'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/less/index.less'

import '../api/mock.js'
import router from '../router'
import store from '../src/store'

Vue.config.productionTip = false
Vue.use(ElementUI);

// Vue.prototype.$http=http

new Vue({
  store,
  router, 
  render: h => h(App),
}).$mount('#app')
