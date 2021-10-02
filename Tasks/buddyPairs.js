function buddyPairs(start, limit) {
  for (let i = start; i <= limit; ++i) {
    let sumOfDivisors = 1;

    for (let j = 2; j <= Math.ceil(i / 2); ++j) {
      if (i % j === 0) {
        sumOfDivisors += j;
      }
    }
    if (sumOfDivisors > i + 1) {
      let supposedPair = sumOfDivisors - 1;
      let sumOfPairDivisors = 1;

      for (let k = 2; k <= Math.floor(supposedPair / 2); ++k) {
        if (supposedPair % k === 0) {
          sumOfPairDivisors += k;
        }
        if(sumOfDivisors - 1 > i){
            continue
        }
      }
      if (sumOfPairDivisors - 1 === i) {
        return [i, supposedPair];
      }
    }
  }
  return "Nothing";
}

console.log(buddyPairs(10, 50));
