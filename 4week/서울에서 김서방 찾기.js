//String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, 
//"김서방은 x에 있다"는 String을 반환하는 함수(김서방은 단 한번만 나타남)

function solution(seoul) {
    return "김서방은 "+seoul.indexOf("Kim")+"에 있다"
}

//다른 풀이
function solution(seoul){
    for(i=0; i<seoul.length; i++){
        if(seoul[i] === "Kim"){
            return "김서방은 "+i+"에 있다"
        }
    }
}
