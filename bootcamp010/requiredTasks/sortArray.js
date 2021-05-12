"use strict";

/*Create a function that takes an array of numbers arr, a string str
and return an array of numbers as per the following rules:
- "Asc" returns a sorted array in ascending order.
- "Desc" returns a sorted array in descending order.
``` javascript
sortBy([4, 3, 2, 1], "Asc" ) // [1, 2, 3, 4]
sortBy([7, 8, 11, 66]) // [7, 8, 11, 66]
sortBy([7, 8, 11, 66], "Desc") // [66, 11, 8, 7] */

function sortBy(array, str = "Asc") {
  if (str === "Asc") {
    return array.sort((a, b) => a - b);
  } else {
    return array.sort((a, b) => b - a);
  }
}

console.log(sortBy([4, 3, 2, 1], "Asc")); // [1, 2, 3, 4]
console.log(sortBy([7, 8, 11, 66])); // [7, 8, 11, 66]
console.log(sortBy([7, 8, 11, 66], "Desc")); // [66, 11, 8, 7] */
