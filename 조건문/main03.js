// 오븐 시계 종료시간 출력

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

let H = Number(input[0]);
let M = Number(input[1]);
let T = Number(input[2]);

if (H > 23) {
  H = 0;
}

if (M > 59) {
  M = 0;
}

console.log(`${H} ${M}+${T}`);
