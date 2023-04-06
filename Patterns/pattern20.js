function pattern20(n) {
  let string = "";
  let spaces = 2 * n - 2;
  let spaces_2 = 2;
  for (let i = 1; i < 2 * n; i++) {
    if (i <= 5) {
      for (let j = 1; j <= i; j++) {
        string += "*";
      }
      for (let j = 1; j <= spaces; j++) {
        string += " ";
      }

      for (let j = 1; j <= i; j++) {
        string += "*";
      }
      spaces -= 2;
    } else {
      for (let j = 1; j <= 2 * n - i; j++) {
        string += "*";
      }
      for (let j = 1; j <= spaces_2; j++) {
        string += " ";
      }

      for (let j = 1; j <= 2 * n - i; j++) {
        string += "*";
      }
      spaces_2 += 2;
    }

    string += "\n";
  }
  console.log(string);
}

pattern20(5);
