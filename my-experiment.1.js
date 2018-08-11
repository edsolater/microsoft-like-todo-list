let val = 1
var obj = {
  something: this,
  dbl: function() {
    this.val *= 2
    val *= 2
    console.log(val)
    console.log(this.val)
    console.log(this.something)
  }
}
// 说出下面的输出结果
obj.dbl()
console.log(this.val)
var func = obj.dbl
func()
