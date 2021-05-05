"use strict";

/*Write a function, which will receive a number between 0 to 999,999 and spell out that number in English.
Input Output
5 ‘fiveʼ
25 ‘twenty fiveʼ
425 “four hundred twenty five”
9425 “nine thousand four hundred twenty five”
79425 “seventy nine thousand four hundred twenty five”
179425 “one hundred seventy nine thousand four hundred twenty five” */

function small100(number) {
  let small100 = "";
  let baseNumbers = [
    [
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
    ],
    [
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
    ],
  ];
  if (number < 100) {
    if (number < 20) {
      small100 = baseNumbers[0][number];
    } else if (number >= 20 && number < 30) {
      if (number === 20) small100 = baseNumbers[1][0];
      else small100 = baseNumbers[1][0] + " " + baseNumbers[0][number % 10];
    } else if (number >= 30 && number < 40) {
      if (number === 30) small100 = baseNumbers[1][1];
      else small100 = baseNumbers[1][1] + " " + baseNumbers[0][number % 10];
    } else if (number >= 40 && number < 50) {
      if (number === 40) small100 = baseNumbers[1][2];
      else small100 = baseNumbers[1][2] + " " + baseNumbers[0][number % 10];
    } else if (number >= 50 && number < 60) {
      if (number === 50) small100 = baseNumbers[1][3];
      else small100 = baseNumbers[1][3] + " " + baseNumbers[0][number % 10];
    } else if (number >= 60 && number < 70) {
      if (number === 60) small100 = baseNumbers[1][4];
      else small100 = baseNumbers[1][4] + " " + baseNumbers[0][number % 10];
    } else if (number >= 70 && number < 80) {
      if (number === 70) small100 = baseNumbers[1][5];
      else small100 = baseNumbers[1][5] + " " + baseNumbers[0][number % 10];
    } else if (number >= 80 && number < 90) {
      if (number === 80) small100 = baseNumbers[1][6];
      else small100 = baseNumbers[1][6] + " " + baseNumbers[0][number % 10];
    } else if (number >= 90 && number < 100) {
      if (number === 90) small100 = baseNumbers[1][7];
      else small100 = baseNumbers[1][7] + " " + baseNumbers[0][number % 10];
    }
  } else if (number >= 100 && number < 1000) {
  }
  return small100;
}
function small1000(number) {
  let decimal = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let hundred = "hundred";
  let small1000 = "";
  if (number >= 100 && number < 200) {
    if (number == 100) small1000 = hundred;
    else {
      small1000 = decimal[Math.floor(number / 100) - 1] + " " + hundred;
      number -= 100;
      let tempNumber = small100(number);
      small1000 = small1000 + " " + tempNumber;
    }
  } else if (number >= 200 && number < 300) {
    if (number == 200)
      small1000 = decimal[Math.floor(number / 100) - 1] + " " + hundred;
    else {
      small1000 = decimal[Math.floor(number / 100) - 1] + " " + hundred;
      number -= 200;
      let tempNumber = small100(number);
      small1000 = small1000 + " " + tempNumber;
    }
  } else if (number >= 300 && number < 400) {
    if (number == 300)
      small1000 = decimal[Math.floor(number / 100) - 1] + " " + hundred;
    else {
      small1000 = decimal[Math.floor(number / 100) - 1] + " " + hundred;
      number -= 300;
      let tempNumber = small100(number);
      small1000 = small1000 + " " + tempNumber;
    }
  } else if (number >= 400 && number < 500) {
    if (number == 400)
      small1000 = decimal[Math.floor(number / 100) - 1] + " " + hundred;
    else {
      small1000 = decimal[Math.floor(number / 100) - 1] + " " + hundred;
      number -= 400;
      let tempNumber = small100(number);
      small1000 = small1000 + " " + tempNumber;
    }
  } else if (number >= 500 && number < 600) {
    if (number == 500)
      small1000 = decimal[Math.floor(number / 100) - 1] + " " + hundred;
    else {
      small1000 = decimal[Math.floor(number / 100) - 1] + " " + hundred;
      number -= 500;
      let tempNumber = small100(number);
      small1000 = small1000 + " " + tempNumber;
    }
  } else if (number >= 600 && number < 700) {
    if (number == 600)
      small1000 = decimal[Math.floor(number / 100) - 1] + " " + hundred;
    else {
      small1000 = decimal[Math.floor(number / 100) - 1] + " " + hundred;
      number -= 600;
      let tempNumber = small100(number);
      small1000 = small1000 + " " + tempNumber;
    }
  } else if (number >= 700 && number < 800) {
    if (number == 700)
      small1000 = decimal[Math.floor(number / 100) - 1] + " " + hundred;
    else {
      small1000 = decimal[Math.floor(number / 100) - 1] + " " + hundred;
      number -= 700;
      let tempNumber = small100(number);
      small1000 = small1000 + " " + tempNumber;
    }
  } else if (number >= 800 && number < 900) {
    if (number == 800)
      small1000 = decimal[Math.floor(number / 100) - 1] + " " + hundred;
    else {
      small1000 = decimal[Math.floor(number / 100) - 1] + " " + hundred;
      number -= 800;
      let tempNumber = small100(number);
      small1000 = small1000 + " " + tempNumber;
    }
  } else if (number >= 900 && number < 1000) {
    if (number == 900)
      small1000 = decimal[Math.floor(number / 100) - 1] + " " + hundred;
    else {
      small1000 = decimal[Math.floor(number / 100) - 1] + " " + hundred;
      number -= 900;
      let tempNumber = small100(number);
      small1000 = small1000 + " " + tempNumber;
    }
  }
  return small1000;
}
function small10000(number) {
  let decimal = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let thousand = "thousand";
  let small10000 = "";
  if (number >= 1000 && number < 2000) {
    if (number == 1000)
      small10000 = decimal[Math.floor(number / 1000) - 1] + " " + thousand;
    else {
      small10000 = decimal[Math.floor(number / 1000) - 1] + " " + thousand;
      number -= 1000;
      if (number > 100) {
        let tempNumber = small1000(number);
        small10000 = small10000 + " " + tempNumber;
      } else {
        let tempNumber = small100(number);
        small10000 = small10000 + " " + tempNumber;
      }
    }
  } else if (number >= 2000 && number < 3000) {
    if (number == 2000)
      small10000 = decimal[Math.floor(number / 1000) - 1] + " " + thousand;
    else {
      small10000 = decimal[Math.floor(number / 1000) - 1] + " " + thousand;
      number -= 2000;
      if (number > 100) {
        let tempNumber = small1000(number);
        small10000 = small10000 + " " + tempNumber;
      } else {
        let tempNumber = small100(number);
        small10000 = small10000 + " " + tempNumber;
      }
    }
  } else if (number >= 3000 && number < 4000) {
    if (number == 2000)
      small10000 = decimal[Math.floor(number / 1000) - 1] + " " + thousand;
    else {
      small10000 = decimal[Math.floor(number / 1000) - 1] + " " + thousand;
      number -= 3000;
      if (number > 100) {
        let tempNumber = small1000(number);
        small10000 = small10000 + " " + tempNumber;
      } else {
        let tempNumber = small100(number);
        small10000 = small10000 + " " + tempNumber;
      }
    }
  } else if (number >= 4000 && number < 5000) {
    if (number == 2000)
      small10000 = decimal[Math.floor(number / 1000) - 1] + " " + thousand;
    else {
      small10000 = decimal[Math.floor(number / 1000) - 1] + " " + thousand;
      number -= 4000;
      if (number > 100) {
        let tempNumber = small1000(number);
        small10000 = small10000 + " " + tempNumber;
      } else {
        let tempNumber = small100(number);
        small10000 = small10000 + " " + tempNumber;
      }
    }
  } else if (number >= 5000 && number < 6000) {
    if (number == 2000)
      small10000 = decimal[Math.floor(number / 1000) - 1] + " " + thousand;
    else {
      small10000 = decimal[Math.floor(number / 1000) - 1] + " " + thousand;
      number -= 5000;
      if (number > 100) {
        let tempNumber = small1000(number);
        small10000 = small10000 + " " + tempNumber;
      } else {
        let tempNumber = small100(number);
        small10000 = small10000 + " " + tempNumber;
      }
    }
  } else if (number >= 6000 && number < 7000) {
    if (number == 2000)
      small10000 = decimal[Math.floor(number / 1000) - 1] + " " + thousand;
    else {
      small10000 = decimal[Math.floor(number / 1000) - 1] + " " + thousand;
      number -= 6000;
      if (number > 100) {
        let tempNumber = small1000(number);
        small10000 = small10000 + " " + tempNumber;
      } else {
        let tempNumber = small100(number);
        small10000 = small10000 + " " + tempNumber;
      }
    }
  } else if (number >= 7000 && number < 8000) {
    if (number == 2000)
      small10000 = decimal[Math.floor(number / 1000) - 1] + " " + thousand;
    else {
      small10000 = decimal[Math.floor(number / 1000) - 1] + " " + thousand;
      number -= 7000;
      if (number > 100) {
        let tempNumber = small1000(number);
        small10000 = small10000 + " " + tempNumber;
      } else {
        let tempNumber = small100(number);
        small10000 = small10000 + " " + tempNumber;
      }
    }
  } else if (number >= 8000 && number < 9000) {
    if (number == 2000)
      small10000 = decimal[Math.floor(number / 1000) - 1] + " " + thousand;
    else {
      small10000 = decimal[Math.floor(number / 1000) - 1] + " " + thousand;
      number -= 8000;
      if (number > 100) {
        let tempNumber = small1000(number);
        small10000 = small10000 + " " + tempNumber;
      } else {
        let tempNumber = small100(number);
        small10000 = small10000 + " " + tempNumber;
      }
    }
  } else if (number >= 9000 && number < 10000) {
    if (number == 2000)
      small10000 = decimal[Math.floor(number / 1000) - 1] + " " + thousand;
    else {
      small10000 = decimal[Math.floor(number / 1000) - 1] + " " + thousand;
      number -= 9000;
      if (number > 100) {
        let tempNumber = small1000(number);
        small10000 = small10000 + " " + tempNumber;
      } else {
        let tempNumber = small100(number);
        small10000 = small10000 + " " + tempNumber;
      }
    }
  }
  return small10000;
}
function small100000(number) {
  let thousand = "thousand";
  let firstPartTemp = Math.floor(number / 1000);
  let secondPartTemp = number % 1000;
  let firstPart = small100(firstPartTemp) + " " + thousand;
  let secondPart = "";
  if (secondPartTemp < 100) {
    secondPart = small100(secondPartTemp);
  } else {
    secondPart = small1000(secondPartTemp);
  }
  return firstPart + " " + secondPart;
}
function small1000000(number) {
  let thousand = "thousand";
  let firstPartTemp = Math.floor(number / 1000);
  let secondPartTemp = number % 1000;
  let firstPart = "";
  if (firstPartTemp < 100) {
    firstPart = small100(firstPartTemp) + " " + thousand;
  } else {
    firstPart = small1000(firstPartTemp) + " " + thousand;
  }
  let secondPart = "";
  if (secondPartTemp < 100) {
    secondPart = small100(secondPartTemp);
  } else {
    secondPart = small1000(secondPartTemp);
  }
  return firstPart + " " + secondPart;
}
function spellTheNumber(number) {
  if (number < 100) {
    return small100(number);
  } else if (number < 1000) {
    return small1000(number);
  } else if (number < 10000) {
    return small10000(number);
  } else if (number < 100000) {
    return small100000(number);
  } else if (number < 1000000) {
    return small1000000(number);
  }
}

console.log(spellTheNumber(178));
