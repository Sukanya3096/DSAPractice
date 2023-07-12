var minSubArrayLen = function(target, nums) {
    const len = nums.length;
     let ans = 0;
     let sum = 0;
   
     let i = 0;
     let j = 0;
   
     while (i < len-1 && j <= len) {
       const l = nums[i];
       const r = nums[j];
   
       if (r >= target) {
         ans = 1;
         break;
       }
   
       if (sum >= target) {
         const count = j - i;
         ans = ans === 0 ? count : Math.min(ans, count);
         sum -= l;
         i++;
       } else {
         sum += r;
         j++;
       }
     }
   
     return ans;
   };