//정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, 
//solution을 완성해주세요.

function solution(num) {
    if(num % 2 == 0){answer = "Even"}
    else {answer = "Odd"}//2로 나눈 나머지가 0이 아니면 모두 홀수이므로
    return answer;
};
    