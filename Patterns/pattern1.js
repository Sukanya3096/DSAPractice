function pattern1(inputNum) {
  for (i = 0; i < inputNum; i++) {
    for (j = 0; j < inputNum; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
}

pattern1(6);
