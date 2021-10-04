// Remove all falsy values from an array.


function bouncer(arr) {
  for (let i=0; i<arr.length; i++) {
    if(Boolean(arr[i]) === false) {
      arr.splice(i, 1)
      i--
    } else {
      continue;
    }
    
  }
  return arr
  
  
}

bouncer([null, NaN, 1, 2, undefined]) //[1, 2]