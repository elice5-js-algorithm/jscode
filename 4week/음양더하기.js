//어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 
//이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 
//실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

function solution(absolutes, signs) {
    let answer=0;
    for(i=0; i<absolutes.length; i++){//두 배열의 length같으므로 하나만 정의
        if(signs[i]){answer+=absolutes[i]}//signs[i]가 T면 양수이므로 더함
        else{answer-=absolutes[i]}//sign[i]가 F면 음수이므로 뺌
    }
    return answer;
}

//reduce이용한 쉬운 풀이 있어서 들고와봐요!
function solution(absolutes, signs) {

    return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}
//sign[i]가 T면 1곱하고 F면 -1곱해서 누산