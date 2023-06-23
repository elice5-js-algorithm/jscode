function solution(x) {
  var addX = String(x)
    .split('')
    // split을 사용하여, 각 자릿수 별로 쪼개 배열을 만들기
    .reduce((prev, curr) => Number(prev) + Number(curr));
  // reduce() : 배열의 각 요소를 순회하며 callback함수의 실행 값을 누적하여 하나의 결과값을 반환
  // 그냥 더하면 문자열 반환 number로 변환해주는 과정 필요
  return x % addX === 0 ? true : false;
}
