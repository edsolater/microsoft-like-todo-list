/**
 *  判断数值类型
 *
 *  可以区分出基本数据类型, Null, NaN, Infinity, 内置对象(build-in objects), 自定义类
 * @param {any} variable 一个需要确定数据类型的变量
 * @returns {String} 首字母大写的变量类型。如： 'String', 'Date', 'Abc'（自定义类）
 */
function input(variable) {
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
    const [category, accurateType] = fullType.match(/(\w+)/g)
    if (accurateType !== 'Object') {
      // 当精细检测不为自定义对象时
      return accurateType
    } else {
      // 当精细检测是自定义对象时
      return variable.constructor.name
    }
  }
}
