// A function that looks through an array arr and returns the first element in it that passes a 'truth test'.

function findElement(arr, func) {
  let num = 0
  for (let i=0; i<arr.length; i++) {
    if(func(arr[i])) {
      num = arr[i]
      return num
    } else {
      continue
    }
  }

}

findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) //8