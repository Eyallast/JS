const countryInfo = function(country, population,capitalCity) {
  return `${country} has ${population} people and it's capital city is ${capitalCity}`;
}

let Spain = countryInfo("spain", "47 million","Madrid");
let Germany = countryInfo("Germany", "83 million","Berlin");
let England = countryInfo("England", "40 million","London");
console.log(Spain);
console.log(Germany);
console.log(England);