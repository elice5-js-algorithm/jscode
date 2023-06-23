function solution(a, b) {
  var answer = 0;
  // Math.min() : 매개변수로 제공된 숫자 중 가장 작은 숫자를 반환
  // Math.max() : 매개변수로 제공된 숫자 중 가장 큰 숫자를 반환
  let min = Math.min(a, b);
  let max = Math.max(a, b);

  for (let i = min; i <= max; i++) answer += i;
  return answer;
}
