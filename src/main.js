import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import _global from './globalData.js'

Vue.prototype.GLOBAL = _global
new Vue({
  render: h => h(App),
}).$mount('#app')
