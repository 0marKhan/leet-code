const sortArray = (arr) => {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    // arr.length - 1 - i
    //  - 1 because during swapping we use arr[j + 1] sp we're trying to not go out of bounds
    // - i because skipping over the aready sorted numbers
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
};

let arr = [2, 4, 6, 1, 3, 8, 9, 2, 5, 3];

console.log(sortArray(arr));
