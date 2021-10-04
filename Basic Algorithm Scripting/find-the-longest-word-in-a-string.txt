function findLongestWordLength(str) {
  const tempArray = str.split(" ")
  let maxIndex = 0

  for(let i=0; i<tempArray.length; i++) {
    if(tempArray[i].length > tempArray[maxIndex].length) {
      maxIndex = i
    } else {
      continue
    }
  }
  return tempArray[maxIndex].length
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");