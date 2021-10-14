// Finds the missing letter in the passed letter range and return it.
// If all letters are present in the range, it returns undefined.

function fearNotLetter(str) {
  const strArray = Array.from(str)
  const firstCharCode = strArray[0].charCodeAt()
  let strIndex = 0

  for (let i=firstCharCode; i < firstCharCode + strArray.length+1; i++) {
    const currLetter = String.fromCharCode(i).toLowerCase()
    const arrLetter = strArray[strIndex]

    if(currLetter === arrLetter) {
      strIndex++
      if(strIndex === strArray.length) {
        return undefined
      }
    } else {
      return currLetter
    }
  }
}

fearNotLetter("abcdefghijklmnopqrstuvwxyz"); // undefined