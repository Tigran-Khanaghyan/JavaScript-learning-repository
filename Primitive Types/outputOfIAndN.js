"use strict";

//What will be output of i and n?

let i = 10;
let n = i++ % 5;

/*The output of i will be 11, because the increment increase the value by 1*/
console.log(i);
/*The output of n will be 0, because postfix increment increase the value by 1
but first return the original value. "i++ % 5" in that statement i++ equal
to 10, and after it the value will be 11 */
console.log(n);
