function random(number1, number2, number3) {
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

for (let i of Array(10)) {
  console.log(random(3))
}
