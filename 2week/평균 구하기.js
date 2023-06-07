//정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

function solution(arr) {
    let sum = arr.reduce((acc, cur) => acc += cur)//reduce로 총합
    let answer = sum / arr.length //평균
    return answer;
}