function going(n) {
  var result = 1;
  var acc = 1;

  while (n > 1) {
    acc *= 1 / n;
    result += acc;
    n--;
  }

  return Math.floor(result * 1e6) / 1e6;
}

console.log(going(180));
