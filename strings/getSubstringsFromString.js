function getAllSubstrings(str) {
  const substrings = [];

  // Iterate over each character in the string
  for (let i = 0; i < str.length; i++) {
    // Generate substrings starting from the current character
    for (let j = i + 1; j <= str.length; j++) {
      substrings.push(str.slice(i, j));
    }
  }

  return substrings;
}

// Test the function
const inputString = "abc";
const result = getAllSubstrings(inputString);
console.log(result);
