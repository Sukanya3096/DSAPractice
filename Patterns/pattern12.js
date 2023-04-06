function pattern12(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(String(j));
    }
    for (let j = 0; j <= 2 * (n - i); j++) {
      process.stdout.write(" ");
    }

    for (let j = i; j >= 1; j--) {
      process.stdout.write(String(j));
    }
    process.stdout.write("\n");
  }
}

pattern12(4);
