export default {
  showIndex(array, item) {
    return array.indexOf(item)
  },
  showIndexById(array, id) {
    return array.map(item => item.id).indexOf(id)
  },
  deleteItem(array, index) {
    array.splice(index, 1)
  },
  /**
   *  **判断数值类型**
   *
   * @param {any} variable 一个需要确定数据类型的变量
   * @returns {String} 首字母大写的变量类型。如： 'String', 'Date', 'Abc'（自定义类）
   * @example
   * showType('hello') => 'String'
   * showType(3) => 'Number'
   * showType(new Date()) => 'Date'
   * showType(new Abc()) => 'Abc'
   */
  showType(variable) {
    /**@public */
    const roughType = typeof variable
    if (roughType != 'object') {
      // 当不检测为 object 时
      if (roughType === 'number') {
        if (Number.isNaN(variable)) {
          return 'NaN'
        } else if (!Number.isFinite(variable)) {
          return 'Infinity'
        } else {
          return 'Number'
        }
      }
      return roughType.replace(/^\S/, capital => capital.toUpperCase())
    } else {
      // 当检测为 object 时
      const fullType = Object.prototype.toString.call(variable)
      const [, accurateType] = fullType.match(/(\w+)/g)
      if (accurateType !== 'Object') {
        // 当精细检测不为自定义对象时
        return accurateType
      } else {
        // 当精细检测是自定义对象时
        return variable.constructor.name
      }
    }
  },
  /**
   * **范围内随机数**
   * *一个参数：定长取值(从0开始)*
   * *两个参数：定下首尾范围, 包含首尾数*
   * *三个参数：包含首尾范围，与精确到小数位*
   * @example
   * random(3) => [0|1|2]
   * random(3,6) => [3|4|5|6]
   * random(3,6,2) => 3.01 ~ 5.99
   */
  random(number1, number2, number3) {
    function round(n, decimals = 0) {
      // 这个不是自己写的 FIXME:
      return Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`)
    }

    if (typeof number1 === 'number' && typeof number2 === 'undefined' && typeof number3 === 'undefined') {
      // 一个参数：定长取值(从0开始)
      const length = number1
      return Math.floor(Math.random() * length)
    } else if (typeof number1 === 'number' && typeof number2 === 'number' && typeof number3 === 'undefined') {
      // 两个参数：定下首尾范围, 包含首尾数
      const [start, end] = [number1, number2]
      return Math.floor(Math.random() * (end - start + 1) + start)
    } else if (typeof number1 === 'number' && typeof number2 === 'number' && typeof number3 === 'number') {
      // 三个参数：包含首尾范围，与精确到小数位
      const [start, end, precision] = [number1, number2, number3]
      const random = Math.random() * (end - start) + start
      return round(random, precision)
    }
  }
}
