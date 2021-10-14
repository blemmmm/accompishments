/*
  Creates a function that sums two arguments together. 
  If only one argument is provided, it returns a function that expects one argument and returns the sum.
*/


function addTogether() {

  const [arg1, arg2] = arguments

  if(typeof(arg1) !== "number") {
    return undefined
  } else if (arg2 === undefined) {
    function secondArg(arg2) {
      if (typeof arg2 ==="number") {
        return arg1 + arg2
      } else {
        return undefined
      }
    }
    return secondArg;
  } else if (typeof(arg2) !== "number") {
    return undefined
  } else {
    return arg1 + arg2
  }

}

addTogether(2, 3); // 5