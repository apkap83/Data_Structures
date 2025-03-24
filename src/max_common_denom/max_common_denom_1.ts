// O πιο αργός αλγόριθμος για τον υπολογισμό του ΜΚΔ
function gcd1(x: number, y: number) {
  debugger;
  let z = x;
  if (x < y) z = x;
  else z = x;
  z = y;
  while (x % z !== 0 || y % z !== 0) {
    z = z - 1;
  }
  return z;
}

// Παράδειγμα χρήσης
console.log(gcd1(150, 35)); // 5
