// Converts a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  const strTrim = str.trim()
  let strToArray = strTrim.split(/\s+|_/g)

  if (strTrim.match(/([a-z])([A-Z])/g)) {
    const addSpace = str.replace(/([a-z])([A-Z])/g, '$1 $2')
    strToArray = addSpace.split(/\s+/g)
  }

  const arrJoined = strToArray.join("-").toLowerCase()
  return arrJoined;
}

spinalCase('AllThe-small Things'); // all-the-small-things