// Inserts elements at index n of the second array

function frankenSplice(arr1, arr2, n) {
  const finalArr = [...arr2]
  finalArr.splice(n, 0, ...arr1)
  return finalArr
}

frankenSplice([1, 2, 3], [4, 5], 1)  //[4, 1, 2, 3, 5]