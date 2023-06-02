function solution(num_list, n) {
  var answer = 0;
  for (let i = 0; i < num_list.length; i++) {
    // num_list 배열을 순회하면서
    if (num_list[i] === n) answer = 1; // 배열의 원소와 n을 비교 후 일치하면
    // 값을 1로 업데이트
  }
  return answer;
}
