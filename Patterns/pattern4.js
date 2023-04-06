function pattern4(inputNum) {
  for (i = 0; i < inputNum; i++) {
    for (j = 0; j < i; j++) {
      process.stdout.write(String(i));
    }
    process.stdout.write("\n");
  }
}

pattern4(6);
