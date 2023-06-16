function solution(n) {
  var answer = 0;
  const str = String(n);
  // 자연수 n을 문자열로 변경
  var arr = Array.from(str);
  // 변경된 문자열을 배열로 변경
  var newArr = arr.map(Number);
  // map()함수로 배열의 모든 값에 접근해 number로 변경 후 변경된 숫자를 다시 배열로 변경
  // map() => 배열의 모든 값에 Function을 실행하고 Function에서 나온 값을 저장해서 새로운 배열로 변경

  for (let i = 0; i < newArr.length; i++) {
    answer += newArr[i];
  }
  // 배열을 돌면서 배열의 자연수들을 합산하여 answer에 할당

  return answer;
}
