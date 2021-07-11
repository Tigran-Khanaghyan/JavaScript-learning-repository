"use strict";

/*Rewrite if..else using multiple ternary operators '?'.

For readability, it’s recommended to split the code into multiple lines.

let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
} */

let message =
  login == "Employee"
    ? (message = "Hello")
    : login == "Director"
    ? (message = "Greetings")
    : login == ""
    ? (message = "No login")
    : (message = "");
