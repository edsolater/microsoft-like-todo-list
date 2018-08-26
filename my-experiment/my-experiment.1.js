const startTime = Date.now()

const fibonacci = (function outer() {
  const cache = [0, 1]

  return function fibonacci(n) {
    let i = 2
    while (i <= n) {
      const newValue = cache[i - 1] + cache[i - 2]
      cache.push(newValue)
      i++
    }
    return cache[n]
  }
})()

console.log(fibonacci(35))

const endTime = Date.now()
console.log(endTime - startTime)
