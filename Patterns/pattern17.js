function pattern17(n) {
  let string = "";
  let character = 65;
  // External loop
  for (let i = 0; i < n; i++) {
    //printing space
    for (let j = 0; j < n - i - 1; j++) {
      string += " ";
    }
    // printing characters
    for (let j = 0; j < 2 * i + 1; j++) {
      if (j <= i) {
        character = 65 + j;
        string += String.fromCharCode(character);
      } else {
        character = character - 1;
        string += String.fromCharCode(character);
      }
    }
    //printing space
    for (let j = 0; j < n - i - 1; j++) {
      string += " ";
    }
    string += "\n";
  }
  console.log(string);
}

pattern17(5);
