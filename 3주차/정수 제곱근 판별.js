function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    if (i * i === n) {
      // i의 제곱값이 주어진 수와 같으면
      answer = i; // answer에 i 저장
      break;
    }
  }

  if (answer === 0) {
    // 반복문을 전부 돌아도 answer가 그대로라면
    return -1; // -1 반환
  } else {
    return Math.pow(answer + 1, 2); // Math.pow() 함수를 이용해 제곱 구현
  }
}
