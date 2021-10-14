
// Checks if the predicate (second argument) is truthy on all elements of a collection (first argument).

function truthCheck(collection, pre) {
  const getkeys = collection.map((col) => {
    return col[pre]
  })
  const check = getkeys.every(curr => curr ?  true : false)
  return check;
}

truthCheck([{"single": "double"}, {"single": NaN}], "single") // false