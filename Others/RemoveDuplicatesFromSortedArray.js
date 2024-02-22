// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0; // Edge case for empty array

  let j = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[j - 1]) {
      // Compare with the last unique element
      nums[j] = nums[i]; // Update the next position with the unique element
      j++;
    }
  }
  return j;
};
