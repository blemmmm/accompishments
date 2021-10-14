/*
  Compares two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
  In other words, it returns the symmetric difference of the two arrays.
*/

function diffArray(arr1, arr2) {
  let newArr = [];

  const combinedArr = arr1.concat(arr2)
  const sorted = combinedArr.sort()

  for(let i=0; i<sorted.length; i++) {
    if (sorted[i] === sorted[i+1]) {
      i++
      continue
    } else {
      newArr.push(sorted[i])
    }
  }

  return newArr;
}

diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);  // [4, "piglet"]