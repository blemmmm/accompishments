// Repeats a given string str (first argument) for num times (second argument).

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

repeatStringNumTimes("abc", 3);  //abcabcabc