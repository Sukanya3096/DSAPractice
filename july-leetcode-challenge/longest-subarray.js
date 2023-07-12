var longestSubarray = function(nums) {
    let result = 0;

  let previousLength = 0;
  let currentLength = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currentLength++;
      previousLength++;

      result = Math.max(result, currentLength);
    } else {
      currentLength = previousLength;
      previousLength = 0;
    }
  }

  return result === nums.length ? result - 1 : result;
};