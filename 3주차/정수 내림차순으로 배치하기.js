function solution(n) {
  // 숫자를 배열로 변환하기 위해 우선 문자열로 변환
  const str = n.toString();

  // split() 메서드를 이용해 문자열을 "" 기준으로 잘라 배열로 변환한다.
  // split() => 문자열을 특정 기준에 맞춰 잘라 배열로 변환하는 함수
  const arr = str.split('');

  // Array의 sort() 메서드를 이용해 문자를 정렬한다.
  // sort() => 배열 정렬하기
  //  return 값 a-b는 배열을 오름차순, b-a는 내림차순
  const sortedArr = arr.sort((a, b) => b - a);

  // join() 메서드를 이용해 배열을 문자열로 변환한다.
  //
  const sortedStr = sortedArr.join('');

  // 최종적으로 나온 정렬된 문자열 값을 정수로 변환 후 반환한다.
  return parseInt(sortedStr);
}
