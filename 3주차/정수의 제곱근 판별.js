function solution(n) {
  var x = Math.sqrt(n);
  // Math.sqrt()
  // 함수 인자로 값을 넘겨주면 루트 값을 반환
  // 만약 매개변수가 음수이면 NaN을 반환
  var newX = Math.floor(x);
  // floor() 함수를 사용해 소수점을 버림

  return n === newX * newX ? (newX + 1) * (newX + 1) : -1;
  // 삼항연사자 사용 => n의 값이 newX * newX과 같을 때 newX+1) * (newX+1) 출력
  // 다를때 -1 출력
}
