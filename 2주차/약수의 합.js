function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) answer += i; // n의 약수를 찾고 answer에 더해줌
  }

  return answer;
}
