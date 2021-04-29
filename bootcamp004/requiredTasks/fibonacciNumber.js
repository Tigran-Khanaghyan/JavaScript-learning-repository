"use strict";

/*Given a number n ( n >= 0 ) . Print n Fibonacci number. (Fibonacci th series: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ..., ak = ak-1
+ ak-2)

| Input | Output |
| --- | ----------- |
| 0 | 0 |
| 2 | 1 |
| 10 | 55 |
| 20 | 6765 | */

let n = 11;
let i = 4;
let previous = 0;
let current = 1;
let fibonacci = previous + current;

while (i <= n) {
  previous = current;
  current = fibonacci;
  fibonacci = previous + current;
  ++i;
}
console.log(fibonacci);
