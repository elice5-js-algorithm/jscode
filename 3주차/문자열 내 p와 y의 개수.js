function solution(s) {
  let p = 0;
  let y = 0;

  let stringArr = s.toLowerCase().split(""); // 문자열을 소문자로 변환 후 한글자씩 배열에 저장

  stringArr.forEach((element) => {
    if (element === "p")
      p++; // 배열에 들어있는 글자별로 p, y와 같으면 변수 값 증가
    else if (element === "y") y++;
  });

  return p === y ? true : false; // 삼항연산자를 이용해 답 제출
}
