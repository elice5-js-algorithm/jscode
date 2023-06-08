function solution(s) {
  let arr = s.split(" ").map((e) => parseInt(e)); // arr 배열 : ["1","2","3","4","5"] => [1,2,3,4,5]
  let min = Math.min(...arr); // spread 연산자를 이용해 배열의 원소를 펼쳐서 리턴
  let max = Math.max(...arr); // Math.max(...arr) === Math.max(1,2,3,4,5);

  return `${String(min)} ${String(max)}`;
}
