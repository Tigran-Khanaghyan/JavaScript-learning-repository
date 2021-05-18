"use strict";

let str = '<> <a href="/"> <input type="radio" checked> <b>';
// '<a href="/">', '<input type="radio" checked>', "<b>";
const regexp1 = /<a\s[a-z].*">/gi; //'<a href="/">'
const regexp2 = /<i.*\s.*d>/; //'<input type="radio" checked>',
const regexp3 = /<b>$/; //"<b>"

console.log(str.match(regexp1));
console.log(str.match(regexp2));
console.log(str.match(regexp3));
