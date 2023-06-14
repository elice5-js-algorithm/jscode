function solution(n) {
  let arr = n.toString().split("").sort().reverse();

  return Number(arr.join("")); // 배열을 join() 함수를 사용해 합치고 숫자로 리턴
}
