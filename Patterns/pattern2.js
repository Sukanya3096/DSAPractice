function pattern2(inputNum) {
  for (i = 0; i < inputNum; i++) {
    for (j = 0; j < i; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
}

pattern2(6);
