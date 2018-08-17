const testInput = [[1, 5], [10, 20], [1, 6], [16, 19], [5, 11]] // =>19

function sumIntervals(intervals) {
  return intervals
  .sort((a, b) => a[0] - b[0])
  .reduce(
    (acc, interval) => {
      if (interval[1] > acc.top) {
        acc.total += interval[1] - Math.max(interval[0], acc.top)
      }
      acc.top = Math.max(interval[1], acc.top)
      return acc
    },
    { total: 0, top: 0 }
  ).total
}

console.log(sumIntervals(testInput))
