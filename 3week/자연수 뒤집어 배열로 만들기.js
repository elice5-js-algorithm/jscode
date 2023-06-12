//자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 
//예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

function solution(n) {
    var answer = [];
    (n+"").split("").forEach(el=>answer.unshift(Number(el)))
    //숫자형인 n에 공백을 더하여 문자형으로 변환 후 split통해 배열로 만듦
    //답은 숫자가 들어간 배열을 원하므로 요소를 다시 숫자형으로 바꿔줌
    return answer;
}