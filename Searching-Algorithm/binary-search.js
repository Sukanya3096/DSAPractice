function binarySearch(arr, target) {
    let left = 0; // set the left pointer to the start of the array
    let right = arr.length - 1; // set the right pointer to the end of the array
    let middle = Math.floor((left + right) / 2); // calculate the middle index of the array
  
    // loop until the left pointer is less than or equal to the right pointer
    for (let i = 0; i < arr.length && left <= right; i++) {
      // if the middle element is equal to the target, return the middle index
      if (arr[middle] === target) {
        return middle;
      }
      // if the middle element is greater than the target,
      // update the right pointer to be the middle index - 1
      else if (arr[middle] > target) {
        right = middle - 1;
      }
      // if the middle element is less than the target,
      // update the left pointer to be the middle index + 1
      else {
        left = middle + 1;
      }
      // calculate the new middle index
      middle = Math.floor((left + right) / 2);
    }
    // if the target is not found, return -1
    return -1;
  }