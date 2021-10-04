// Returns an array consisting of the largest number from each provided sub-array.

function largestOfFour(arr) {
  let largestArr = []
  let maxIndex = 0
  for (let i=0; i<arr.length; i++) {
    for (let j=0; j<arr[i].length; j++) {
      if(arr[i][j] > arr[i][maxIndex]) {
        maxIndex = j
      } else {
        continue
      }
    }
    largestArr.push(arr[i][maxIndex])
    
  }
  return largestArr
}

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])  //[25, 48, 21, -3]