function solution(arr) {
  let answer = 0;
  answer = arr.reduce((acc, cur) => acc + cur); // reduce 함수를 이용해 배열의 전체 합 계산

  return answer / arr.length; // (전체 합 / 배열의 길이)를 이용해 정답 계산
}
