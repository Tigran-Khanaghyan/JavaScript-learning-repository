"use strict";

/*Given a word and a list of possible anagrams, select the correct sublist.
Input Output
'listen”, ["enlists", "google", "inlets", "banana"] [“inlets”]
“pencil”, [“licnep”, “circular”, “pupil”, “nilcpe”, “leppnec”] [“licnep”, nilcpe] */

function correctAnagram(word, arr) {
  let wordArray = word.split("");
  let correctSublist = [];
  for (let item of arr) {
    let isAnagram = true;
    for (let char of item) {
      if (!wordArray.includes(char)) {
        isAnagram = false;
      }
    }
    if (isAnagram && wordArray.length == item.length) {
      correctSublist.push(item);
    }
  }
  return correctSublist;
}

console.log(
  correctAnagram("pencil", ["licnep", "circular", "pupil", "nilcpe", "leppnec"])
);
