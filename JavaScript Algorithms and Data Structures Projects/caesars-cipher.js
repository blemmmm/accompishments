// Takes a ROT13 encoded string as input and returns a decoded string.

function rot13(str) {
  const strToArr = str.split("")
  const charToAscii = strToArr.map((str, val, i) => str.charCodeAt(i))
  const asciiToRot = charToAscii.map((num) => {
    if (num > 77) {
      return num - 13
    } else if (num === 32 || num > 32 && num < 65) {
      return num
    } else {
      return num + 13
    }
  })
  const asciiToChar = asciiToRot.map((num) => String.fromCharCode(num))
  const arrToStr = asciiToChar.join("")
  return arrToStr;
}

rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."); // THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.