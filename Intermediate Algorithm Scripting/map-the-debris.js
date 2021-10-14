/*
  Returns a new array that transforms the elements' average altitude into their orbital periods (in seconds). 
  The array contain objects in the format {name: 'name', avgAlt: avgAlt}.
  The values are rounded to the nearest whole number. The body being orbited is Earth.
  The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
*/

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  return arr.map((obj) => {
    const name = obj.name
    const avgAlt = obj.avgAlt
    const distance = earthRadius + avgAlt;
    const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(distance, 3) / GM))
    return {name: name, orbitalPeriod: orbitalPeriod}
  });
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]); // [{name: "sputnik", orbitalPeriod: 86400}]