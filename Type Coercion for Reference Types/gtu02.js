"use strict";

var a = {
  valueOf: function () {
    return "hello";
  },
};
var b = {
  valueOf: function () {
    return 3;
  },
};
var c = {
  valueOf: function () {
    return new Number(3);
  },
};
var d = {
  toString: function () {
    return 123;
  },
};
var e = {
  toString: function () {
    return new Number(3);
  },
};

// null + undefined // NaN
// null + true // 1
// null + false // 0
// null + 3 // 3
// null + NaN // NaN
// null + 'hello' // 'nullhello'
// console.log(null + a + b + c + d + e )
// undefined + true // NaN
// undefined + false // NaN
// undefined + 5 // NaN
// undefined + NaN // NaN
// undefined + 'hello' // 'undefinedhello'
// undefined + a + b + c + d + e + f
// true + false// 1
// true + 2 // 3
// true + NaN // NaN
// true + 'hello' // 'truehello'
// true + a + b + c + d + e + f
// false + 4 // 4
// false + NaN // NaN
// false + 'hello'// 'falsehello'
//console.log(false + a + b + c + d) //falsehello3[object Object]123
// 5 + 3 // 8
// 5 + NaN // NaN
// 5 + 'hello' // '5hello'
// 5 + a + b + c + d + e + f // 5hello3[object Object]123
// 'hello' + NaN // 'helloNaN'
// 'hello' + a + b + c + d // hellohello3[object Object]123

/**************************************************************************************** */

// -null // -0
// -undefined // NaN
// -true // -1
// -false // -0
// -5 // 5
// -'hello' // NaN
// -'234' // -234
// -'234.32e3' // -234320
// -new Number(NaN) // NaN
// -new String('hello') // NaN
// -(/google.com/) // NaN
// -([]) -0
// -([2]) // -2
// -([2, 3]) // NaN
// -(function() { })// NaN
//console.log(-e); // test the same also for b, c, d, e and f
//console.log(a, a++, a)

/************************************************************************************************/

// 234 % 2 // 0
// 234 % 3 // 0
// 23.23 % 2 === 1.23 // false : 23.23 % 2 equal to 1.2300000000000004
// 234.23 % 2.223 // 0.8150000000000039

/************************************************************************************************/

// 'valueOf' in null // Uncaught TypeError: Cannot use 'in' operator to search for 'valueOf' in null at <anonymous>:1:11
// 'valueOf' in undefined //
// 'valueOf' in true
// 'valueOf' in 1
// 'valueOf' in 'toString'
// 'valueOf' in new Number(1) // true
// 'x' in new Number(1) // false
//console.log('valueOf' in a) // true : ...try the same also for b, c, d, e and f
// 'toString' in a // try the same also for b, c, d, e and f
// 'call' in ({}) // false
// 'call' in (function () { }) // true

/*************************************************************************************************/

// delete ({}).valueOf // true
// delete 1 // true
// delete 1.2 // true
// delete 1.2.toString // true
//console.log(delete a.x)
//console.log(a.x)
//a.y = 3; console.log(delete a.y);
//delete f
// delete z
// var x = 3; console.log(delete x); console.log(x);
// y = 4; console.log(delete y); console.log(y);
