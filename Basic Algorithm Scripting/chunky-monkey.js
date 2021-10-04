function chunkArrayInGroups(arr, size) {
  //const splitArr = arr.slice(size)
  let newArr = []
  let tempArr = []
  for(let i=0; i<arr.length; i += size) {
    newArr = arr.slice(i, i+size)
    tempArr.push(newArr)
  }

  return tempArr
  
  
  
  
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)