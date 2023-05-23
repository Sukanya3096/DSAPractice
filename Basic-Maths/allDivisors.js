function printDivisors(n) {
  let i;
  let temp;
  for (i = 1; i * i < n; i++) {
    if (n % i == 0) {
      console.log(i);
    }
  }
  temp = i;
  for (; i >= 1; i--) {
    if (n % i == 0 && n / i != i - 1) {
      console.log(n / i);
    }
  }
}

printDivisors(4);
