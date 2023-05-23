/* 
Euclidean algorithm:
for a > b
gcd(a,b) => gcd(a % b, b)
if( a % b == 0) => gcd = b else gcd = a
*/

function gcd(a, b) {
  while (a > 0 && b > 0) {
    if (a > b) {
      a = a % b;
    } else {
      b = b % a;
    }
    if (a == 0) {
      return b;
    } else {
      return a;
    }
  }
}

console.log(gcd(2, 1));

//smaller implementation

function gcd(n) {
  if (b == 0) {
    return a;
  }
  return gcd(b, a % b);
}

//iterative

function gcd(n) {
  while (b != 0) {
    [a, b] = [b, a % b];
  }
  return a;
}
