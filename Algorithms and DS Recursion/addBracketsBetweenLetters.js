"use strict";

/*Given a string containing only English letters (uppercase and lowercase). Add opening and closing parentheses
according to the following pattern: "example" -> "(e (x (a (m) p) l) e)" (Added opening parentheses to the
middle, closing parentheses after the middle. In case the string length is even there must be 2 characters in the
brackets in the middle. ("card -> (c (ar) d" but not "(c (a () r) d)"). Example` */

let s = "LItBeoFLcSGBOFQxMHoIuDDWcqcVgkcRoAeocXO";
function addBrackets(str) {
  let bracketStr = "";
  function iter(str, i) {
    if (i < Math.floor(str.length / 2)) {
      bracketStr = bracketStr + str[i] + "(";
      return iter(str, i + 1);
    } else if (i < str.length) {
      bracketStr = bracketStr + str[i] + ")";
      return iter(str, i + 1);
    }
  }
  iter(str, 0);

  return bracketStr.slice(0, -1);
}
console.log(addBrackets(s)); //"L(I(t(B(e(o(F(L(c(S(G(B(O(F(Q(x(M(H(o(I)u)D)D)W)c)q)c)V)g)k)c)R)o)A)e)o)c)X)O"
