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
function decode(string) {
  const numbers = [];
  while (string.length) {
    const zeroOrOne = string.slice(0, 2);
    if (zeroOrOne === "10") {
      numbers.push("0");
      string = string.slice(2)
    } else if (zeroOrOne === "11") {
      numbers.push("1");
      string = string.slice(2)
    }
  }

  return numbers
}
console.log(code("77338855"));
console.log(decode("10000"));
