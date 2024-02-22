// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

var merge = function (nums1, m, nums2, n) {
  // Remove the zeros at the end of nums1 to make space for merging
  nums1.splice(m);

  // Merge nums2 into nums1 while maintaining sorted order
  nums1.push(...nums2);

  // Sort the merged array in non-decreasing order
  nums1.sort((a, b) => a - b);
};
