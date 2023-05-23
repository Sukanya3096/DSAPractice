/* 
The sieve of Eratosthenes is one of the most efficient ways to find all primes smaller than n when n is smaller than 10 million or so.
*/

function sieve(n) {
  let isPrime = new Array(n + 1).fill(true);
  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) {
      console.log(i);
      for (let j = i * i; j <= n; j = j + i) {
        isPrime[j] = false;
      }
    }
  }
}
console.log(sieve(13));
