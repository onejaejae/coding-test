function solution(k, score) {
  const res = [];

  return score.map((s, i) => {
    if (i < k) {
      res.push(s);
      res.sort((a, b) => a - b);
    } else {
      res.push(s);
      res.sort((a, b) => a - b);
      res.shift();
    }
    console.log("res", res);
    return res[0];
  });
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));
