// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

function solution(A) {
  A.sort((a, b) => a - b);

  let missing = 1;

  // Find the smallest positive missing integer
  for (const num of A) {
    if (num === missing) {
      missing++;
    } else if (num > missing) {
      return missing;
    }
  }

  return missing;
}

const A = [1, 3, 6, 4, 1, 2];
console.log(solution(A));
