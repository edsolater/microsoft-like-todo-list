/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import _fn from './assets/myFunctions'
import './plugins/fontawesome'

Vue.prototype._fn = _fn
Vue.prototype._ = require('lodash')
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
