/*
  Perform a search and replace on the sentence using the arguments provided and returns the new sentence.

  First argument is the sentence to perform the search and replace on.
  Second argument is the word that will be replaced (before).
  Third argument is the word that will replace the second argument (after).

  Note: It preserves the case of the first character in the original word when it is replaced. 
  For example if you mean to replace the word Book with the word dog, it should be replaced as Dog
*/

function myReplace(str, before, after) {
  const regex = /[A-Z]/

  const toUpperOrLower = (word) => {
    let firstLetter = ""
    const restOftheWord = word.slice(1)

    if(regex.test(before) === true) {
      firstLetter = word.slice(0, 1).toUpperCase()
    } else if (regex.test(after) === true) {
      firstLetter = word.slice(0, 1).toLowerCase()
    }
    after = firstLetter + restOftheWord
    return after
  }

  if (regex.test(before) === true) {
    toUpperOrLower(after)
    str = str.replace(before, after)
  } else {
    if(regex.test(after) === true) {
      toUpperOrLower(after)
      str = str.replace(before, after)
    } else {
      str = str.replace(before, after)
    }
  }

  return str
  
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")) // He is Sitting on the couch