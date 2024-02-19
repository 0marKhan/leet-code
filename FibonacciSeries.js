// n is how far we want the series to go
function fibonacciSeries(n) {
  if (n <= 1) return [0];
  if (n === 2) return [0, 1];

  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    // takes the next number for eg after 0, 1 we take i = 2
    // so to add in the index 2, we add the last two numbers, in this case 0 and 1
    // as we need the last two indices to store for the new index we add fib[i - 1] and fib[i - 2] into the new index
    // which is fib[i]
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibonacciSeries(10)); // Outputs the first 10 numbers in the Fibonacci series
