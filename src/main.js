import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://wjq:8001/';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
