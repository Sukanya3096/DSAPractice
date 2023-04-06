function pattern11(inputNum) {
  let start = 1;
  for (let i = 0; i < inputNum; i++) {
    start = i % 2 == 0 ? 1 : 0;
    for (let j = 0; j <= i; j++) {
      process.stdout.write(String(start));
      start = 1 - start;
    }
    process.stdout.write("\n");
  }
}
pattern11(5);
