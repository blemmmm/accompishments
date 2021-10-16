// Converts the given number into a roman numeral.

function convertToRoman(num) {
  let numToRoman = ""

  while (num > 0) {
    if (num >= 1000) {
      numToRoman += "M"
      num -= 1000
    } else if (num >= 900) {
      numToRoman += "CM"
      num -= 900
    } else if (num >= 500) {
      numToRoman += "D"
      num -= 500
    } else if (num >= 400) {
      numToRoman += "CD"
      num -= 400
    } else if (num >= 100) {
      numToRoman += "C"
      num -= 100
    } else if (num >= 90) {
      numToRoman += "XC"
      num -= 90
    } else if (num >= 50) {
      numToRoman += "L"
      num -= 50
    } else if (num >= 40){
      numToRoman += "XL"
      num -= 40
    } else if (num >= 10) {
      numToRoman += "X"
      num -= 10
    } else if (num >= 9) {
      numToRoman += "IX" 
      num -= 9
    } else if (num >= 5) {
      numToRoman += "V"
      num -= 5
    } else if (num >= 4) {
      numToRoman += "IV"
      num -= 4
    } else if (num >= 1) {
      numToRoman += "I"
      num -= 1
    }
  }
 return numToRoman;
}

convertToRoman(36); // XXXVI