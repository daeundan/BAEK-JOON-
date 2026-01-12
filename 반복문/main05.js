// 반복문!!

// for 문
// 포문은 조건식이 거짓으로 평가될 때까지 코드블록을 반복 실행함 == 그래서 반복문임

// 기본 포문
// 여기서 i 는 iteration(반복)의 i임
for (var i = 0; i < 2; i++) {
  // 0으로 초기화한 상태; 2보다 작을 때까지; 반복 실행;
  console.log(i);
}

// 중첩 포문
// for 문 안에 또 for문을 쓰는 것

for (var i = 1; i <= 6; i++) {
  for (var j = 1; j <= 6; j++) {
    if (i + j === 6) console.log(`[${i}, ${j}]`);
  }
}

const person = {
  name: "Daeun",
  age: "34",
  occupation: "developer",
};

// for ... in은 객체의 키(속성이름)을 순회할 때 사용한다.
for (const key in person) {
  console.log(`${key} ${person[key]}`);
}

// While 문
// 와일문은 주어신 조건식의 평가 결과가 참이면 코드 블록을 계속해서 반복 실행함.
// for문은 반복횟수가 명확할 때, while문은 반복 횟수가 불명확할 때 사용함.

// while 문은 평가 결과가 거짓이 되면 코드 블록을 실행하지 않고 종료함.

var count = 0;

// 무한루프
while (true) {
  console.log(count);
  count++;
  // 이렇게되면 무한루프에 빠짐;;
  if (count === 3) break;
}
while (count < 3) {
  console.log("와일문 count", count);
  count++;
}
