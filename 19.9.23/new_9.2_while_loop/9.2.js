const randomNumber = Math.floor(Math.random() * 51);
console.log(randomNumber);
let promptVar = prompt("please guess a number between 0 and 50");
while (promptVar != randomNumber) {
if (promptVar > randomNumber) {
  console.log("guess is too high, try again");
  promptVar = prompt("please guess again");
 } else {
    console.log("guess is too low, try again");
    promptVar = prompt("please guess again");
 }  
}
console.log("Congratulations! You guessed the correct number.");
