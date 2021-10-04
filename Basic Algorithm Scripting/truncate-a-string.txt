function truncateString(str, num) {
  let truncate = str.slice(0, num)
  if(str.length <= num) { 
    return truncate
  } else {
    return truncate + "..."
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length))