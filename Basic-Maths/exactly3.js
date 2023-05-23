function exactly3(n) {
  let p = 2;
  let count = 0;
  while (p * p <= n) {
    if (isPrime(p)) {
      count++;
    }
    p++;
  }
  return count;
}

function isPrime(n) {
  if (n == 2 || n == 3) {
    return true;
  }
  if (n % 2 == 0 || n % 3 == 0) {
    return false;
  }
  for (let i = 5; i * i <= n; i = i + 6) {
    if (n % i == 0 || n % (i + 2) == 0) {
      return false;
    }
  }
  return true;
}
console.log(exactly3(10));
