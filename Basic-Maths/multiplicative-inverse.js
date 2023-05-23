let x, y;

// Function for extended Euclidean Algorithm
function gcdExtended(a, b) {
  // Base Case
  if (a == 0) {
    x = 0;
    y = 1;
    return b;
  }

  // To store results of recursive call
  let gcd = gcdExtended(b % a, a);
  let x1 = x;
  let y1 = y;

  // Update x and y using results of recursive
  // call
  x = y1 - Math.floor(b / a) * x1;
  y = x1;

  return gcd;
}

function modInverse(a, m) {
  let g = gcdExtended(a, m);
  console.log(g, x, m);
  if (g != 1) {
    return -1;
  } else {
    // m is added to handle negative x
    let res = ((x % m) + m) % m;
    if (res == 0) {
      return -1;
    }
    return res;
  }
}

console.log(modInverse(3, 11));
