function solution(s) {
  return [...s].map((v, i) => {
    const idx = s.slice(0, i).lastIndexOf(v);
    return idx < 0 ? idx : i - idx;
  });
}

console.log(solution("banana"));
