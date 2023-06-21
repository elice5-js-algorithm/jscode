function solution(a, b) {
  let sum = 0;

  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    sum += i;
  }

  return sum;
}

/* 처음 작성한 코드
function solution(a, b) {
  let sum = 0;
  if (a <= b) {
    for (let i = a; i <= b; i++) {
      sum += i;
    }
  } else {
    for (let i = a; i >= b; i--) {
      sum += i;
    }
  }

  return sum;
}
*/
