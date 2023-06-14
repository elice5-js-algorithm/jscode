function solution(n) {
  let answer = 0;
  let arr = String(n).split(""); // 주어진 숫자를 string으로 변환 후 한글자씩 배열로 변환
  for (let i = 0; i < arr.length; i++) {
    answer += Number(arr[i]); // 배열의 문자를 숫자로 변환시킨 뒤 정답 처리
  }
  return answer;
}
