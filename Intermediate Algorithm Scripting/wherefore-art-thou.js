/* 
  Looks through an array of objects (first argument) 
  and returns an array of all objects that have matching name and value pairs (second argument). 
*/  

function whatIsInAName(collection, source) {
  var arr = [];
  
  // Only change code below this line
  const key = Object.keys(source);

  arr = collection.filter((obj) => {
    return key.every((key) => {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });

  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }); // [{ first: "Tybalt", last: "Capulet" }] 