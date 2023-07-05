function solution(X, Y) {
  const xArr = [...X];
  const yArr = [...Y];

  let res = "";

  for (let i = 9; i > -1; i--) {
    const xCnt = xArr.filter((x) => Number(x) === i).length;
    const yCnt = yArr.filter((y) => Number(y) === i).length;
    const repeatCnt = Math.min(xCnt, yCnt);
    res += String(i).repeat(repeatCnt);
  }

  if (res === "") return "-1";
  if (Number(res) === 0) return "0";
  return res;
}

console.log(solution("12321", "42531"));
