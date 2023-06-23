function solution(arr, divisor) {
  var answer = [];

  for (let i = 0; i < arr.length; i++) {
    // divisor로 나누어 떨어지면 배열에 값을 담음
    if (arr[i] % divisor == 0) {
      answer.push(arr[i]);
    }
  }
  // 삼항연산자 배열에 값이 없으면 [-1] 반환. 값이 있을 경우 오름차순 정렬하여 반환.
  return answer.length == 0 ? [-1] : answer.sort((a, b) => a - b);
}
