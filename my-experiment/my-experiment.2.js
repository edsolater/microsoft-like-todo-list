const test = 876863

function formatDuration(timeNumber) {
  // at beining
  if (timeNumber === 0) return "now"
  let timeString = []
  let remainingSeconds = timeNumber
  // parse timeNumber
  const seconds = remainingSeconds % 60
  remainingSeconds = parseInt(remainingSeconds / 60)
  timeString.unshift(seconds)
  if (remainingSeconds > 0) {
    const minutes = remainingSeconds % 60
    remainingSeconds = parseInt(remainingSeconds / 60)
    timeString.unshift(minutes)
    if (remainingSeconds > 0) {
      const hours = remainingSeconds % 60
      remainingSeconds = parseInt(remainingSeconds / 60)
      timeString.unshift(hours)
      if (remainingSeconds > 0) {
        const days = remainingSeconds % 24
        remainingSeconds = parseInt(remainingSeconds / 24)
        timeString.unshift(days)
        if (remainingSeconds > 0) {
          const years = remainingSeconds % 365
          remainingSeconds = parseInt(remainingSeconds / 365)
          timeString.unshift(years)
        }
      }
    }
  }
  // parse timeString
  return timeString
}

console.log(formatDuration(test))