const checkAnagrams = (str1, str2) => {
  let length1 = str1.length;
  let length2 = str2.length;

  if (length1 !== length2) {
    return false;
  }

  // we do this to convert the strings into arrays
  let sortedStr1 = str1.toLowerCase().split("").sort().join("");
  let sortedStr2 = str2.toLowerCase().split("").sort().join("");

  for (let i = 0; i < length1; i++) {
    if (sortedStr1[i] !== sortedStr2[i]) {
      return false;
    }
  }

  return true;
};

let word1 = "Omar";
let word2 = "ramo";

console.log(checkAnagrams(word1, word2));
