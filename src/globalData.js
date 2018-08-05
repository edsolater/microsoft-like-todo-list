const Data = {
  todoIDCounter: 10,
  tabIDCounter: 10,

  tabs: [
    // 这些是锁定的特殊tags
    {
      id: 0,
      title: '我的第一天',
      isEditable: false,
    },
    {
      id: 1,
      title: '我的第二天',
      isEditable: false,
    },
    {
      id: 2,
      title: '我的第三天',
      isEditable: false,
    },
    // 这些是非锁定的普通repos
    {
      id: 10,
      title: '我的第四天',
      isEditable: true,
    },
    {
      id: 11,
      title: '我的第五天',
      isEditable: true,
    },
  ],
  todos: [
    {
      dateCreated: 1533482311175,
      content: `一与二`,
      isFinished: false,
      isStared: false,
      belongToTabIDs: [0, 1],
    },
    {
      dateCreated: 1533482311175,
      content: `二`,
      isFinished: false,
      isStared: false,
      belongToTabIDs: [1],
    },
    {
      dateCreated: 1533482311175,
      content: `三`,
      isFinished: false,
      isStared: false,
      belongToTabIDs: [2],
    },
    {
      dateCreated: 1533482311175,
      content: `二`,
      isFinished: false,
      isStared: false,
      belongToTabIDs: [1],
    }
  ],
  prodiles: {
    user: {
      name: 'edsolater',
    }
  },
}

export default Data