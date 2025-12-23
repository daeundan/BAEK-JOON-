// 백준에서는 표준 입력을 한 번에 읽는 게 표준
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const A = Number(input[0]);
const B = Number(input[1]);
const C = Number(input[2]);

console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);
