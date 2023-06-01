function solution(num_list) {
    var answer = 0;
    let multiple = 1;
    let sum =  num_list.reduce((acc,cur)=>acc+cur)
    let mul = num_list.reduce((acc,cur)=>acc*cur,1)
    if(mul<sum**2){answer=1}
    return answer;
}