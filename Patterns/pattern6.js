function pattern6(inputNum) {
  for (i = inputNum; i > 0; i--) {
    for (j = 1; j <= i; j++) {
      process.stdout.write(String(j));
    }
    process.stdout.write("\n");
  }
}

pattern6(5);
