//단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요.
//단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

function solution(s) {
  let index = (s.length - 1) / 2;
  //slice 첫 인자 1.5일 경우 1과 비슷하고, 마지막 인자 3.5일 경우 3과 비슷
  if (s.length % 2 === 0) {
    return s.slice(index, index + 2);
  } else {
    return s.slice(index, index + 1);
  }
}
