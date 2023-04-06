function pattern19(n) {
  let string = "";
  let spaces = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      string += "*";
    }
    for (let j = 0; j < spaces; j++) {
      string += " ";
    }

    for (let j = 0; j < n - i; j++) {
      string += "*";
    }

    spaces += 2;
    string += "\n";
  }
  console.log(string);
}

function pattern19_2(n) {
  let string = "";
  let spaces = 2 * n - 2;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      string += "*";
    }
    for (let j = 0; j < spaces; j++) {
      string += " ";
    }

    for (let j = 0; j <= i; j++) {
      string += "*";
    }

    spaces -= 2;
    string += "\n";
  }
  console.log(string);
}

pattern19(5);
pattern19_2(5);
