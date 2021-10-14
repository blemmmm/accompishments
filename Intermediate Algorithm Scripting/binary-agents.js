// Returns an English translated sentence of the passed binary string.

function binaryAgent(str) {
  const splitString = str.split(" ")
    .map((binary) => {
      return String.fromCharCode(parseInt(binary, 2))
    })
    .join("")

  return splitString;
}

binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") // I love FreeCodeCamp!