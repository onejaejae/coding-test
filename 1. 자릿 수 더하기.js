function solution(n) {
  let sum = 0;
  while (true) {
    const r = n % 10;
    n = Math.floor(n / 10);

    sum += r;
    if (n <= 0) break;
  }
  return sum;
}

console.log(solution(123));
