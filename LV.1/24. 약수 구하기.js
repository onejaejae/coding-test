function solution(n) {
  let sum = 0;

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      sum += i;
      const q = parseInt(n / i);
      if (q !== i) sum += q;
    }
  }
  return sum;
}

console.log(solution(12));
