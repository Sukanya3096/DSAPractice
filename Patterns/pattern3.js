function pattern3(inputNum) {
  for (i = 0; i < inputNum; i++) {
    for (j = 0; j < i; j++) {
      process.stdout.write(String(j + 1));
    }
    process.stdout.write("\n");
  }
}

pattern3(6);
