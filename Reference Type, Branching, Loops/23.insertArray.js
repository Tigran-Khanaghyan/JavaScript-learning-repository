"use strict";

/*Takes two arrays and insert the second array in the middle of the first array. The first array always has
two elements.
Input Output
[1, 10], [2, 3, 4, 5, 6, 7, 8, 9] [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] */

let array1 = [1, 10];
let array2 = [2, 3, 4, 5, 6, 7, 8, 9];

let poped = array1.pop();

for (let item of array2) {
  array1.push(item);
}
array1.push(poped);
console.log(array1);
