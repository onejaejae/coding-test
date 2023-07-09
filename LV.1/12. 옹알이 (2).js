function solution(babblings) {
  const voices = ["aya", "ye", "woo", "ma"];

  return babblings
    .map((babbling) => {
      voices.forEach((voice) => {
        if (babbling.includes(voice.repeat(2))) {
          return;
        }

        babbling = babbling.split(voice).join(" ");
      });
      return babbling.trim();
    })
    .filter((v) => v.length === 0).length;
}

console.log(solution(["yeayawmaoo", "uuu", "yeye", "yemawoo", "ayaayaa"]));
