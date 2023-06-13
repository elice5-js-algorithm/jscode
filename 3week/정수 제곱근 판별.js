//임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
//n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, 
//n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

function solution(n) {
    let x = Math.sqrt(n)
    return Math.pow(parseInt(x),2) == n ? Math.pow(x+1, 2) : -1
} //제곱근인 x를 정수로 바꿔도 값이 같다면 x는 양의 정수이므로


//기존에는 이렇게 풀었으나 테스트 시간이 오래 걸려 위와 같이 수정
function solution(n) {
   for(x=1; x <= n; x++){
       if(n / x === x){return Math.pow(x+1, 2)}
   } return -1
}