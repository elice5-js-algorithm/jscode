//양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 
// 예를 들어 18의 자릿수 합은 1+8=9가 나오는 함수 구하는 문제

function solution(x) {
    let divisor = (x+"").split("").reduce((acc,cur)=>acc+=Number(cur),0) //각 자릿수의 배열 만든 후 합함, 초기값을 0으로 설정하지 않으면 문자열 나옴
    return (x % divisor === 0) ? true : false
  }

// 문자열 숫자로 바꾸는 신박한 방법 발견해서 같이 올려요!
function Harshad(n){
    return !(n % (n + "").split("").reduce((a, b) => +b + +a ));
  }
//문자열 앞에 +를 붙이면 숫자형으로 바뀜 
//return !(n%i) 에서 나머지가 0이면 T 아니면 F로 작동