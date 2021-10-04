// Return the factorial of the provided integer.


function factorialize(num) {
  
  let factorial = 1
  if (num >=0) {
    for(let i=1; i<=num; i++) {
       factorial *= i 
      
    }
  }
  return factorial

  
}

factorialize(5);  //120