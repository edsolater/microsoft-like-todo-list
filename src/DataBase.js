const Data = {
  todoIDCounter: 10,
  tabIDCounter: 10,
  hasDropdown: false,
  styleLibrary: {
    blueviolet: {
      backgroundImage: 'linear-gradient(to right, mediumslateblue, dodgerblue)'
    },
    orange: {
      backgroundImage: 'linear-gradient(to right, #eb6566, #edbf9c)'
    },
    orchid: {
      backgroundImage: 'linear-gradient(to right, darkorchid, orchid)'
    },
    springgreen: {
      backgroundImage: 'linear-gradient(to right, #5da848, #adde69)'
    },
    dodgerblue: {
      backgroundImage: 'linear-gradient(to right, deepskyblue, lightskyblue)'
    }
  },
  tabs: [
    // 这些是锁定的特殊tags
    {
      index: 0,
      title: '我的一天',
      isEditable: false,
      themes: {
        colorName: 'springgreen',
        backgroundImage: 'car',
        hasSortBar: true
      }
    },
    {
      index: 1,
      title: '重要',
      isEditable: false,
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
}

export default Data
