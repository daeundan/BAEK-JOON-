// 배열 값 변화 추적(기초)
// 수도 코드 먼저 작성
// 내가 뭘 작성할지 먼저 작성

const arr = [2, 4, 8];

arr[0] = arr[0] + 2;
// 2 <- 2 + 2
// 0번째에 4가 들어감
// 4, 4, 8

arr[2] = arr[0] + arr[1];
// 8 <- 4[arr의 0번째 값] + 4[arr의 1번째 값]
// arr의 2번째 값(실제로는 3번째)에 4 + 4 를 넣어준다
// 4, 4, 8

// arr 결과 출력
console.log(arr);
// 예상되는 출력결과는?
// [4, 4, 8]

const NumResult = Number(arr[0], arr[1], arr[2]);

console.log(NumResult);
// 4
// 왜 4만 출력되지?

// 숫자로 변환시키기
const Num1 = Number(arr[0]);
const Num2 = Number(arr[1]);
const Num3 = Number(arr[2]);

console.log(Num1, Num2, Num3);
// 4 4 8
// 숫자로 잘 변환된 거 맞는지 확인
console.log(Num1 + Num2 + Num3);
// 16

const Str1 = String(Num1);
const Str2 = String(Num2);
const Str3 = String(Num3);

console.log(Str1, Str2, Str3);
// 4 4 8

// 문자로 잘 변환된 거 맞는지 확인
console.log(Str1 + Str2 + Str3);

// String 변환된 값이 ""이 안붙어서 헷갈린다
// ""을 붙여보자
console.log(`"${Str1}"`, `"${Str2}"`, `"${Str3}"`);

// number를 1 2 3으로 받고, "1", "2", "3" 문자로 변환시켜 출력하기

const num = Number(1);
const num2 = Number(2);
const num3 = Number(3);

// 숫자 확인 출력하기
console.log(num, num2, num3);
// 예상 출력 결과 - 1 2 3

// 숫자 재검증 (숫자라면 수로 더해질 것임)
console.log(num + num2 + num3);
// 예상 출력 결과 - 6

// 문자로 변환시키기
const StrNum1 = String(num);
const StrNum2 = String(num2);
const StrNum3 = String(num3);

// 문자열 확인 출력하기(문자라면 더해지지 않을 것임)
console.log(StrNum1 + StrNum2 + StrNum3);
// 예상 출력 결과 123

// 문자열 재검증
console.log(`"${StrNum1}" , "${StrNum2}", "${StrNum3}"`);
// 예상 출력 결과 "1", "2", "3"
