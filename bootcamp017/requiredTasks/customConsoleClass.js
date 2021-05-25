"use strict";

/*Create a CustomConsole class with following methods:
log function that takes user arguments and returns them as a string,
history function that takes an optional range as an argument,
clearHistory function to remove the history memory.

The log function has no limit of arguments. */

class Console {
  static logs = [];
  constructor(name) {
    this.name = name;
  }

  log(head, ...logArgs) {
    let str = "";
    if (typeof head === "object") {
      str = this.name + ":" + " " + JSON.stringify(head);
      if (logArgs.length === 0) {
        Console.logs.push(str);
        console.log(str);
        return;
      }
    } else if (typeof head === "string") {
      str = `${head}`;
    }
    let strLogArgs = logArgs.reduce((acc, item) => {
      if (typeof item === "object") {
        acc += JSON.stringify(item) + ", ";
      } else acc += item + ", ";
      return acc;
    }, "");
    if (typeof head === "string") {
      str = str + " " + strLogArgs;
    } else str = str + ", " + strLogArgs;

    str = str.trim();
    if (str[str.length - 1] === ",") {
      str = str.slice(0, -1);
    }
    Console.logs.push(str);
    console.log(str);
    return;
  }
  history(start, end) {
    let historyStr = "";
    if (Console.logs.length === 0) {
      console.log(historyStr);
      return;
    }
    for (let i = start - 1; i <= end - 1; ++i) {
      historyStr += `${Console.logs[i] + ", "}`;
    }
    console.log(historyStr);
    return;
  }
  clearHistory() {
    Console.logs.length = 0;
  }
}

const myConsole = new Console("Regular");
const fancyConsole = new Console("Fancy");
myConsole.log([0, 1, 2, 3], 1, [1, 2]); // "Regular: [0,1,2,3]"
myConsole.log({ a: 1, b: 2 }); // "Fancy: {a:1, b:2}"
myConsole.log("ok : ", 1, 2, 3); // "ok : 1, 2, 3"
myConsole.clearHistory(); // true
myConsole.history(1, 2); // ""
//console.log();
