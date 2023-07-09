function solution(number) {
  let res = 0;
  for (let i = 0; i < number.length - 2; i++) {
    for (let j = 1 + i; j < number.length; j++) {
      for (let k = 1 + j; k < number.length; k++) {
        res = number[i] + number[j] + number[k] === 0 ? res + 1 : res;
      }
    }
  }
  return res;
}

console.log(solution([-3, -2, -1, 0, 1, 2, 3]));
