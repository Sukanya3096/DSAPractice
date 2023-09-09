var merge = function(arr1, arr2) {
    // Initialize an empty array to store the merged result
    let result = [];
    // Initialize two pointers 'i' and 'j' for 'arr1' and 'arr2' respectively
    let i = 0;
    let j = 0;

    // Calculate the total length of the final merged result
    let finalResultLength = arr1.length + arr2.length;

    // Continue looping until the result array reaches the final desired length
    while (result.length < finalResultLength) {
        // Get the current values at positions 'i' and 'j' in 'arr1' and 'arr2'
        let v1 = arr1[i];
        let v2 = arr2[j];

        // Check if there are no more values in 'arr1' OR if 'v2' is smaller than 'v1'
        if (v1 == undefined || v2 < v1) {
            // Add 'v2' to the result array and increment the 'j' pointer
            result.push(v2);
            j++;
        } else {
            // Add 'v1' to the result array and increment the 'i' pointer
            result.push(v1);
            i++;
        }
    }
    // Return the final merged result
    return result;
};

// Define a function named 'mergeSort' that takes an array 'arr' as input
function mergeSort(arr) {
    // Base case: If the input array has 1 or fewer elements, return it as it is already sorted
    if (arr.length <= 1) {
        return arr;
    }
    // Calculate the middle index of the array
    let mid = Math.floor(arr.length / 2);
    // Recursively call 'mergeSort' on the left and right halves of the array
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    // Merge the sorted left and right halves using the 'merge' function and return the result
    return merge(left, right);
}
