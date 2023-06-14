function solution(s) {
  let sign = s.charAt(0); // charAt() 함수를 이용해 첫번째 글자 저장

  if (sign === "+") {
    // 첫 글자가 "+" 부호이면 부호를 제외한 나머지 숫자 리턴
    return Number(s.slice(1, s.length));
  } else if (sign === "-") {
    // 첫 글자가 "-" 부호이면 부호를 제외한 나머지 숫자를 음수로 변환하고 리턴
    return -Number(s.slice(1, s.length));
  } else {
    // 첫 글자가 숫자이면 숫자로 변환하고 리턴
    return Number(s);
  }
}
