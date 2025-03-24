// Αλγόριθμος του Ευκλείδη με αναδρομικό τρόπο
function gcd3(x: number, y: number): number {
  debugger;
  let z;
  if (y === 0) z = x;
  else {
    z = gcd3(y, x % y);
  }
  return z;
}

// Παράδειγμα χρήσης
console.log(gcd3(150, 35)); // 5
