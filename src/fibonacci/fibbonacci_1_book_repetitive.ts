function fibonacci(n: number): number {
  let fib = 0;
  if (n <= 1) fib = n;
  let f0 = 0;
  let f1 = 1;

  for (let i = 2; i <= n; i++) {
    fib = f0 + f1;
    f0 = f1;
    f1 = fib;
  }

  return fib;
}

console.log(fibonacci(3));
