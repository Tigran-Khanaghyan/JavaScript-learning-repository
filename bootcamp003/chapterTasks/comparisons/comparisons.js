"use strict";

//What will be the result for these expressions?

//result true: (5 > 4) is boolean expression, and it will return true
5 > 4;
//result true: for string comparisons JavaScript uses the so-called
//“dictionary” or “lexicographical” order. ("a" > "b").
"apple" > "pineapple";
//result true: ("2" > "1")
"2" > "12";
//result true: undefined == null equal each other
// (in the sense of ==), but not any other value.
undefined == null;
//result false: they have other types.
undefined === null;
//result false: undefined and null  equal each other, but not any other value
null == "\n0\n";
null === +"\n0\n";
