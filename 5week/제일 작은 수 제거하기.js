//정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요.
function solution(arr) {
  let answer = arr.filter((el) => !(el === Math.min(...arr))); //...으로 모든 배열요소 비교
  return answer.length === 0 ? [-1] : answer; //빈배열 = length 0이므로
}
