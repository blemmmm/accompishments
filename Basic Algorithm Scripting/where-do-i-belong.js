/* 
  Returns the lowest index at which a value (second argument) 
  should be inserted into an array (first argument) once it has been sorted.
*/

function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b)
  let index = 0
  for (let i=0; i<arr.length; i++) {   
    if(arr[i] <= num && num < arr[i+1]) {
     if (arr[i] === num) {
       index = i
     } else {
       index = i+1
     }
    } else if(num > arr[arr.length-1]) {
      index = i+1
    }else {
      continue
    }
  }
  console.log(index)
  console.log(arr)
  return index
}

getIndexToIns([2, 5, 10], 15)  //3