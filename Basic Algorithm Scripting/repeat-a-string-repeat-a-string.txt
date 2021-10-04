function repeatStringNumTimes(str, num) {
  let finalString = ""
  if (num > 0) {
    for(let i=1; i<=num; i++) {
      finalString += str
    }
  } else {
    return ""
  }
  
  return finalString
}

repeatStringNumTimes("abc", 0);