function solution(num_list) {
  let mul = 1; // 곱 변수
  let sum = 0; // 합 변수
  for (let i = 0; i < num_list.length; i++) {
    // num_list 배열을 순회하며 mul과 sum 값을 업데이트
    mul *= num_list[i];
    sum += num_list[i];
  }
  if (mul < sum * sum) return 1; // 조건에 맞게 문제 해결
  else return 0;
}
