function pattern10(inputNum) {
  for (let i = 1; i < 2 * inputNum - 1; i++) {
    let stars = i;
    if (i > inputNum) {
      stars = 2 * inputNum - i;
    }
    for (let j = 1; j <= stars; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
}

pattern10(5);
