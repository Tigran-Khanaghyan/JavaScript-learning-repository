function solve(arr) {
  let result = 1;
  for (let i = 0; i < arr.length; i += 4) {
    result =
      result *
      ((arr[i] * arr[i] + arr[i + 1] * arr[i + 1]) *
        (arr[i + 2] * arr[i + 2] + arr[i + 3] * arr[i + 3]));
  }
  for (let i = 2; i < result / 2; ++i) {
    for (let j = 2; j < result / 4; ++j) {
      if (i * i + j * j === result) {
        return [i, j];
      }
    }
  }
  return null;
}

console.log(solve([2, 1, 3, 4]));
