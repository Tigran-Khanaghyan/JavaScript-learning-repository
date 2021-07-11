"use strict";

/* Write a function that accepts a string(a sentence) as a parameter and finds the longest word within the
string. If there are several words which are the longest ones, print the last word(words can be separated
by space, comma or hyphen).
Input Output
“A revolution without dancing is a revolution not worth having.” “revolution”
”Which would be worse - to live as a monster, or to die as a good man?” “monster” */

function findLongestWord(str) {
  let word = "";
  let isWord = false;
  let wordsArray = [];
  let maxLengthWord = "";
  for (let char of str) {
    if (char === " " || char === "," || char === ".") {
      isWord = true;
    }
    if (isWord === false) {
      word += char;
    } else {
      wordsArray.push(word);
      word = "";
      isWord = false;
    }
  }

  for (let word of wordsArray) {
    if (word.length >= maxLengthWord.length) {
      maxLengthWord = word;
    }
  }
  return maxLengthWord;
}

console.log(
  findLongestWord(
    "A revolution without dancing is a revolution not worth having."
  )
);
