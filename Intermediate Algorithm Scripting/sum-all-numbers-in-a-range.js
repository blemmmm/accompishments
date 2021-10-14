// Returns the sum of two numbers plus the sum of all the numbers between them. 

function sumAll(arr) {
  const sortedArr = arr.sort((a, b) => {
    if (a < b) {
      return -1
    } else if (a > b) {
      return 1
    } else {
      return 0
    }
  })
  const n = sortedArr.reduce((x,y) => (y - x) + 1)
  const sum = n * sortedArr.reduce((x,y) => (x + y) / 2)

  return sum
}

sumAll([10, 5]); // 45