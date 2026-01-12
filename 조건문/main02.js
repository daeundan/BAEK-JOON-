const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let [H, M] = input[0].split(" ").map(Number);
let T = Number(input[1]);

M += T;

H += Math.floor(M / 60);
M = M % 60;

H = H % 24;
console.log(H, M);
