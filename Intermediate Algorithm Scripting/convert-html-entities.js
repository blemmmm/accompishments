/* 
  Converts the characters &, <, >, " (double quote), and ' (apostrophe), 
  in a string to their corresponding HTML entities.
*/

function convertHTML(str) {

  if(/&/g.test(str) === true) {
    return str.replaceAll("&", "&amp;")
  } else if (/</g.test(str) === true && />/g.test(str) === false) {
    return str.replaceAll("<", "&lt;")
  } else if (/>/g.test(str) === true && /</g.test(str) === false) {
    return str.replaceAll(">", "&gt;")
  } else if (/"/g.test(str) === true) {
    return str.replaceAll('"', "&quot;")
  } else if(/'/g.test(str) === true) {
    return str.replaceAll("'", "&apos;")
  } else if(/[<>]/g.test(str) === true) {
    return str.replaceAll("<", "&lt;").replaceAll(">", "&gt;")
  } else {
    return str
  }
}

convertHTML("Dolce & Gabbana"); // Dolce &amp; Gabbana