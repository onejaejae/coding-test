function solution(food) {
  const res = food
    .slice(1)
    .map((food) => parseInt(food / 2))
    .reduce((acc, cur, idx) => (acc += (idx + 1).toString().repeat(cur)), "");

  return res.concat("0" + res.split("").reverse().join(""));
}

console.log(solution([1, 3, 4, 6]));
