;['A', 'B', 'C', 'B', 'A'].reduce((o, k) => {
  k in o ? o[k]++ : (o[k] = 1)
  return o
}, {})


Array(100)
  .fill(undefined)
  .map((_, i) => i)

[('1', '2', 2, 0, -0, NaN, NaN, [], [], {}, {}, undefined, null)].reduce(
  (m, k) => {
    return m.set(k, (m.get(k) || 0) + 1)
  },
  new Map(),
)

const Φa = {}