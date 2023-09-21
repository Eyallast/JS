// From function declarations to explicit and implicit return functions (one of each).
function welcome() {
let welcome = 'Welcome to Appleseeds Bootcamp!';
return welcome;
}
const welcome = () => 'Welcome to Appleseeds Bootcamp!';

const welcome = function() {
  let welcome = 'Welcome to Appleseeds Bootcamp!';
  return welcome;
  }

function power(a) {
let myNumber = a;
let result = Math.pow(myNumber, 2);
return result;
}
const power = a => Math.pow(a,2);

const power = function(a) {
  let myNumber = a;
  let result = Math.pow(myNumber, 2);
  return result;
};

// From function expressions to IIFE functions.
const squareRoot = a => Math.sqrt(a);

const squareRoot1 = function(a){
  let result = Math.sqrt(a, 2);
  return result;

}



const randomNumbers = (a, b) => Math.random() * (a - b) + b;

const randomNumbers1 = function(a,b)
{
  let result = Math.random()* (a - b) + b;
  return result;
}