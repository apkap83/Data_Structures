function findPhoneNumber(targetName, mainSequence, indexSequence) {
  // Step 1: Extract the first letter of the target name
  const firstLetter = targetName[0];

  // Step 2: Find the starting and ending position from the index sequence
  let start = 0;
  let end = mainSequence.length;

  for (let i = 0; i < indexSequence.length; i++) {
    const [letter, position] = indexSequence[i];

    if (letter === firstLetter) {
      start = position;
      // If it's the last entry, set 'end' to the length of the main sequence
      end =
        i === indexSequence.length - 1
          ? mainSequence.length
          : indexSequence[i + 1][1];
      break;
    }
  }

  // Step 3: Perform binary search in the identified range
  let left = start;
  let right = end - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const [name, phone] = mainSequence[mid];

    if (name === targetName) {
      return phone; // Found the phone number
    } else if (name < targetName) {
      left = mid + 1; // Search the right half
    } else {
      right = mid - 1; // Search the left half
    }
  }

  // Step 4: If not found, return an error message
  return "Subscriber not found";
}

// Main sequence: (Subscriber Name, Phone Number) sorted alphabetically
const mainSequence = [
  ["Ανδρέας", "2101234567"],
  ["Βασίλης", "2102345678"],
  ["Γιώργος", "2103456789"],
  ["Δάφνη", "2104567890"],
  ["Δέσποινα", "2105678901"],
  ["Διονύσης", "2105678902"],
  ["Ευάγγελος", "2105678903"],
  ["Ειρήνη", "2105678903"],
  ["Ζήνα", "2105678904"],
];

// Index sequence: (Letter, Starting Position in mainSequence)
const indexSequence = [
  ["Α", 0],
  ["Β", 1],
  ["Γ", 2],
  ["Δ", 3],
  ["Ε", 6],
  ["Ζ", 8],
];

// Search for a subscriber
console.log(findPhoneNumber("Δέσποινα", mainSequence, indexSequence)); // Output: 2105678901
console.log(findPhoneNumber("Ζήνα", mainSequence, indexSequence)); // Output: Subscriber not found
