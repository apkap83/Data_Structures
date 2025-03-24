function factorial_recursive(n: number): number {
  if (n === 0) return 1;
  else {
    return n * factorial_recursive(n - 1);
  }
}

console.log(factorial_recursive(3));
