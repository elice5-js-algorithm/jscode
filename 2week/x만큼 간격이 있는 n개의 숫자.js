//함수 solution은 정수 x와 자연수 n을 입력 받아, 
//x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 
//다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.
function solution(x, n) {
    var answer = [];
    for(i=1;i<=n;i++){ //x씩 증가하니까 1~n까지 곱하는 방식으로
        answer.push(x*i)
    }
    return answer;
}