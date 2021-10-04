function confirmEnding(str, target) {
  const regex = new RegExp(`${target}$`, "gi")
  const result = regex.test(str)
  if(result) {
    return result
  } else {
    return result
  }
  
}

confirmEnding("Abstraction", "action");