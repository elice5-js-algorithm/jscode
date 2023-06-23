//1-1. 입력된 수가 짝수라면 2로 나눕니다. 
//1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다. 
//2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.
// 위 작업을 몇 번이나 반복해야 하는지 반환하는 함수, solution을 완성해 주세요. 
//단, 주어진 수가 1인 경우에는 0 
//작업을 500번 반복할 때까지 1이 되지 않는다면 –1을 반환해 주세요.  

function solution(num) {
    let answer = 0;
    while(num != 1 && answer<500){
        if(num % 2 === 0){num/=2; answer+=1;}
        else {num = num * 3 + 1; answer+=1;}
    } 
    if(answer>=500) return -1
    else return answer //어차피 num이 1이면 answer은 추가되지 않으므로
}

//위의 방식을 더 간편하게 푼 풀이여서 들고옵니다!
function collatz(num) {
    var answer = 0;
    while(num !=1 && answer !=500){
        num%2==0 ? num = num/2 : num = num*3 +1;
    answer++;
  }
    return num == 1 ? answer : -1;
}