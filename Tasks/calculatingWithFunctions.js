function action(int, array) {
  switch (array[1]) {
    case "+":
      return array[0] + int;
    case "-":
      return int - array[0];
    case "*":
      return array[0] * int;
    case "/":
      return Math.floor(int / array[0]);
  }
}
function zero(array) {
  if (array) {
    return action(0, array);
  }
  return 0;
}
function one(array) {
  if (array) {
    return action(1, array);
  }
  return 1;
}
function two(array) {
  if (array) {
    return action(2, array);
  }
  return 2;
}
function three(array) {
  if (array) {
    return action(3, array);
  }
  return 3;
}
function four(array) {
  if (array) {
    return action(4, array);
  }
  return 4;
}
function five(array) {
  if (array) {
    return action(5, array);
  }
  return 5;
}
function six(array) {
  if (array) {
    return action(6, array);
  }
  return 6;
}
function seven(array) {
  if (array) {
    return action(7, array);
  }
  return 7;
}
function eight(array) {
  if (array) {
    return action(8, array);
  }
  return 8;
}
function nine(array) {
  if (array) {
    return action(9, array);
  }
  return 9;
}

function plus(int) {
  return [int, "+"];
}
function minus(int) {
  return [int, "-"];
}
function times(int) {
  return [int, "*"];
}
function dividedBy(int) {
  return [int, "/"];
}

console.log(seven(times(five())));
