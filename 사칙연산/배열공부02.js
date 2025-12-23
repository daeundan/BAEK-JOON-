const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  // const [A, B, C] = line.split(" ").map(Number);

  // for (let i = 1; i < input.length; i++) {
  //   if (input[i] !== "") {
  //     numbers.push(input[i].split(" "));
  //   }
  // }
  // for (i = 0, i < input.length; i++) {
  //   const A = Number(input[0]);
  //   const B = Number(input[1]);
  //   const C = Number(input[2]);
  // }

  line.split.input();

  console.log((A + B) % C);
  console.log(((A % C) + (B % C)) % C);
  console.log((A * B) % C);
  console.log(((A % C) * (B % C)) % C);
  rl.close();
});
