const Data = {
  todoIDCounter: 10,
  tabIDCounter: 10,

  // IDGenerator: () => Date.now(),
  tabs: [
    // 这些是锁定的特殊tags
    {
      index: 0,
      title: '我的一天',
      isEditable: false,
      themes:{
        color:'blue',
        backgroundImage: 'car',
        hasSortBar: true
      },
    },
    {
      index: 1,
      title: '重要',
      isEditable: false,
      themes:{
        color:'blue',
        backgroundImage: 'car',
        hasSortBar: true
      },
    },
    {
      index: 2,
      title: 'To-Do',
      isEditable: false,
      themes:{
        color:'blue',
        backgroundImage: 'car',
        hasSortBar: true
      },
    },
    // 这些是非锁定的普通repos
    {
      index: 3,
      title: '示例 repo',
      isEditable: false,
      themes:{
        color:'blue',
        backgroundImage: 'car',
        hasSortBar: true
      },
    },
  ],
  todos: [
    {
      dateCreated: 1533482311175,
      content: '一与二',
      isFinished: false,
      isStared: false,
      belongToTabIDs: [0, 1]
    },
    {
      dateCreated: 1533482311175,
      content: '一与二',
      isFinished: false,
      isStared: false,
      belongToTabIDs: [0, 1]
    },
    {
      dateCreated: 1533482311175,
      content: '一与二',
      isFinished: false,
      isStared: false,
      belongToTabIDs: [0, 1],
    },
    {
      dateCreated: 1533482311175,
      content: '一与二',
      isFinished: false,
      isStared: false,
      belongToTabIDs: [0, 1],
    },
    {
      dateCreated: 1533482311175,
      content: '一与二',
      isFinished: false,
      isStared: false,
      belongToTabIDs: [0, 1],
    },
    {
      dateCreated: 1533482311175,
      content: '一与二',
      isFinished: false,
      isStared: false,
      belongToTabIDs: [0, 1],
    },
    {
      dateCreated: 1533482311175,
      content: '一与二',
      isFinished: false,
      isStared: false,
      belongToTabIDs: [0, 1],
    },
    {
      dateCreated: 1533482311175,
      content: '一与二',
      isFinished: false,
      isStared: false,
      belongToTabIDs: [0, 1],
    },
    {
      dateCreated: 1533482311175,
      content: '一与二',
      isFinished: false,
      isStared: false,
      belongToTabIDs: [0, 1],
    },
    {
      dateCreated: 1533482311175,
      content: '一与二',
      isFinished: false,
      isStared: false,
      belongToTabIDs: [0, 1],
    },
    {
      dateCreated: 1533482311175,
      content: '一与二',
      isFinished: false,
      isStared: false,
      belongToTabIDs: [0, 1],
    },
    {
      dateCreated: 1533482311175,
      content: '一与二',
      isFinished: false,
      isStared: false,
      belongToTabIDs: [0, 1],
    },
    {
      dateCreated: 1533482311175,
      content: '一与二',
      isFinished: false,
      isStared: false,
      belongToTabIDs: [0, 1],
    },
    {
      dateCreated: 1533482311175,
      content: '一与二',
      isFinished: false,
      isStared: false,
      belongToTabIDs: [0, 1],
    },
    {
      dateCreated: 1533482311175,
      content: '一与二',
      isFinished: false,
      isStared: false,
      belongToTabIDs: [0, 1],
    },
    {
      dateCreated: 1533482311175,
      content: '一与二',
      isFinished: false,
      isStared: false,
      belongToTabIDs: [0, 1],
    },
    {
      dateCreated: 1533482311175,
      content: '一与二',
      isFinished: false,
      isStared: false,
      belongToTabIDs: [0, 1],
    },
    {
      dateCreated: 1533482311175,
      content: '一与二',
      isFinished: false,
      isStared: false,
      belongToTabIDs: [0, 1],
    },
    {
      dateCreated: 1533482311175,
      content: '二',
      isFinished: true,
      isStared: false,
      belongToTabIDs: [1],
    },
    {
      dateCreated: 1533482311175,
      content: '三',
      isFinished: false,
      isStared: false,
      belongToTabIDs: [2],
    },
    {
      dateCreated: 1533482311175,
      content: '四',
      isFinished: true,
      isStared: false,
      belongToTabIDs: [1],
    },
    {
      dateCreated: 1533482311175,
      content: '五',
      isFinished: true,
      isStared: false,
      belongToTabIDs: [0, 1],
    }
  ],
  prodiles: {
    user: {
      name: 'edsolater',
    }
  },
}

export default Data