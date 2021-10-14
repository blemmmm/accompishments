
// Removes all elements from the initial array that are of the same value as these arguments.


function destroyer() {

  const getAllArgs = Array.from(arguments)
  const firstIndex = getAllArgs[0]
  const secondIndex = getAllArgs.slice(1)

  const filtered = firstIndex.filter(value => !secondIndex.includes(value))
  return filtered;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3); // [1, 1]