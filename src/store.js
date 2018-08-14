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
    backgroundColors: [
      {
        colorName: 'dodgerblue',
        style: {
          backgroundImage: 'linear-gradient(to right, mediumslateblue, dodgerblue)'
        }
      },
      {
        colorName: 'coral',
        style: {
          backgroundImage: 'linear-gradient(to right, #eb6566, #edbf9c)'
        }
      },
      {
        colorName: 'orchid',
        style: {
          backgroundImage: 'linear-gradient(to right, darkorchid, orchid)'
        }
      },
      {
        colorName: 'forestgreen',
        style: {
          backgroundImage: 'linear-gradient(to right, #5da848, #adde69)'
        }
      },
      {
        colorName: 'deepskyblue',
        style: {
          backgroundImage: 'linear-gradient(to right, deepskyblue, lightskyblue)'
        }
      }
    ],
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
      }
    ],
    todos: [
      {
        dateCreated: Math.random(),
        content: `haven't completed yet`,
        isFinished: false,
        isStared: false,
        belongToTabIDs: [0, 1, 2]
      }
    ],
    profiles: {
      user: {
        name: 'no data'
      }
    }
  },

  getters: {
    tags: state => state.tabs.slice(0, 3),
    repos: state => state.tabs.slice(3),
    currentTab: state => state.tabs[state.selectedIndex],
    currentTodos: state => state.todos.filter(todo => todo.belongToTabIDs.includes(state.selectedIndex))
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
    SET_DATA(state, { property, data }) {
      state[property] = data
    }
  },

  actions: {
    $load_data({ commit }) {
      fetch(`//localhost:3000/all`)
        // .get('/bd.json')
        .then(res => res.json())
        .then(data => {
          for (let property in data) {
            commit('SET_DATA', {
              property,
              data: data[property]
            })
          }
        })
    },
    /**
     * 暂且使用整体一次替换所有数据
     */
    $upload_data({ state }) {
      fetch('//localhost:3000/all', {
        method: 'PUT',
        body: JSON.stringify(state), // 因为需要动态改变，property 不能使用 "." 符
        headers: {
          'content-type': 'application/json; chartset=utf-8'
        }
      }).then(res => {
        console.log(state)
        console.log(JSON.stringify(state))
        console.log(res, `uploaded`)
      })
    }
  }
})
