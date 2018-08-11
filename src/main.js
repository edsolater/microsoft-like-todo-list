import Vue from 'vue'
// import './plugins/bootstrap-vue'
import './plugins/fontawesome'
import App from './App.vue'

Vue.config.productionTip = false

import _global from './DataBase.js'
import store from './store'

Vue.prototype.GLOBAL = _global
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
