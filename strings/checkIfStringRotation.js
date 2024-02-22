function isRotation(str1, str2) {
  // Check if strings have the same length and are not empty
  if (str1.length !== str2.length || str1.length === 0) {
    return false;
  }

  // Concatenate str1 with itself
  const concatenated = str1 + str1;

  // Check if str2 is a substring of the concatenated string
  return concatenated.includes(str2);
}

// Test cases
console.log(isRotation("waterbottle", "erbottlewat")); // Output: true
console.log(isRotation("hello", "world")); // Output: false
