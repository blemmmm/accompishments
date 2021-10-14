/*
  Pig Latin is a way of altering English Words. The rules are as follows:

  - If a word begins with a consonant, 
    take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
  
  - If a word begins with a vowel, just add way at the end.

  This code translates the provided string to Pig Latin. 
*/

function translatePigLatin(str) {
  let testRegex = /(^[a,e,i,o,u])/
  const testString = testRegex.test(str)
  
  if (testString === true) {
    return `${str}way`;
  } else {
    testRegex = /[a,e,i,o,u]/
    if (testRegex.test(str) === true) {
      const vowelIndex = str.indexOf(str.match(testRegex))
      return `${str.slice(vowelIndex)}${str.slice(0, vowelIndex)}ay`
    } else {
      return `${str}ay`
    }
    
  }
  
}

translatePigLatin("schwartz"); // artzschway