import Vue from 'vue'
import './plugins/fontawesome'
import App from './App.vue'

/* eslint-disable */
Vue.config.productionTip = false
import store from './store'
import router from './router'
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
