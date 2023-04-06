function pattern7(inputNum) {
  for (let i = 0; i < inputNum; i++) {
    for (let j = 0; j < inputNum - i - 1; j++) {
      process.stdout.write(" ");
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      process.stdout.write("*");
    }
    for (let j = 0; j < inputNum - i - 1; j++) {
      process.stdout.write(" ");
    }
    process.stdout.write("\n");
  }
}

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

pattern7(5);
pattern8(5);
