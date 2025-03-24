var table = [5, 34, 55, 49, 103, 2, 7, 99, 1, 0, -30];

function findSmallestNumber(table: Number[]) {
  let min = table[0];
  for (let i = 0; i < table.length; i++) {
    if (table[i] < min) min = table[i];
  }
  return min;
}
console.log(findSmallestNumber(table));
