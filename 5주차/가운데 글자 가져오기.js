function solution(s) {
  if (s.length % 2 === 1) return s[Math.floor(s.length / 2)];
  // 홀수 => Math.floor()로 s의 길이/2 몫을 내림, 가운데 인덱스를 구해 반환
  else return s[s.length / 2 - 1] + s[s.length / 2];
  // 짝수 => s길이/2 - 1 인덱스의 요소와 s길이/2 인덱스의 요소를 반환.
}
