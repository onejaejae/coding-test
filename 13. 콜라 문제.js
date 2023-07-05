function solution(a, b, n) {
  let sum = 0;

  while (n >= a) {
    const r = n % a;
    const q = parseInt(n / a);

    n = q * b + r;
    sum += q * b;
  }
  return sum;
}

console.log(solution(3, 1, 20));
