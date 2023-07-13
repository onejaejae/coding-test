function solution(n) {
  const arr = new Array(n + 1).fill(true);

  for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
    for (j = i * 2; j <= n; j += i) {
      arr[j] = false;
    }
  }
  return arr.filter((num) => num === true).length - 2;
}

console.log(solution(10));
