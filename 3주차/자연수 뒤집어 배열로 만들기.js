function solution(n) {
  let arr = String(n).split(""); // 주어진 수를 문자열로 변환 후 한글자씩 배열에 저장
  let answer = arr.map((element) => Number(element)).reverse(); // 배열 내의 문자열들을 숫자로 변환 후 배열 뒤집기
  return answer;
}
