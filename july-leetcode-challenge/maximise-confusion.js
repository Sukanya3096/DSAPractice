var maxConsecutiveAnswers = function(answerKey, k) {
    let i = 0;
   let j = 0;
   const n = answerKey.length;
   let t = 0;
   let f = 0;
   let rs = 0;
   while(j < n) {
       
       if(answerKey[j] === 'T') t++;
       else f++;
       
       if(t <= k || f <= k) {
           rs = Math.max(rs, t + f);
       }

       while(t > k && f > k) {
           if(answerKey[i] === 'T') t--;
           else f--;
           i++;
       }
       j++;
   }
   return rs;
};