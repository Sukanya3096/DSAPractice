/**
 * Sorts an array in ascending order using the selection sort algorithm.
 * @param {Array} arr - The array to be sorted.
 * @returns {undefined} - The original array is modified in place.
 */
function selectionSort(arr) {
    let n = arr.length;
  
    // Iterate through each element of the array
    for (let i = 0; i <= n - 2; i++) {
      let min = i;
  
      // Find the index of the minimum element in the unsorted portion of the array
      for (let j = i + 1; j <= n - 1; j++) {
        if (arr[j] < arr[min]) {
          min = j;
        }
      }
  
      // Swap the minimum element with the current element
      if (min != i) {
        [arr[min], arr[i]] = [arr[i], arr[min]];
      }
    }
  }