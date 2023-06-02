function solution(my_string, target) {
  if (my_string.includes(target))
    return 1; // includes()를 사용해 특정 문자열이 존재하는지 확인
  else return 0;
}
