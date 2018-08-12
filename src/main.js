import Vue from 'vue'
// import './plugins/bootstrap-vue'
import './plugins/fontawesome'
import App from './App.vue'

Vue.config.productionTip = false

import store from './store'


new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
