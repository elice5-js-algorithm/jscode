function solution(numbers) {
  var answer = 0;
  for (let i = 0; i < 10; i++) {
    // 0부터 10까지 반복문을 돌면서
    if (!numbers.includes(i)) answer += i;
    // includes(i) : numbers파라미터 내에 i값이 들어있는지 확인
    // i가 없으면, answer에 i 값들을 더함
  }
  return answer;
}
