"use strict";

/*Rewrite the function using '?' or '||'

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
Make two variants of checkAge:

Using a question mark operator ?
Using OR ||*/

let age = 20;

function checkAge(age) {
  return age > 18 ? true : confirm("Did parents allow you?");
}

function checkAge(age) {
  return age > 18 || confirm("Did parents allow you?");
}
