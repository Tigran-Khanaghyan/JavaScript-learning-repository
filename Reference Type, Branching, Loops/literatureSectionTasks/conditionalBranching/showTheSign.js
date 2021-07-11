"use strict";

/*Using if..else, write the code which gets a number via prompt and then shows in alert:

1, if the value is greater than zero,
-1, if less than zero,
0, if equals zero. */

let number = +prompt("Enter a number", "");

if (number > 0) {
  console.log(1);
} else if (number < 0) {
  console.log(-1);
} else {
  console.log(0);
}
