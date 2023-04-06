function pattern5(inputNum) {
  for (i = inputNum; i > 0; i--) {
    for (j = i; j > 0; j--) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
}

pattern5(5);
