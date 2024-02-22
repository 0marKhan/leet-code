const palindrome = (str) => {
  // we use i < j condition here because we're comparing the same string from both start and end
  // so by the time we reach the middle of the string we've checked the whole string
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] !== str[j]) {
      return false;
    } else {
    }
  }
  return true;
};

const str = "madam";
const str2 = "car";
const str3 = "omarkhan";

console.log(palindrome(str));
console.log(palindrome(str2));
console.log(palindrome(str3));
