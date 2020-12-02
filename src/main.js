import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vuetify from './plugins/vuetify';

import './assets/scss/app.scss'


axios.defaults.baseURL = 'http://3.90.183.159:8080/'

//axios.defaults.baseURL = 'http://localhost:8080/'
Vue.config.productionTip = false


axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwt');

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
