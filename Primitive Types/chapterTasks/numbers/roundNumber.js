"use strict";

//According to the documentation Math.round and toFixed
//both round to the nearest number: 0..4 lead down while 5..9 lead up.

//alert( 1.35.toFixed(1) ); // 1.4
//alert( 6.35.toFixed(1) ); // 6.3

//Internally the decimal fraction 6.35 is an endless binary. As always in
// such cases, it is stored with a precision loss.

console.log((6.35).toFixed(20));

//The precision loss can cause both increase and decrease of a number.
//In this particular case the number becomes a tiny bit less, that’s why it rounded down.

console.log((1.35).toFixed(20));

//how to fix the problem with 6.35

//We should bring it closer to an integer prior to rounding:

console.log(Math.round(6.35 * 10) / 10);
