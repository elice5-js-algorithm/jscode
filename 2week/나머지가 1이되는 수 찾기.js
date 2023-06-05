// 자연수 n이 매개변수로 주어집니다. n을 x로 나눈 나머지가 1이 되도록 하는 
// 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요. 

function solution(n) {
    let answer = 0;
//작은 자연수 x를 구하는 부분에서 for문보다 while이 적합하다 생각
    while(n > answer){ //while의 범위는 답이 n보다 무조건 작을 것이기에 이렇게 산정
        if(n % answer != 1){answer++}
        else break
    }return answer;
}