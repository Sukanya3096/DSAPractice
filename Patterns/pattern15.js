function pattern15(n) {
  let string = "";
  // External loop
  for (let i = n; i >= 1; i--) {
    for (let j = 0; j < i; j++) {
      string += String.fromCharCode(j + 65);
    }
    string += "\n";
  }
  console.log(string);
}

pattern15(5);
