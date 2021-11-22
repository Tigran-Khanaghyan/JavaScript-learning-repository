function number9(n) {
  let counter = 0;
  if (n < 9) return 0;

  if (n % 10 < 9 && Math.floor(n / 10) % 10 === 9) {
    counter += (n % 10) + 1;
  }

  for (let i = 9; i <= n; i = i + 10) {
    let temp = i;
    let count = 0;
    let iteration = 0;
    while (temp !== 0) {
        const digit = temp % 10;
        if (digit === 9 && count === iteration) {
            counter += Math.pow(10, count);
            ++count;
        }
        ++iteration;
      temp = Math.floor(temp / 10);
    }
  }
return counter
}

number9(565754);
