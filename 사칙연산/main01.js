const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputLines = [];
rl.on("line", (line) => {
  inputLines.push(line); // 입력받은 줄을 배열에 추가
});

rl.on("close", () => {
  console.log(inputLines);
});
