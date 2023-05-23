function myPow(x, n) {
  if (n == 0) {
    return 1;
  }
  temp = myPow(x, Math.floor(n / 2));
  temp = temp * temp;
  if (n % 2 == 0) {
    return temp;
  } else {
    return temp * x;
  }
}

console.log(myPow(3, 5));
