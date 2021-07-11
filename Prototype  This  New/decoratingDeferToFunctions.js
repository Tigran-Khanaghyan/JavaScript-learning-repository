"use strict";

/*Add to the prototype of all functions the method defer(ms),
 that returns a wrapper, delaying the call by ms milliseconds.

Here’s an example of how it should work: */

Function.prototype.defer = function (ms) {
  let _this = this;
  return function (...args) {
    setTimeout(() => _this.apply(this, args), ms);
  };
};

function f(a, b) {
  console.log(a + b);
}

f.defer(1000)(1, 2); // shows 3 after 1 second
