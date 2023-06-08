function solution(n) {
  let answer = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 1) {
      // n으로 나누었을 때 나머지가 1인 것을 찾음
      answer = i; // 답을 업데이트해주고
      break; // 가장 작은 수를 찾아야 하므로 break문을 이용해 찾는 즉시 반복문 탈출
    }
  }
  return answer;
}
