function solution(my_string, n) {
  var len = my_string.length; // my_string의 길이를 len으로 설정
  var answer = my_string.substr(len - n, len); // substr() 함수를 사용해 시작값부터 끝까지 출력
  return answer;
}
