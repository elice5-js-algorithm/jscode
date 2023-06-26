//길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수
//예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

function solution(n) {
  let oddStr = "수";
  let evenStr = "박";
  let answer = "";
  for (i = 1; i <= n; i++) {
    if (i % 2 != 0) {
      answer += oddStr;
    } else answer += evenStr;
  }
  return answer;
}

//깔끔하게 푼 풀이 있어서 들고왔어요!
var waterMelon = (n) => "수박".repeat(n / 2) + (n % 2 === 1 ? "수" : "");
