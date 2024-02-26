const majorityElement = (arr) => {
  const dict = {};

  arr.forEach((item) => {
    // if the dictionary doesnt contain the value set its count to 1
    if (!dict.hasOwnProperty(item)) {
      dict[item] = 1;
    } else {
      // if it already contains the value add it by 1
      dict[item] += 1;
    }
  });

  // sorting the array in descending order
  const keys = Object.keys(dict);
  keys.sort((a, b) => dict[b] - dict[a]);

  // returns the key for the highest value in the dictionary
  return keys[0];
};

let nums = [2, 2, 1, 1, 1, 2, 2];

console.log(majorityElement(nums));
