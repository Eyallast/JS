// . The world population is 7900 million people. Create
// a function declaration called 'percentageOfWorld1'
// which receives a 'population' value, and returns the
// percentage of the world population that the given
// population represents. For example, China has
// 1441 million people, so it's about 18.2% of the world
// population.
// const percentageOfWorld1 = function(population) {
//   calculation = (population/7900000000)*100;
//   return calculation.toFixed(2);
// }

const percentageOfWorld11 = (population) => {calculation = (population/7900000000)*100;
return calculation.toFixed(2);}


let israelPopulationPercentage = percentageOfWorld11("10000000");
let italyPopulationPercentage = percentageOfWorld11("56000000");
let germanyPopulationPercentage = percentageOfWorld11("90000000");

console.log("Israel Population Percentage:" + israelPopulationPercentage + "%");
console.log("Italy Population Percentage:" + italyPopulationPercentage + "%");
console.log("Germany Population Percentage:" + germanyPopulationPercentage + "%");



// 2. To calculate the percentage, divide the given
// 'population' value by 7900 and then multiply by 100.
// 3. Call 'percentageOfWorld1' for 3 populations of
// countries of your choice, store the results into
// variables and log them to the console.
// 4. Create a function expression that does the exact
// same thing, called 'percentageOfWorld2', and also
// call it with 3 country populations (can be the same
// populations)