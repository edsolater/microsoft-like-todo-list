module.exports = () => {
  return {
    todoListData: {
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
          backgroundImage:
            'linear-gradient(to right, deepskyblue, lightskyblue)'
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
    }
  }
}
