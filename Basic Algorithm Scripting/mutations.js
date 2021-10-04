function mutation(arr) {
  const index1 = arr[0].toLowerCase()
  const index2 = arr[1].toLowerCase()
  
  if(index1 === index2) {
    return true
  } else {
    const exp = index2.split("")
    for(let i=0; i<exp.length; i++) {
      exp[i] = `(?=.*${exp[i]})`
    }
    const regex = new RegExp(exp.join(""), "i")
    const result = regex.test(index1)
    return result
  }
}

mutation(["Mary", "Army"])