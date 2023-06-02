function solution(num_list) {
  if (num_list.length >= 11) {
    return num_list.reduce((acc, cur) => acc + cur); // reduce 함수를 사용해 + 연산 수행
  } else {
    return num_list.reduce((acc, cur) => acc * cur); // reduce 함수를 사용해 * 연산 수행
  }
}
