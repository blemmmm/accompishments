/*
  Matches the missing element to the provided character.  

  "The DNA strand is missing the pairing element. 
  Take each character, get its pair, and return the results as a 2d array.

  Base pairs are a pair of AT and CG."
*/

function pairElement(str) {
  let newArray = []
  const strArr = str.split("") 

  strArr.map((base) => {
    if (base === 'A') {
      newArray.push([base, 'T'])
    } else if (base === 'T') {
      newArray.push([base, 'A'])
    } else if (base === 'C') {
      newArray.push([base, 'G'])
    } else if (base === 'G') {
      newArray.push([base, 'C'])
    }
  })

  return newArray;
}

pairElement("CTCTA"); // [["C", "G"], ["T", "A"], ["C", "G"], ["T", "A"], ["A", "T"]]