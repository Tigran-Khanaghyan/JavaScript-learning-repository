"use strict";

/*Given three numbers. Sort them by the ascending order. 
Input Output 
45 , 26, 78 26, 45, 78 
-23, -456, 0 -456, -23, 0 
 */

let a = 45,
  b = 26,
  c = 78;
let array = new Array();

let temp = Math.min(a, b, c);
array.push(temp);

switch (temp) {
  case a:
    if (b > c) {
      array.push(c);
      array.push(b);
    } else {
      array.push(b);
      array.push(c);
    }
    break;
  case b:
    if (a > c) {
      array.push(c);
      array.push(a);
    } else {
      array.push(a);
      array.push(c);
    }
    break;
  case c:
    if (b > a) {
      array.push(a);
      array.push(b);
    } else {
      array.push(b);
      array.push(a);
    }
    break;
}
console.log(array);
