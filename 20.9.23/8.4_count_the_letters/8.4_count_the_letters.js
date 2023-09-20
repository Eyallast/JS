function countLetters(array) {
  let letterCount = {};

  for (let word of array) {
    for (let letter of word.toLowerCase()) {
      if (letterCount[letter]) {
        letterCount[letter]++;
      } else {
        letterCount[letter] = 1;
      }
    }
  }

  return letterCount;
  
}
const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
const letterCounts = countLetters(array);
console.log(letterCounts);

// The function countLetters iterates over each word in the array and then iterates over each letter in the word. 
// It converts each letter to lowercase using the toLowerCase method to make the counting case-insensitive. 
// It then checks if the letter already exists as a key in the letterCount object. If it does, 
// it increments the count by one; otherwise, it sets the count to one.


