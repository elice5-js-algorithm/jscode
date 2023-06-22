//두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수

function solution(a, b) {
    let answer = 0;
    if(a>b){for(i=b; i<=a; i++){
        answer+=i
    }}
    else if(a<b){for(i=a; i<=b; i++){
        answer+=i
    }}
    else{answer+=a}
    return answer;
}

//아래는 훨씬 시간을 줄일 수 있는 풀이 같아 들고왔어요!
function adder(a, b, s = 0){
    for (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
    return s;
  }
  