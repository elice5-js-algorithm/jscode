function solution(num) {
  var answer = 0;

  while (num !== 1) {
    // 숫자가 1이 되기 전까지 계속해서 반복
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num = num * 3 + 1;
    }

    if (answer <= 500) {
      answer++;
    } else {
      // 500회가 넘었을 때
      answer = -1;
      break;
    }
  }
  return answer;
}
