const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let count=1;
let input = [];
let answer = [];
let UpperCase = 0;
let LowerCase = 0;
let number = 0;
rl.on("line", function (x) {
    if(count === 1){} 
    else if (count === 2){
       input = x.split('');
    } else if(count === 3){rl.close();}
    count++;
}).on("close", function () {
  input.forEach(divisor)
  answer.push(UpperCase)
  answer.push(LowerCase)
  answer.push(number)
  console.log(answer.join(" "))
  process.exit();
  function divisor (el) {
        if(el == parseInt(el)){number+=1;}
        else if(el == el.toUpperCase()){
          UpperCase+=1;
        } else if(el == el.toLowerCase()){
          LowerCase+=1;
        }
  };
})
