"use strict";

/*Add to the prototype of all functions the method
 defer(ms), that runs the function after ms milliseconds.

After you do it, such code should work: */

Function.prototype.defer = function (ms) {
  setTimeout(this, ms);
};

function f() {
  console.log("Hello!");
}

f.defer(1000); // shows "Hello!" after 1 second
