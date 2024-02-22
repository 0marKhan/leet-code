// Example 1:

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).

var removeElement = (nums, val) => {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    // if the array value isnt equal to the search value
    if (nums[i] !== val) {
      // add it to the array using the k index
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};
