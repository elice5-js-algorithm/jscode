function solution(n, control) {
    let list = control.split('')
    list.forEach((el)=>{
        if(el == "w"){n += 1}
        else if(el == "s"){n -= 1}
        else if(el == "d"){n += 10}
        else {n -= 10}
    })
    return n;
}