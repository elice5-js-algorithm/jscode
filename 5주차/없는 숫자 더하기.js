function solution(numbers) {
  return 45 - numbers.reduce((acc, cur) => acc + cur, 0);
}

// 0부터 9까지의 합인 45에서 배열 내의 숫자 합을 빼준다.
