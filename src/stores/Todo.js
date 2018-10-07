import _fn from '@/assets/myFunctions.js'

export default {
  state: {
    uploadComplete: false,
    downloadComplete: false,
    hasDropdown: false,
    hasDropdown2: false,
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
        id: 0,
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
        id: 1,
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
        id: 2,
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
    todosBelongToThisTab: state => state.todos.filter(todo => todo.belongToTabIDs.includes(state.selectedIndex))
  },

  mutations: {
    HIDE_DROPDOWN(state) {
      state.hasDropdown = false
    },
    HIDE_DROPDOWN2(state) {
      state.hasDropdown2 = false
    },
    CREATE_TAB(state, { newTab }) {
      state.tabs.push(newTab)
    },
    CREATE_TODO(state, { newTodo }) {
      state.todos.push(newTodo)
    },
    DELETE_TAB(state, { index }) {
      state.tabs.splice(index, 1)
    },
    DELETE_TODO(state, { todo }) {
      const index = _fn.showIndex(state.todos, todo)
      _fn.deleteItem(state.todos, index)
    },
    SHOW_SORTBAR(state) {
      state.tabs[state.selectedIndex].themes.hasSortBar = true
    },
    TOGGLE_DROPDOWN(state) {
      state.hasDropdown = !state.hasDropdown
    },
    SHOW_DROPDOWN2(state) {
      state.hasDropdown2 = true
    },
    TOGGLE_isStared(state, { todo }) {
      const index = _fn.showIndex(state.todos, todo)
      state.todos[index].isStared = !state.todos[index].isStared
    },
    TOGGLE_isFinished(state, { todo }) {
      const index = _fn.showIndex(state.todos, todo)
      state.todos[index].isFinished = !state.todos[index].isFinished
    },
    TOGGLE_HASSORTBAR(state) {
      state.tabs[state.selectedIndex].themes.hasSortBar = !state.tabs[state.selectedIndex].themes.hasSortBar
    },
    UPDATE_SELECTEDINDEX(state, { index }) {
      state.selectedIndex = index
    },
    UPDATE_THEME(state, { newColorName }) {
      state.tabs[state.selectedIndex].themes.colorName = newColorName
    },
    UPDATE_TABTITLE(state, { id, title }) {
      const index = _fn.showIndexById(state.tabs, id)
      state.tabs[index].title = title
    },
    SET_DATA(state, { property, data }) {
      state[property] = data
    }
  },

  actions: {
    /**
     *  一次加载所有数据
     */
    download_data({ commit }) {
      fetch(`//localhost:3000/article`)
        .then(res => res.json())
        .then(info => {
          console.log(info)
          return info
        })
        .then(data => {
          for (let property in data) {
            commit('SET_DATA', {
              property,
              data: data[property]
            })
          }
          return data
        })
        .then(() => alert('download_data complete'))
    },
    /**
     * 暂且使用整体一次替换所有数据
     */
    upload_data({ state }) {
      fetch('//localhost:3000/all', {
        method: 'PUT',
        body: JSON.stringify(state), // 因为需要动态改变，property 不能使用 "." 符
        headers: {
          'content-type': 'application/json; chartset=utf-8'
        }
      })
        .then(() => alert('success'))
        .catch(error => alert('wrong', error))
    },

    delete_tab({ state, commit }, { tab }) {
      const index = _fn.showIndex(state.tabs, tab)
      if (index <= state.selectedIndex) {
        commit('UPDATE_SELECTEDINDEX', { index: state.selectedIndex - 1 })
      }
      commit('DELETE_TAB', { index })
    },
    update_selectedIndexById({ state, commit }, { id }) {
      const index = _fn.showIndexById(state.tabs, id)
      commit('UPDATE_SELECTEDINDEX', { index })
    },

    download_image() {
      // 抓取图片
      fetch(`/whiteEye.png`)
        .then(res => res.blob())
        .then(imageBlob => {
          // 创建图片便签，src载入生成的虚拟URL，并贴到DOM上
          const image = document.createElement('img')
          image.onload = function() {
            URL.revokeObjectURL(image.src)
          }
          image.src = URL.createObjectURL(imageBlob)
          document.body.appendChild(image)
        })
    }
  }
}
