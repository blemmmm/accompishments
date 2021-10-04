function reverseString(str) {
  const stringArray = str.split("")
  let newArray = []
  for(let i=stringArray.length-1; i>=0; i--) {
    newArray.push(stringArray[i])
  }
  return newArray.join("")
}

reverseString("hello");