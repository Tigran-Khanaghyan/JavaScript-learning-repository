"use strict";

/*Given a sentence with missing words and an array of words. Replace all ‘_ʼ in a sentence with the words
from the array.
Input Output
“_, we have a _.” [“Houston”, “problem”] “Houston, we have a problem.”
“If at _ you dont _, try, try _.” [“first”, “succeed”,
“again”]

“If at first you donʼt succeed, try, try
again.”

“May the _ _ _ _.” [“Force”, “be”, “with”, “you”] “May the Force be with you.” */

let sentence = "_ , we have a _ .";
let words = ["Houston", "problem"];

let i = 0;

while (sentence.includes("_")) {
  sentence = sentence.replace("_", words[i]);
  ++i;
}

console.log(sentence);
