"use strict";

/*Given a sentence as a string. Split it according to space and comma and create an array consisting of the
words of the array. The last word should not contain the last . or! .
Input Output
“May the Force be with you.” [“May”, “the”, “Force”, “be”, “with”, “you”]
“Keep your friends close, but your
enemies closer.”

[“Keep”, “your”, “friends”, “close”, “but”, “your”,
“enemies”, “closer”] */

let str = "May the Force be with, you.";
let newStr = str.split(" ");
let symbols = [".", ",", "!"];

// for (let word of newStr) {
//   for (let item of symbols) {
//     if (word.includes(item)) {
//       console.log(word)
//       word = word.replace(item, "");
//     }
//   }
// }
for (let i = 0; i < newStr.length; ++i) {
  for (let j = 0; j < symbols.length; ++j) {
    if (newStr[i].includes(symbols[j])) {
      newStr[i] = newStr[i].replace(symbols[j], "");
    }
  }
}
console.log(newStr);
