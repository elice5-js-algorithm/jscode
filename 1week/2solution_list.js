function solution(num_list, n) {
    var answer = 0;
    if(num_list.includes(n)){answer=1;}
    return answer;
}
//array.includes(존재유무 확인할 요소) ->있으면 true 없으면 false