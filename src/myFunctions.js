export default {
  showIndex(array, item) {
    return array.indexOf(item)
  },
  deleteItem(array, index) {
    array.splice(index, 1)
  },
  toggleBoolean(boolean) {
    boolean = !boolean
  }
}
