function solution(keymaps, targets) {
  const map = {};
  const res = [];

  keymaps.forEach((keymap) =>
    keymap
      .split("")
      .forEach((v, idx) => (map[v] = map[v] < idx + 1 ? map[v] : idx + 1))
  );

  for (const target of targets) {
    res.push(target.split("").reduce((acc, cur) => acc + map[cur], 0) || -1);
  }
  return res;
}

console.log(solution(["AA"], ["B"]));
