function solution(num_list) {
    var answer = 0;
    if(num_list.length>=11){num_list.reduce((acc,cur)=>answer = acc+cur)}
    else{num_list.reduce((acc,cur)=>answer = acc*cur,1)}
    return answer;
}