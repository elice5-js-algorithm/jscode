// 정수 리스트 num_list와 찾으려는 정수 n이 주어질 때, 
// num_list안에 n이 있으면 1을 없으면 0을 return하도록 solution 함수를 완성해주세요.

function solution(num_list, n) {
    var answer = 0;
    if(num_list.includes(n)){answer=1;}
    return answer;
}
//array.includes(존재유무 확인할 요소) ->있으면 true 없으면 false