import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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
    }
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
    $cancel_dropdown(state) {
      state.hasDropdown = false
    },
    $create_repo(state, { newRepo }) {
      state.tabs.push(newRepo)
    },
    $create_todo(state, { newTodo }) {
      state.todos.push(newTodo)
    },
    $show_sortBar(state) {
      state.tabs[state.selectedIndex].themes.hasSortBar = true
    },
    $toggle_dropdown(state) {
      state.hasDropdown = !state.hasDropdown
    },
    $update_selectedIndex(state, { index }) {
      state.selectedIndex = index
    },
    $update_theme(state, { newColorName }) {
      state.tabs[state.selectedIndex].themes.colorName = newColorName
    },
    $update_tabTitle(state, { index, title }) {
      state.tabs[index].title = title
    }
  },
  actions: {}
})
