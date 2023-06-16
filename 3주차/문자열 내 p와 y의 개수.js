function solution(s) {
  return (
    s.toUpperCase().split('P').length === s.toUpperCase().split('Y').length
  );
  // s 전체를 대문자로 변경
  // split() 함수를 사용해 P를 기준으로 잘라 배열로 변환
  // P와 Y의 길이가 같으면 true를 반환 false를 반환
}
