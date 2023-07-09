function solution(n, m, section) {
  let res = 0;
  let part = 0;

  section.forEach((s) => {
    if (s > part) {
      part = s + m - 1;
      res += 1;
    }
  });
  return res;
}

console.log(solution(8, 4, [2, 3, 6]));
