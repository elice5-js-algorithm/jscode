function solution(arr, divisor) {
  let answer = arr
    .sort((a, b) => a - b) // 배열을 먼저 오름차순으로 정렬
    .filter((element) => {
      // filter 함수를 이용해 조건에 맞는 새 배열 생성
      return element % divisor === 0;
    });

  if (answer.length === 0) {
    // 조건에 해당하지 않으면 -1 반환
    answer.push(-1);
  }
  return answer;
}
