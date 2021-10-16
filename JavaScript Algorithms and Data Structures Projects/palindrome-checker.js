// Returns true if the given string is a palindrome. Otherwise, returns false.

function palindrome(str) {
  const regex = /\s|\W|_/gi
  const removeChars = str.replace(regex, "").toLowerCase()
  const strToArr = removeChars.split("")
  const reversedStr = strToArr.reverse().join("").toLowerCase()
  console.log(removeChars, reversedStr)
  if (removeChars === reversedStr) {
    return true
  } else {
    return false
  }
}



palindrome("A man, a plan, a canal. Panama"); // true