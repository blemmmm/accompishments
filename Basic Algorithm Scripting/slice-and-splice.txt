function frankenSplice(arr1, arr2, n) {
  const finalArr = [...arr2]
  finalArr.splice(n, 0, ...arr1)
  return finalArr
}

frankenSplice([1, 2, 3, 4], [], 0)