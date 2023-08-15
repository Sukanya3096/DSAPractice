function bubbleSort(arr) {
    // Helper function to swap two elements in the array
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
  
    // Iterate through the array
    for (let i = arr.length; i > 0; i--) {
      // Flag to track if any swaps were made in the current iteration
      let didSwap = false;
  
      // Iterate through the array from the beginning to the current 'i'
      for (let j = 0; j < i - 1; j++) {
        // Compare adjacent elements and swap if necessary
        if (arr[j] > arr[j + 1]) {
          didSwap = true;
          swap(arr, j, j + 1);
        }
      }
  
      // If no swaps were made in the current iteration, the array is already sorted
      if (didSwap === false) {
        break;
      }
    }
  }
  