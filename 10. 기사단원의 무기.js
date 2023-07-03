function solution(number, limit, power) {
  const numbers = [];
  for (let i = 0; i < number; i++) {
    numbers.push(i + 1);
  }

  return numbers
    .map((num) => {
      let cnt = 0;
      for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          cnt += 1;
          if (num / i != i) cnt += 1;
        }
      }
      return cnt;
    })
    .map((v) => (v > limit ? power : v))
    .reduce((acc, val) => acc + val, 0);
}

console.log(solution(5, 3, 2, 10));
