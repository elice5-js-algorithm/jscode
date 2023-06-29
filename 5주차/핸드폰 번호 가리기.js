function solution(phone_number) {
  const starNum = '*'.repeat(phone_number.length - 4);
  // .repeat(phone_number.length-4) => phone_number의 길이에서 -4만큼의 *의 개수를 새로운 문자열로 반환

  const slicedNum = phone_number.slice(phone_number.length - 4);
  // .slice(phone_number.length-4) => phone_number의 길이의 뒤에서부터 4번째까지의 문자열을 반환

  return starNum + slicedNum; // **** + 7878 => ****7878
}
