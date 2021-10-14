// Flattens a nested array. 

function steamrollArray(arr) {
  return arr.reduce((a, b) => a.concat(Array.isArray(b) ? steamrollArray(b) : b), [])
}

console.log(steamrollArray([[["a"]], [["b"]]])); // ["a", "b"]