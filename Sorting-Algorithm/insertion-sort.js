// Function to perform insertion sort on an array
function insertionSort(arr) {
    // Iterate through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
      // Iterate backwards from the current element to the beginning of the array
      // and compare each element with its previous element
      for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
        // Swap the current element with its previous element if the current element is smaller
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      }
    }
  }