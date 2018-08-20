import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Todo from './views/Todo.vue'
import FileTree from './views/FileTree.vue'

Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/todo',
      name: 'todo',
      component: Todo
    },
    {
      path: '/file-tree',
      name: 'file-tree',
      component: FileTree
    },
  ]
})
