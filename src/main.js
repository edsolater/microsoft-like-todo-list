import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

let todoIDCounter = 0
let tabIDCounter = 0
new Vue({
  data: {
    tabs: [
      {
        id: tabIDCounter++,
        title: '我的第一天',
      },
      {
        id: tabIDCounter++,
        title: '我的第二天',
      },
      {
        id: tabIDCounter++,
        title: '我的第三天',
      },
      {
        id: tabIDCounter++,
        title: '我的第四天',
      },
      {
        id: tabIDCounter++,
        title: '我的第五天',
      },
      {
        id: tabIDCounter++,
        title: '重要',
      }
    ],
    todos: [
      {
        id: todoIDCounter++,
        content: `the first Walk around`,
        isFinished: false,
        isStared: false,
      },
      {
        id: todoIDCounter++,
        content: `the second Hello world`,
        isFinished: false,
        isStared: false,
      },
      {
        id: todoIDCounter++,
        content: `the third Hello world`,
        isFinished: false,
        isStared: false,
      },
      {
        id: todoIDCounter++,
        content: `the forth Hello world`,
        isFinished: false,
        isStared: false,
      }
    ],
    prodiles: {
      user: {
        name: 'edsolater',
      }
    },
    configs: {
      background: {
        color: "blue",
        image: "car"
      },
    },   
  },
  render: h => h(App),
}).$mount('#app')
