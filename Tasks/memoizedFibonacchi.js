const cache = {};
function fibonacci(n) {
  if (n === 0 || n === 1) {
    return n;
  }
  if (cache[n]) {
    return cache[n];
  }
  cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(100));
