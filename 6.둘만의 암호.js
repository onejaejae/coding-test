function solution(s, skip, index) {
  const last = "z".charCodeAt();
  skip = skip.split("").map((s) => s.charCodeAt());
  return s
    .split("")
    .map((s) => s.charCodeAt())
    .map((v) => {
      let newIndex = index;
      for (let i = 0; i < newIndex; i++) {
        v += 1;
        if (v > last) v -= 26;
        skip.includes(v) && newIndex++;

        //  skip.includes(v) && v++;
        // 위 같은 로직으로 진행하면, v > last 같은 경우가 발생할 수 있기 때문에 안된다.
      }
      return String.fromCharCode(v);
    })
    .join("");
}
console.log(solution("aukks", "wbqd", 5));
