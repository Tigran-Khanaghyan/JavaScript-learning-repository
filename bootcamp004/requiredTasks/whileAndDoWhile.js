"use strict";

// try to write a the following loop with while and do-while

// for (var i = 0; i < a.length; i++) {
// console.log("for", i, a[i]);
// }

let a = [1, 2, 3, 4, 5];

//while loop
let i = 0;
while (i < a.length) {
  console.log("for", i, a[i]);
  ++i;
}
//do while loop
let j = 0;
do {
  console.log("for", i, a[j]);
  ++j;
} while (j < a.length);
