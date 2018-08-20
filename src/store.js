import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)


import Todo from './stores/Todo.js'
import FileTree from './stores/FileTree.js'

export default new Vuex.Store({
  modules: {
    Todo,
    FileTree
  },
})
