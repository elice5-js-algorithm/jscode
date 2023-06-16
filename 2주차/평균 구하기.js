function solution(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    // 반복문을 돌며 배열의 합을 구해 sum에 할당
  }
  return sum / arr.length;
  // 배열의 합 sum을 arr의 길이로 나누어 평군을 구한다.
}
