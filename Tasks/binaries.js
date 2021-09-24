function code(string) {
  const numbers = string.split("");
  const binaryNumbers = [];
  numbers.forEach((number) => {
    if (number === "0") {
      binaryNumbers.push("10");
      return;
    } else if (number === "1") {
      binaryNumbers.push("11");
      return;
    }
    const numberLength = Number(number).toString(2).length;
    let str = "";
    for (let i = 0; i < numberLength - 1; ++i) {
      str += "0";
    }
    binaryNumbers.push(str + "1" + Number(number).toString(2));
  });
  return binaryNumbers.join("");
}
function decode(str) {
  const decimalNumbers = [];
  const numbers = [];
  while (str.length) {
    const zeroOrOne = str.slice(0, 2);
    if (zeroOrOne === "10") {
      decimalNumbers.push("0");
      str = str.slice(2);
    } else if (zeroOrOne === "11") {
      decimalNumbers.push("1");
      str = str.slice(2);
    } else {
      let counter = 0;
      for (let i = 0; str[i] !== "1"; ++i) {
        if (str[i] !== "1") {
          ++counter;
        }
      }
      str = str.slice(counter + 1);
      decimalNumbers.push(str.slice(0, counter + 1));
      str = str.slice(counter + 1);
    }
  }
  decimalNumbers.forEach((number) => {
    if (number === "0" || number === "1") {
      return numbers.push(number);
    }
    let exponent = 0;
    let digit = 0;
    while (number.length) {
      const lastDigitIndex = number.length - 1;
      digit += number[lastDigitIndex] * Math.pow(2, exponent);
      exponent++;
      number = number.slice(0, number.length - 1);
    }
    numbers.push(digit);
  });

  return numbers.join('');
}


