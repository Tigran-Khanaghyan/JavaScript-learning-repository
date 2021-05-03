"use strict";

/*. Please try to guess, test, and then understand following examples:
Number('0x77') === 0x77
Number('077') === 077
Number(' 12')
isNaN(' ')
+''
.1 + .2 == .3
9007199254740992 + 1 == 9007199254740992
9007199254740992 + 2 == 9007199254740992
0 === +0
+0 === -0
1 / '2'
1 / 0
1 / -0
Infinity / 6
Infinity / -256
Infinity / Infinity
0 / 0
+true
+false
+null
+undefined
parseInt('.2')
parseInt('077a')
parseInt('0x77a')
parseInt('I’m the best value - said Infinity.')
parseFloat('I’m the best value - said Infinity.')
parseInt('Infinity is the best value!')
parseFloat('Infinity is the best value!')
parseFloat('12.78ff') */

let array = [
  Number("0x77") === 0x77,
  Number("077") === 0o77,
  Number(" 12"),
  isNaN(" "),
  +"",
  0.1 + 0.2 == 0.3,
  9007199254740992 + 1 == 9007199254740992,
  9007199254740992 + 2 == 9007199254740992,
  0 === +0,
  +0 === -0,
  1 / "2",
  1 / 0,
  1 / -0,
  Infinity / 6,
  Infinity / -256,
  Infinity / Infinity,
  0 / 0,
  +true,
  +false,
  +null,
  +undefined,
  parseInt(".2"),
  parseInt("077a"),
  parseInt("0x77a"),
  parseInt("I’m the best value - said Infinity."),
  parseFloat("I’m the best value - said Infinity."),
  parseInt("Infinity is the best value!"),
  parseFloat("Infinity is the best value!"),
  parseFloat("12.78ff"),
];

let strArray = [
  '(Number("0x77") === 0x77)',
  '(Number("077") === 0o77)', // Number('077') is 77, 0o77 is 63(8 base)
  'Number(" 12")',
  'isNaN(" ")',
  ' +"" ',
  "0.1 + 0.2 == 0.3",
  "9007199254740992 + 1 == 9007199254740992",
  "9007199254740992 + 2 == 9007199254740992",
  "0 === +0",
  "+0 === -0",
  '1 / "2" ',
  "1 / 0",
  "1 / -0",
  "Infinity / 6",
  "Infinity / -256",
  "Infinity / Infinity",
  "0 / 0",
  "+true",
  "+false",
  "+null",
  "+undefined",
  'parseInt(".2")',
  'parseInt("077a")',
  'parseInt("0x77a")',
  'parseInt("I’m the best value - said Infinity.")',
  'parseFloat("I’m the best value - said Infinity.")',
  'parseInt("Infinity is the best value!")',
  'parseFloat("Infinity is the best value!")',
  'parseFloat("12.78ff")',
];

for (let i = 0; i < array.length; ++i) {
  console.log(`${strArray[i]}: ${array[i]}`);
}
