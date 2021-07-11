"use strict";

/*Create a function truncate(str, maxlength) that 
checks the length of the str and, if it exceeds maxlength – replaces
 the end of str with the ellipsis character
 "…", to make its length equal to maxlength. */

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength) + "...";
  } else {
    return str;
  }
}
