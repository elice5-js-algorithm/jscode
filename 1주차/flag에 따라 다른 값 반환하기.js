function solution(a, b, flag) {
  var answer = 0;
  if (flag === true) {
    answer = a + b;
  } else if (flag === false) {
    answer = a - b;
  }

  return answer;
}
