 //  Takes two or more arrays and returns a new array of unique values in the order of the original provided arrays


function uniteUnique() {
  const getAllArgs = Array.from(arguments)
  const combineArgs = Object.keys(getAllArgs)
    .reduce((arr, key) => {
      return arr.concat(getAllArgs[key]);
    }, []);
  const unique = [...new Set(combineArgs)]; //returns unique values

  return unique;
  
}

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]); // [1, 2, 3, 5, 4, 6, 7, 8]