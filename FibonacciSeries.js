function fibonacciSeries(n) {
  if (n <= 1) return [0];
  if (n === 2) return [0, 1];

  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibonacciSeries(10)); // Outputs the first 10 numbers in the Fibonacci series
