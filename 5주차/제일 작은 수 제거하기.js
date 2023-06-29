function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  if (arr.length < 1) return [-1];
  return arr;
}

// 1. 배열을 spread 연산자를 이용해 푼 뒤, Math.min으로 최솟값 찾기
// 2. 최솟값의 인덱스를 찾고 splice 함수를 이용해 최솟값 제거

/* 처음 작성한 코드 ==> 정렬해야 한다고 생각

function solution(arr) {
  if(arr.length===1){
      return [-1];
  }else{
      return arr.sort((a,b)=>b-a).slice(0,arr.length-1);
  }
}
*/
