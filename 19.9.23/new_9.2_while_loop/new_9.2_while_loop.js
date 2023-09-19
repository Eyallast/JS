const randomNumber = Math.floor(Math.random() * 51);
console.log(randomNumber);
let promptVar = prompt("please guess a number between 0 and 50");
while (promptVar !== randomNumber) {

if (promptVar > randomNumber) {
  console.log("guess is too high, try again");
 } else if (promptVar < randomNumber) {
    console.log("guess is too low, try again");
 }  else console.log("you are right!");
}