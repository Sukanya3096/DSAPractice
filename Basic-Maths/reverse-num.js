// function toDecimal(v) {
//   let binary = "";
//   if (typeof v == "string") {
//     binary = v.split();
//   } else {
//     binary = v.toString().split();
//   }
//   let decimal = 0;
//   for (let i = 0; i < binary.length; i++) {
//     decimal = decimal * 2 + binary[i];
//   }
//   return decimal;
// }
// function numToBit(num) {
//   var number = num;
//   var result = [];
//   while (number >= 1) {
//     result.unshift(Math.floor(number % 2));
//     number = number / 2;
//   }
//   console.log(result);
//   return result.map((x) => +x);
// }
// function reversedBits(X) {
//   let num = numToBit(X);
//   let revNum = 0;
//   while (num > 0) {
//     let lastDigit = Math.floor(num % 10);
//     revNum = revNum * 10 + lastDigit;
//     num = Math.floor(num / 10);
//   }
//   return toDecimal(revNum);
// }

function reversedBits(x) {
  let arr1 = [];

  let sum = 0;

  for (let i = 0; i < 32; i++) {
    arr1[i] = Math.floor(x % 2);

    x = Math.floor(x / 2);

    sum += Math.floor(arr1[i] * Math.pow(2, 31 - i));
  }

  return sum;
}
console.log(reversedBits(1));
