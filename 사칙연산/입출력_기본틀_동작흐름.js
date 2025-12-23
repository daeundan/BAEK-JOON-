// 입출력 백준 기본틀

// 동작 흐름: 입력 전체 → 한 번에 메모리에 로드 → 파싱 → 출력

let fs = require("fs");
// Node.js의 파일 시스템 모듈을 불러옴
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// 표준 입력(stdin) 을 동기 방식으로 읽음  문자열로 변환ㅡ배경롤 만듦
// 입력을 한 번에 전부 읽음 : 코테/백준 표준

let count = input[0];
let numbers = [];

// 입력값 파싱
for (let i = 1; i < input.length; i++) {
  if (input[i] !== "") {
    numbers.push(input[i].split(" "));
    // 빈 줄은 무시(띄어쓰기)
    // 공백 기준으로 나눈 후 배열에 추가
  }
}

for (let i = 0; i < numbers.length; i++) {
  // 숫자 처리
  let num1 = Number(numbers[i][0]);
  let num2 = Number(numbers[i][1]);
  // 문자를 숫자로 변환

  console.log(num1 + num2);
  // 출력 - 줄바꿈
}
