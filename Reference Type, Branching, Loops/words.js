"use strict";

let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function words(str) {
  let tempArr = str.split(" ");
  let arr = [];

  for (let elem of tempArr) {
    let isWord = true;
    for (let char of elem) {
      if (!letters.includes(char)) {
        isWord = false;
        break;
      }
    }
    if (isWord) arr.push(elem);
  }
  return arr;
}

console.log(words("i am a & string"));
