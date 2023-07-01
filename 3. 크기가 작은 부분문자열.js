function solution(t, p) {
  const tLength = t.length;
  const pLength = p.length;
  const len = tLength - pLength;

  let res = 0;

  for (let i = 0; i <= len; i++) {
    const str = t.substr(i, pLength);
    res = str <= p ? res + 1 : res;
  }

  return res;
}

console.log(solution("3141592", "271"));
