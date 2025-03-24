function bubbleSortOptimized(arr: number[]): number[] {
  const n = arr.length;
  let swapped: boolean;

  for (let i = 0; i < n - 1; i++) {
    swapped = false;

    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    // If no swaps, array is sorted!
    if (!swapped) break;
  }

  return arr;
}

console.log(bubbleSortOptimized([5, 3, 8, 4, 2]));
