function pattern8(inputNum) {
  for (let i = 0; i < inputNum; i++) {
    for (let j = 0; j < i; j++) {
      process.stdout.write(" ");
    }
    for (let j = 0; j < 2 * inputNum - (2 * i + 1); j++) {
      process.stdout.write("*");
    }
    for (let j = 0; j < i; j++) {
      process.stdout.write(" ");
    }
    process.stdout.write("\n");
  }
}

pattern8(5);
