"use strict";

/*Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’

If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”

 */

let input = prompt("What is the “official” name of JavaScript?", "");

if (input === "ECMAScript") {
  console.log("Right!");
} else {
  console.log("You don’t know? ECMAScript!");
}
