//Exercise 2: Valid Palindrome

const isPalindrome = function (sentence) {
  //Start Coding heresa
  let cleanSentence = "";
  let reverseCleanSentence = "";
  for (let letter of sentence) {
    const lowerCaseLetter = letter.toLowerCase();
    if ((lowerCaseLetter >= "a" && lowerCaseLetter <= "z") || (letter >= "0" && letter <= "9")) {
      cleanSentence += lowerCaseLetter;
      reverseCleanSentence = lowerCaseLetter + reverseCleanSentence;
    }
  }
  return cleanSentence === reverseCleanSentence;
};

const result1 = isPalindrome("A man, a plan, a canal: Panama");
const result2 = isPalindrome("race a car");
const result3 = isPalindrome(" ");

console.log(result1); // true
console.log(result2); // false
console.log(result3); // true
