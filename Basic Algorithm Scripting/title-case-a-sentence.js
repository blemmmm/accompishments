// Returns the provided string with the first letter of each word capitalized.

function titleCase(str) {
  const arrString = str.split(" ")
  for (let i=0; i<arrString.length; i++) {
    let subStr1 = arrString[i].substring(0, 1).toUpperCase()
    let subStr2 = arrString[i].substring(1).toLowerCase()
    arrString[i] = subStr1+subStr2
  }
  return arrString.join(" ")
}

titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");  //Here Is My Handle Here Is My Spout