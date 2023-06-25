//0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다.
//numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return하는 함수

function solution(numbers) {
  const numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  //0~9배열에서 input배열 없는 것만 배열로 이루어지게
  let answer = numberList.filter((el) => !numbers.includes(el));
  return answer.reduce((acc, cur) => (acc += cur));
}

//전체 합을 이용한 풀이 들고 와봐요! (0~9까지의 합 45를 이용해서)
function solution(numbers) {
  return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}
