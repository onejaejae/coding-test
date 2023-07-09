function solution(n) {
  return String(n)
    .split("")
    .sort((a, b) => b - a)
    .join("");
}

console.log(solution(118372));
