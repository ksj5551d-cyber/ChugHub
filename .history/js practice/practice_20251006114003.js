
// ytdkhgdckghdc



function pal (arm){
  let str = arm .toString();
  let lth =str.length;
  let res=0;
  for (i=0;i<lth;i++){
    res+=(str[i])**lth;
    

  } if (arm===res) {
    console.log("number is armstong");return res
  }else{
    return -1
  }
}

let userInput = prompt("enter a number:");
console.log(pal(Number(userInput)));