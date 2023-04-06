function pattern13(n) {
  let val = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(String(val) + " ");
      val += 1;
    }
    process.stdout.write("\n");
  }
}

pattern13(5);
