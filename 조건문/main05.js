const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let [One, Two, Three] = input[0].split(" ").map(Number);

const Agreement1 = 10000;
const Agreement2 = 1000;
const Agreement3 = 100;

if (One === Two && Two === Three) {
  console.log(Agreement1 + One * Agreement2);
} else if (One === Two || One === Three || Two === Three) {
  // 같은 경우 담을 곳 same
  let same;
  if (One === Two) same = One;
  else if (One === Three) same = One;
  else same = Two;
  console.log(Agreement2 + same * Agreement3);
} else {
  const max = Math.max(One, Two, Three);
  console.log(max * Agreement3);
}
