function rotateString(str, offset) {
  // Ensure positive offset
  offset %= str.length;

  // Rotate the string
  const rotated = str.slice(offset) + str.slice(0, offset);

  return rotated;
}

// Test cases
console.log(rotateString("waterbottle", 3)); // Output: "erbottlewat"
console.log(rotateString("hello", 2)); // Output: "llohe"
