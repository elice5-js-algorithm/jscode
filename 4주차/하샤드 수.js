function solution(x) {
  let y = (x + "")
    .split("")
    .map((element) => Number(element))
    .reduce((acc, cur) => acc + cur, 0);
  return x % y === 0;
  // 결과값이 boolean 타입이기 때문에 굳이 삼항연산자를 안써도 된다
  // return x%y===0 ? true : false;
}
