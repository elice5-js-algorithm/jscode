//자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
//예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

function solution(n)
{   var answer = 0;
    const input = String(n) //각 자릿수를 더하기 위해 문자형으로 변환
    for(i=0; i<input.length; i++){
        answer+=Number(input[i])
    }
    return answer;
}

//다른사람의 풀이 중 생각도 못한 거 있어서 들고왔어요!
function solution(n){
    // 쉬운방법
    return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
}
//n에 공백을 더하는 이유는 문자열을 더하면 숫자형에서 문자형으로 바뀌기 때문에