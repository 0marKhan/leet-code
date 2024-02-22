// Given a string, return all possible substrings along with each substring's frequency/count. in javascript

function countSubstrings(str) {
  const substrings = {};
  const n = str.length;

  // goes over each character in the string
  for (let i = 0; i < n; i++) {
    // looks for ever combination of the string
    for (let len = 1; len <= n - i; len++) {
      // gets the substring
      const substring = str.substr(i, len);
      // if the substring exists in the dictionary adds 1 to it, else initializes it with 1
      substrings[substring] = (substrings[substring] || 0) + 1;
    }
  }

  return substrings;
}

const inputString = "abab";
const result = substringCount(inputString);

console.log(result);
