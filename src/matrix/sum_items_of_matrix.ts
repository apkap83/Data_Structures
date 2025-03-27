const t1: number[][] = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
];

let sum = 0;
let rowsSum: { [n: number]: number } = {};
let columnsSum: { [n: number]: number } = {};

let rows = t1.length; // Rows
let columns = t1[0].length; // Columns

// Initialize rowsSum and columnsSum with 0
for (let i = 0; i < rows; i++) {
  rowsSum[i] = 0;
}

for (let j = 0; j < columns; j++) {
  columnsSum[j] = 0;
}

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < columns; j++) {
    sum = sum + t1[i][j];
    rowsSum[i] = rowsSum[i] + t1[i][j];
    columnsSum[j] = columnsSum[j] + t1[i][j];
  }
}

console.log("Sum:", sum);
console.log("rowsSum:", rowsSum);
console.log("columnsSum:", columnsSum);
