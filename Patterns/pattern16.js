function pattern16(n) {
  let string = "";
  let character = 65;
  // External loop
  for (let i = 0; i < n; i++) {
    // printing characters
    for (let j = 0; j < i; j++) {
      string += String.fromCharCode(character);
    }
    character = i + 65;
    string += "\n";
  }
  console.log(string);
}

pattern16(5);
