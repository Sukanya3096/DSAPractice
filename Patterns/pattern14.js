function pattern14(n) {
  let string = "";
  // External loop
  for (let i = 1; i <= n; i++) {
    // printing characters
    for (let j = 0; j < i; j++) {
      string += String.fromCharCode(j + 65);
    }
    string += "\n";
  }
  console.log(string);
}

pattern14(5);
