function solution(n) {
  return String(n)
    .split("")
    .map((v) => Number(v))
    .reverse();
}
console.log(solution(12345));
