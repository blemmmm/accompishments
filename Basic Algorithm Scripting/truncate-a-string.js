// Truncates a string (first argument) if it is longer than the given maximum string length (second argument). 
// Truncated string returns  with a ... ending.
function truncateString(str, num) {
  let truncate = str.slice(0, num)
  if(str.length <= num) { 
    return truncate
  } else {
    return truncate + "..."
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)  // "A-tisket a-tasket A green and yellow basket"