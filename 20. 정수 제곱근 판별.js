function solution(n) {
  const s = Math.sqrt(n);

  if (Number.isInteger(s)) {
    return Math.pow(s + 1, 2);
  }
  return -1;
}

console.log(solution(121));
