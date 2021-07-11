"use strict";

/*Write a function which receives two strings and removes appearances of the second string from the first
one.
Input Output
“This is some text.”, “is” “Th some text.”
“Yes, London. You know: fish, chips, cup ‘o tea, bad
food, worse weather”, “o”

“Yes, Lndn. Yu knw: fish, chips, cup ‘ tea,
bad fd, wrse weather” */

function removeAppearances(str1, str2) {
  while (str1.includes(str2)) {
    str1 = str1.replace(str2, "");
  }
  return str1;
}

console.log(
  removeAppearances(
    "Yes, London. You know: fish, chips, cup o tea, bad food, worse weather",
    "o"
  )
);
