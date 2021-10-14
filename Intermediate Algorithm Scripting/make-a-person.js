/*
  Fill in the object constructor with the following methods below:

  - getFirstName()
  - getLastName()
  - getFullName()
  - setFirstName(first)
  - setLastName(last)
  - setFullName(firstAndLast)

  Run the tests to see the expected output for each method. 
  The methods that take an argument must accept only one argument and it has to be a string. 
  These methods must be the only available means of interacting with the object.

*/


var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let fullName = firstAndLast.split(" ")
  let first = fullName[0]
  let last  = fullName[1]
  this.getFullName = function() {
    return first + " " + last;
  };

  this.getFirstName = function() {
    return first
  }

  this.getLastName = function() {
    return last
  }

  this.setFirstName = function(name) {
    first = name
  }

  this.setLastName = function(name) {
    last = name
  }

  this.setFullName = function(name) {
    let full = name.split(" ")
    first = full[0]
    last = full[1]
  }
  return undefined;
};

var bob = new Person('Bob Ross');
bob.setFullName("Haskell Curry") // sets name to Haskell Curry
bob.getFullName(); // Haskell Curry