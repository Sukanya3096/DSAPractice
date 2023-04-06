function pattern18(n) {
  let string = "";
  for (let i = 0; i <= n; i++) {
    for (j = i; j > 0; j--) {
      string += String.fromCharCode(65 + n - j);
    }
    string += "\n";
  }
  console.log(string);
}
// function pattern18(n) {
//     let string = "";
//     for (let i = 0; i < n; i++) {
//       for (j = 69 - i; j <= 69; j++) {
//         string += String.fromCharCode(j);
//       }
//       string += "\n";
//     }
//     console.log(string);
//   }

pattern18(5);
