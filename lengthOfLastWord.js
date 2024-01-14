function lengthOfLastWord(s) {
  // Trim leading and trailing spaces from the string
  s = s.trim();

  let lastWordLength = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " ") {
      break; // Stop when a space is encountered
    } else {
      lastWordLength++;
    }
  }

  return lastWordLength;
}

// Test cases
const s1 = "Hello World";
const s2 = "   fly me   to   the moon  ";
const s3 = "luffy is still joyboy";

console.log(lengthOfLastWord(s1)); // Output: 5
console.log(lengthOfLastWord(s2)); // Output: 4
console.log(lengthOfLastWord(s3)); // Output: 6
