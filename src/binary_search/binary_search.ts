function binarySearch(
  names: string[],
  phones: string[],
  searchName: string,
  start: number,
  end: number
): string | null {
  if (start > end) {
    return null; // Base case: Name not found
  }

  const middle = Math.floor((start + end) / 2);

  if (searchName === names[middle]) {
    return phones[middle]; // Found the name
  }

  if (searchName < names[middle]) {
    return binarySearch(names, phones, searchName, start, middle - 1); // Search left
  } else {
    return binarySearch(names, phones, searchName, middle + 1, end); // Search right
  }
}

const phones = [
  "2101234567",
  "2102345678",
  "2103456789",
  "2104567890",
  "2105678901",
  "2105678902",
  "2105678903",
  "2105678904",
  "2105678905",
];

const names = [
  "Ανδρέας",
  "Βασίλης",
  "Γιώργος",
  "Δάφνη",
  "Δέσποινα",
  "Διονύσης",
  "Ευάγγελος",
  "Ειρήνη",
  "Ζήνα",
];

console.log(binarySearch(names, phones, "Ευάγγελος", 0, names.length - 1));
