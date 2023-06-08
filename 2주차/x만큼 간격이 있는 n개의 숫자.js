function solution(x, n) {
  let answer = [];
  let element = x; // 초기값 설정

  for (let i = 0; i < n; i++) {
    answer.push(element); // 배열에 값을 하나씩 넣어줌
    element += x; // 배열의 값을 업데이트 하기 위해 x를 더해줌
  }
  return answer;
}
