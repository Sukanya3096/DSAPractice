var largestVariance = function(s) {
    let max_variance = 0;

  let unique = [...new Set(s)];
  for (let a of unique) {
    for (let b of unique) {
      if (a == b) {
        continue;
      }
      let a_against_b = solveOne(a, b, s);
      max_variance = Math.max(a_against_b, max_variance);
    }
  }

  return max_variance;
}

function solveOne(a, b, string) {
  let max_var = 0;
  let variance = 0;
  let has_b = false;
  let first_b = false;

  for (let c of string) {
    if (c == a) {
      variance += 1;
    } else if (c == b) {
      has_b = true;
      if (first_b && variance >= 0) {
        /*shift right" and save a 1 in the current sum to be able to properly maximise it  we can only do this when we know that we have a `b` at the start of our current subarray, and we'll only ever have a single b at the start
         always followed by an a, due to the next rule
        */
        first_b = false;
      } else if (variance - 1 < 0) {
        //restart the subarray from this b (inclusive) onwards
        first_b = true;
        variance = -1;
      } else {
        variance -= 1;
      }
    }
    if (has_b && variance > max_var) {
      max_var = variance;
    }
  }
  return max_var;
}