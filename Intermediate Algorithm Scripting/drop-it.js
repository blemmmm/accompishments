/*
  Iterates through and remove each element starting from the first element (the 0 index) 
  until the function func returns true when the iterated element is passed through it.

  Then returns the rest of the array once the condition is satisfied, 
  otherwise, returns as an empty array.
*/

function dropElements(arr, func) {

  const index = arr.findIndex(func);

  return index === -1 ? [] : arr.slice(index);
}

dropElements([1, 2, 3, 4], function(n) {return n >= 3;}); // [3, 4]