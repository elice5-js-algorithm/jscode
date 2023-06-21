function solution(absolutes, signs) {
  var answer = 0;

  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] === true) {
      // 양/음을 판단하는 조건문
      answer += absolutes[i]; // 양의 부호일 시 더해줌
    } else {
      answer -= absolutes[i]; // 음의 부호일 시 빼줌
    }
  }

  return answer;
}
