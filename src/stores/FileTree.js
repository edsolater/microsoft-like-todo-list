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
    currentPath: ''
  },
  mutations: {
    UPDATE_PATH(state, { mode, id }) {
      console.log(mode, id)
      if (mode === 'add') {
        state.currentPath += `/${id}`
      }
      if (mode === 'remove') {
        console.log('start to remove')
        const index = state.currentPath.indexOf(id)
        console.log(`index:`, index)
        state.currentPath = state.currentPath.slice(0, index - 1) //  "-1" 是因为要去除路径的 "/"
      }
    }
  },
  actions: {}
}
