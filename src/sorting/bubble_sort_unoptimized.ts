function bubbleSortUnoptimized(arr: number[]): number[] {
  debugger;
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
      console.log(arr);
    }
  }
  return arr;
}

console.log(bubbleSortUnoptimized([5, 3, 8, 4, 2]));
