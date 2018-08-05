import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

let IDCounter = 0

new Vue({
  data: {
    todos: [
      {
        id: IDCounter++,
        content: `the first Walk around`,
        isFinished: false,
        isStared: false,
      },
      {
        id: IDCounter++,
        content: `the second Hello world`,
        isFinished: false,
        isStared: false,
      },
      {
        id: IDCounter++,
        content: `the third Hello world`,
        isFinished: false,
        isStared: false,
      },
      {
        id: IDCounter++,
        content: `the forth Hello world`,
        isFinished: false,
        isStared: false,
      }
    ],
    tabStateCode: 1,
    background: {
      color: "blue",
      image: "car"
    },
    user: {
      name: "edsolater"
    }
  },
  render: h => h(App),
}).$mount('#app')
