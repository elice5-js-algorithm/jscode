//array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수
//divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

function solution(arr, divisor) {
    let answer=[];
    for(i=0; i<arr.length; i++){
        if(arr[i] % divisor === 0){
            answer.push(arr[i])
        }
    } 
    if(answer.length === 0){return [-1]}
    else{return answer.sort((a,b) => a - b)}
} //sort((a,b))=>a-b는 값이 -가 나올경우 a를 b앞으로 
  //값이 +가 나올경우 a를 b 뒤로 정렬하여 결국 오름차순으로 정렬되게 하는 것
  //내림차순의 경우 (a,b) => b - a 로 가능

  //위의 풀이 더 짧게 할 수 있는 방법이라 같이 올려요!
  function solution(arr, divisor) {
    var answer = arr.filter(v => v%divisor == 0);
    return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
}