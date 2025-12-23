// 내가 실행시킨 코드

// [문제]
// (A+B)%C는 ((A%C) + (B%C))%C 와 같을까?

// (A×B)%C는 ((A%C) × (B%C))%C 와 같을까?

// 세 수 A, B, C가 주어졌을 때, 위의 네 가지 값을 구하는 프로그램을 작성하시오.

// [입력]
// 첫째 줄에 A, B, C가 순서대로 주어진다. (2 ≤ A, B, C ≤ 10000)

// [출력]
// 첫째 줄에 (A+B)%C, 둘째 줄에 ((A%C) + (B%C))%C, 셋째 줄에 (A×B)%C, 넷째 줄에 ((A%C) × (B%C))%C를 출력한다.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function addOne(x) {
  return x + 1;
}
// 2, 4, 8 을 받았다고 했을때
rl.on("line", (line) => {
  const arr = line.split(" ");
  console.log("arr", arr);
  // arr ["3", "6", "9"]

  //   console.log("arrAddOne", arr.map(addOne));

  const arrNumber = [];
  for (let i = 0; i < arr.length; i = i + 1) {
    arrNumber[i] = Number(arr[i]);
  }

  console.log("arrNumber", arrNumber);
  // arrNumber 3, 6, 9
  //   for (let i = 0; i < arrNumber.length; i = i + 1) {
  //     console.log("for i", i, arrNumber[i]);

  //     arrNumber[i] = arrNumber[i] / 2;

  //     console.log("for i2", i, arrNumber[i]);
  //   }
  console.log(arrNumber[1]);
  // 6
  console.log(arrNumber[2]);
  // 9
  console.log(arrNumber[0]);
  // 3

  // 3, 6, 9
  console.log(arrNumber[0] + 2);
  // 5
  // 3 6 9
  // 무엇을 안해서 착각?
  arrNumber[0] = arrNumber[0] + 4;
  // 7을 0번째에 넣는다
  // arrNumber[0] = 7
  //   7, 6, 9

  console.log(arrNumber[0]);
  // 7
  // 7 6 9
  arrNumber[2] = arrNumber[0] + 4;
  // 7, 6, 11
  // 배열 2번째에 13을 넣는다

  console.log(arrNumber[1]);
  // 6
  console.log(arrNumber[2]);

  // 11

  //   답은
  //  arr ["3", "6", "9"]
  // arrNumber 3, 6, 9
  // 6
  // 9
  // 3
  // 5
  // 9
  // 6
  // 11

  //   console.log("arrAddOne", arrAddOne);

  //   console.log("문자열 + 숫자", "12" + 1);
  //   console.log("숫자 + 숫자", 1 + 2);

  //   const arrNumber = arr.map(Number);

  //   console.log("arrNumber", arrNumber);
  //   console.log("arrNumberAddOne", arrNumber.map(addOne));
});
