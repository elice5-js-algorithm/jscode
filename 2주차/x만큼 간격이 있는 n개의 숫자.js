function solution(x, n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    // i를 선언후 1을 할당, n개만큼 출력을 할거니 n이하로 반복
    // 한번 반복한뒤 i는 1씩 증가
    answer.push(x * i);
    // x에 i를 곱해서 배열에 추가
    //push() -> 배열의 끝에 요소를 추가
  }
  return answer;
}
