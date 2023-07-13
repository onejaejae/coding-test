function solution(s) {
  let stack = [];
  let cnt = 0;

  [...s].forEach((s) => {
    stack.push(s);

    const equalArrLen = stack.filter((s) => s === stack[0]).length;
    const nonEqualArrLen = stack.filter((s) => s !== stack[0]).length;

    if (equalArrLen === nonEqualArrLen) {
      cnt += 1;
      stack = [];
    }
  });

  if (stack.length > 0) cnt += 1;
  return cnt;
}

console.log(solution("banana"));
