function solution(num, n) {
  if (num % n === 0) return 1; // num을 n으로 나눈 나머지가 0 ==> num이 n의 배수
  else return 0;
}
