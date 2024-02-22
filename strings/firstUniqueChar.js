function firstUniqueChar(str) {
  // Create an object to store the count of each character
  const charCount = {};

  // Iterate through the string to count occurrences of each character
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Iterate through the string to find the first non-repeating character
  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  // If no non-repeating character found, return null
  return null;
}

// Test cases
console.log(firstUniqueChar("leetcode")); // Output: "l"
console.log(firstUniqueChar("hello")); // Output: "h"
console.log(firstUniqueChar("loveleetcode")); // Output: "v"
console.log(firstUniqueChar("aabbcc")); // Output: null (no non-repeating characters)
