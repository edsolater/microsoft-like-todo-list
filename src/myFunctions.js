export default {
  showIndex(array, item) {
    return array.indexOf(item)
  },
  showIndexById(array, id) {
    return array.map(item=>item.id).indexOf(id)
  },
  deleteItem(array, index) {
    array.splice(index, 1)
  }
}
