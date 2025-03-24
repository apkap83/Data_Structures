function factorial_loop(n: number): number {
  let product = 1;

  for (let i = 2; i <= n; i++) {
    product = product * i;
  }
  return product;
}

console.log(factorial_loop(3));
