function solution(arr) {
  var arrMin = Math.min(...arr);
  // arr에서 제일 작은 수를 찾음
  var deleteArrMin = arr.filter((element) => element !== arrMin);
  // arr에서 제일 작은 수인 arrMin을 제거

  return arr.length <= 1 ? [-1] : deleteArrMin;
  // arr의 길이가 1보다 작거나 같으면 [-1] 반환 아니면 제일 작은 수를 제거한 arr를 반환
}
