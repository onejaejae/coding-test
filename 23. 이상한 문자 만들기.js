function solution(s) {
  return s
    .split(" ")
    .map((v) =>
      v
        .split("")
        .map((v2, idx) => (idx % 2 === 0 ? v2.toUpperCase() : v2.toLowerCase()))
        .join("")
    )
    .join(" ");
}

console.log(solution("TRy HElLo  WORLD "));
