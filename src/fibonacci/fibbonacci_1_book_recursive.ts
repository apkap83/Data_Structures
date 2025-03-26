function fbr(n: number): number {
  let fib;
  if (n <= 1) fib = n;
  else {
    fib = fbr(n - 1) + fbr(n - 2);
  }

  return fib;
}

console.log(fbr(10));
