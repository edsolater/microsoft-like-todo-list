export default {
  state: {
    treeData: {
      id: '1000',
      name: 'My Tree',
      children: [
        { id: '1', name: 'hello' },
        { id: '2', name: 'world' },
        {
          id: '3',
          name: 'this',
          children: [
            {
              id: '4',
              name: 'is',
              children: [{ id: '5', name: 'edsolater' }, { id: '6', name: 'from' }]
            },
            { id: '7', name: 'local' },
            { id: '8', name: 'host' },
            {
              id: '9',
              name: 'I',
              children: [{ id: '10', name: 'hate' }, { id: '11', name: 'money' }]
            }
          ]
        }
      ]
    },
    /**
     * 为了更清晰的逻辑，为了动态遍历，引入 “层级” 的概念
     * 使用数组为路径保存形式，天然地， “层级” 就是 数组index
     */
    currentPath: [] // 路径以数组形式保存，能重复调用数组的方法，逻辑比用字符串更清晰
  },
  mutations: {
    UPDATE_PATH(state, { mode, id, level, abovePath }) {
      // console.log(mode, id)
      // 预处理：每次更改地址前删除（包含本层级在内的）下级的所有地址项
      state.currentPath.splice(level)
      if (mode === 'add') {
        state.currentPath = abovePath.concat(id)
      }
      if (mode === 'remove') {
        // 无需进一步删除什么
      }
    }
  },
  actions: {}
}
