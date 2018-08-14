import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  strict: true,
  modules: {},
  state: {
    hasDropdown: false,
    selectedIndex: 0,
    styleLibrary: {
      dodgerblue: {
        backgroundImage:
          'linear-gradient(to right, mediumslateblue, dodgerblue)'
      },
      coral: {
        backgroundImage: 'linear-gradient(to right, #eb6566, #edbf9c)'
      },
      orchid: {
        backgroundImage: 'linear-gradient(to right, darkorchid, orchid)'
      },
      forestgreen: {
        backgroundImage: 'linear-gradient(to right, #5da848, #adde69)'
      },
      deepskyblue: {
        backgroundImage: 'linear-gradient(to right, deepskyblue, lightskyblue)'
      }
    },
    tabs: [
      // 这些是锁定的特殊tags
      {
        index: 0,
        title: '我的一天',
        isEditable: false,
        iconName: 'sun',
        themes: {
          colorName: 'forestgreen',
          backgroundImage: 'car',
          hasSortBar: true
        }
      },
      {
        index: 1,
        title: '重要',
        isEditable: false,
        iconName: 'star',
        themes: {
          colorName: 'dodgerblue',
          backgroundImage: 'car',
          hasSortBar: true
        }
      },
      {
        index: 2,
        title: 'To-Do',
        isEditable: false,
        iconName: 'clipboard-check',
        themes: {
          colorName: 'dodgerblue',
          backgroundImage: 'car',
          hasSortBar: true
        }
      },
      // 这些是非锁定的普通repos
      {
        index: 3,
        title: '示例 repo',
        isEditable: true,
        iconName: 'list',
        themes: {
          colorName: 'dodgerblue',
          backgroundImage: 'car',
          hasSortBar: true
        }
      }
    ],
    todos: [
      {
        dateCreated: Math.random(),
        content: '一与二',
        isFinished: false,
        isStared: false,
        belongToTabIDs: [0, 1]
      },
      {
        dateCreated: Math.random(),
        content: '一与二',
        isFinished: false,
        isStared: false,
        belongToTabIDs: [0, 1]
      },
      {
        dateCreated: Math.random(),
        content: '一与二',
        isFinished: false,
        isStared: false,
        belongToTabIDs: [0, 1]
      },
      {
        dateCreated: Math.random(),
        content: '二',
        isFinished: true,
        isStared: false,
        belongToTabIDs: [1]
      },
      {
        dateCreated: Math.random(),
        content: '三',
        isFinished: false,
        isStared: false,
        belongToTabIDs: [2]
      },
      {
        dateCreated: Math.random(),
        content: '四',
        isFinished: true,
        isStared: false,
        belongToTabIDs: [1]
      },
      {
        dateCreated: Math.random(),
        content: '五',
        isFinished: true,
        isStared: false,
        belongToTabIDs: [0, 1]
      }
    ],
    prodiles: {
      user: {
        name: 'edsolater'
      }
    },
    coins: ['hhjk']
  },
  getters: {
    tags(state) {
      return state.tabs.slice(0, 3) //前三个是 TAG
    },
    repos(state) {
      return state.tabs.slice(3) // 除了前 3 个，都是 repo
    },
    currentTab(state) {
      return state.tabs[state.selectedIndex]
    },
    currentTodos(state) {
      return state.todos.filter(todo =>
        todo.belongToTabIDs.includes(state.selectedIndex)
      )
    }
  },
  mutations: {
    CANCEL_DROPDOWN(state) {
      state.hasDropdown = false
    },
    CREATE_REPO(state, { newRepo }) {
      state.tabs.push(newRepo)
    },
    CREATE_TODO(state, { newTodo }) {
      state.todos.push(newTodo)
    },
    SHOW_STORBAR(state) {
      state.tabs[state.selectedIndex].themes.hasSortBar = true
    },
    TOGGLE_DROPDOWN(state) {
      state.hasDropdown = !state.hasDropdown
    },
    UPDATE_SELECTEDINDEX(state, { index }) {
      state.selectedIndex = index
    },
    UPDATE_THEME(state, { newColorName }) {
      state.tabs[state.selectedIndex].themes.colorName = newColorName
    },
    UPDATE_TABTITLE(state, { index, title }) {
      state.tabs[index].title = title
    },
    SET_COINS(state, coins) {
      state.coins = coins
    }
  },
  actions: {
    $load_coins({ commit }) {
      // axios
      //   .get('//localhost:8080/results')
      //   // .get('/bd.json')
      //   .then(res => res.data)
      //   .then(coins => {
      //     commit('SET_COINS', coins)
      //   })

      fetch('//localhost:3000/todoListData')
        // .get('/bd.json')
        .then(res => res.json())
        .then(data => {
          commit('SET_COINS', data)
        })
    },
    $update_data(context) {
      // axios
      //   .put('//localhost:3000/results/3', {
      //     hello: new Date().toString()
      //   })
      //   .then(res => {
      //     context.commit('SET_COINS', res.data)
      //     context.dispatch('$load_coins')
      //   })
      const a = { hello: new Date().toString() }
      fetch('//localhost:3000/results/3', {
        method: 'PUT',
        body: JSON.stringify(a),
        headers: {
          "content-type": "application/json; chartset=utf-8"
        }
      }).then(res => {
        context.dispatch('$load_coins')
      })
    }
  }
})
