//전화번호가 문자열 phone_number로 주어졌을 때,
//전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수

function solution(phone_number) {
  let length = phone_number.length;
  return "*".repeat(length - 4) + phone_number.slice(length - 4, length);
}

//위의 풀이 좀 더 줄이는 풀이에요!
function solution(n) {
  return "*".repeat(n.length - 4) + n.slice(-4);
} //slice(시작값, 마지막값) 인자 하나만 적으면 시작값이며, 음수는 맨뒤에서부터 시작
