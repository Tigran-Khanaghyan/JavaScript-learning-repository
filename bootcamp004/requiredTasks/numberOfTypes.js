"use strict";

/*Given an array of strings and numbers. Print the number of integers and the number of strings in the
array.
Input Output
[1, ‘10ʼ, ‘hiʼ, 2, 3] “Numbers: 3, Strings: 2”
[1, 4, ‘i am a stringʼ, ‘456ʼ] “Numbers: 2, Strings: 2” */

let array = [1, 4, "i am a string", "456"];
let countOfNumbers = 0;
let countOfStrings = 0;

for (let item of array) {
  if (typeof item === "number") ++countOfNumbers;
  else if (typeof item === "string") ++countOfStrings;
}

console.log(`Numbers: ${countOfNumbers}, Strings: ${countOfStrings}`);
