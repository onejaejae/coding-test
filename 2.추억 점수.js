function solution(name, yearning, photo) {
  const obj = {};
  const arr = [];
  for (let i = 0; i < name.length; i++) {
    obj[name[i]] = yearning[i];
  }

  photo.forEach((p1) => {
    let sum = 0;
    p1.forEach((p2) => {
      let score = obj[p2] ? obj[p2] : 0;
      sum += score;
    });
    arr.push(sum);
  });

  return arr;
}

console.log(
  solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [
      ["may", "kein", "kain", "radi"],
      ["may", "kein", "brin", "deny"],
      ["kon", "kain", "may", "coni"],
    ]
  )
);
