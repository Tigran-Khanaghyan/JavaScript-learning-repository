"use strict";

/*Given mixed array of numbers, strings, booleans, nulls and undefined. Filter array and get all the numbers
in a separate array. Arrange them such as from the beginning are the odds and from the ending the
evens.
Input Output
[8, 0, 1, ‘heyʼ, 12, 5 , true, ‘2ʼ, null, 7, 3] [1, 5, 7, 3, 8, 0, 12]
[8, 8, ‘mehʼ, 6] [8, 8, 6]
[null, null, 1, undefined, 5, 9, false] [1, 5, 9] */

let array = [8, 0, 1, "hey", 12, 5, true, "2", null, 7, 3];

let newArray = [];

for (let item of array) {
  if (typeof item === "number") {
    if (item % 2 == 0) {
      newArray.push(item);
    } else {
      newArray.unshift(item);
    }
  }
}

console.log(newArray);
