//대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 
//같으면 True, 다르면 False를 return 하는 solution를 완성하세요.(대소문자 구별X)

function solution(s){
    let pCount = 0;
    let yCount = 0;
    s.toLowerCase().split('').forEach((el)=>{ //다 소문자로 놓고 비교
        if(el === 'p'){pCount += 1}
        else if(el === 'y'){yCount += 1}
    })
    if(pCount === yCount){return true} //둘 다 0인 경우도 어차피 포함되므로 
    else {return false}
}