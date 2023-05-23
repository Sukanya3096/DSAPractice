quadraticRoots(a, b, c);
{
  let arr = [];
  if (a == 0) {
    return arr;
  }

  let d = b * b - 4 * a * c;
  let sqrt_val = Math.sqrt(Math.abs(d));

  if (d > 0) {
    if (
      Math.floor((-b - sqrt_val) / (2 * a)) <
      Math.floor((-b + sqrt_val) / (2 * a))
    ) {
      arr.push(Math.floor((-b + sqrt_val) / (2 * a)));
      arr.push(Math.floor((-b - sqrt_val) / (2 * a)));
    } else {
      arr.push(Math.floor((-b - sqrt_val) / (2 * a)));
      arr.push(Math.floor((-b + sqrt_val) / (2 * a)));
    }

    //return `${(-b + sqrt_val) / (2 * a)}${(-b - sqrt_val) / (2 * a)}`;
  } else if (d == 0) {
    arr.push(Math.floor(-b / (2 * a)));
    arr.push(Math.floor(-b / (2 * a)));
    //return `${(-b/(2*a))}${(-b/(2*a))}`;
  } // d < 0
  else {
    arr.push("Imaginary");
  }
  return arr;
}
