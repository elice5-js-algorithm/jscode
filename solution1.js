const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let count = 1;
let cardNumber = 0;
let cardList = [];
let favorite = 0;
let answer = 0;
rl.on("line", function (x) {
  if (count === 1) {
    cardNumber = parseInt(x);
  } else if (count === 2) {
    cardList = x.split(' ').map(Number); //그냥 x.split(' ')을 push하는 형태는 리스트가 제대로 생기지X
  } else {                             //parseInt(x.split(' '))도 마찬가지
    favorite = parseInt(x);
  }

  if (count > 3) {
    rl.close();
  }

  count++;//count++을 쓰지 않으면 계속 1에만 값이 할당되어서 꼭 써야 함!
}).on("close", function () {
  for (let i = 0; i < cardList.length; i++) {
    if (cardList[i] === favorite) {
      answer += 1;
    }
  }
  console.log(answer); // 입력 완료 후에 출력
  process.exit();
});