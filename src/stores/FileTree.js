import Vue from 'vue'
export default {
  state: {
    treeData: {
      id: '1000',
      titleName: 'My Tree',
      children: [
        { id: '1', titleName: 'hello' },
        { id: '2', titleName: 'world' },
        {
          id: '3',
          titleName: 'this',
          children: [
            {
              id: '4',
              titleName: 'is',
              children: [{ id: '5', titleName: 'edsolater' }, { id: '6', titleName: 'from' }]
            },
            { id: '7', titleName: 'local' },
            { id: '8', titleName: 'host' },
            {
              id: '9',
              titleName: 'I',
              children: [{ id: '10', titleName: 'hate' }, { id: '11', titleName: 'money' }]
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
    },
    CREATE_CHILDREN(state, {currentItem}){
      Vue.set(currentItem, 'children', [])
    }
  },
  actions: {}
}
