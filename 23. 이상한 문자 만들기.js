function solution(s) {
  return s
    .split(" ")
    .map((v) => {
      let str = "";
      for (let i = 0; i < v.length; i++) {
        if (i === 0 || i % 2 === 0) {
          str += v[i].toUpperCase();
        } else {
          str += v[i];
        }
      }
      return str;
    })
    .join(" ");
}

console.log(solution("try hello world"));
