function isPalindrome(word) {
  //remove characters and convert to lower case
  const word1 = word.replace(/[^a-z0-9]/gi, "").toLowerCase();
  //reverse the word
  const reversedWord= word1.split("").reverse().join("");
  return word1===reversedWord;
  // Write your algorithm here
}

/* 
  Add your pseudocode here
   - trim all non-alphanumeric characters from the input word  and convert it to lower case
  - reverse the original word
  - compare the original word with the reversed word
  - if they are same return true, otherwise return false (the word is not a palindrome)
*/

/*
  Add written explanation of your solution here
  The function first removes all non-alphanumeric characters, then convert the input into lowercase
   and then compare the original word to the reversed word and return true if they are the same otherwise return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
