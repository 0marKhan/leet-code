var canJump = function (nums) {
  let maxReach = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) {
      return false; // Unable to reach this index
    }
    maxReach = Math.max(maxReach, i + nums[i]);
    // greater than equal to because if it goes out of the length of the array its also true
    if (maxReach >= nums.length - 1) {
      return true; // Able to reach the last index or beyond
    }
  }

  return false; // Unable to reach the last index
};
