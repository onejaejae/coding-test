function solution(arr) {
  const xMap = {};
  const yMap = {};
  const res = [];

  arr.forEach((v) =>
    v.forEach((v2, idx) => {
      if (idx === 0) {
        xMap[v2] = xMap[v2] ? xMap[v2] + 1 : 1;
      } else {
        yMap[v2] = yMap[v2] ? yMap[v2] + 1 : 1;
      }
    })
  );

  for (const [key, value] of Object.entries(xMap)) {
    if (value === 1) {
      res.push(Number(key));
    }
  }

  for (const [key, value] of Object.entries(yMap)) {
    if (value === 1) {
      res.push(Number(key));
    }
  }

  return res;
}

console.log(
  solution([
    [1, 4],
    [3, 4],
    [3, 10],
  ])
);
