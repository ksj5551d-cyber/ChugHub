let userscore= 0;
let compscore= 0;

const choices = document.querySelectorAll(".choice")   
const msg= document.querySelector("#msg")
const userscorepara= document.querySelector("#user-score")
const compscorepara= document.querySelector("#comp-score")
const compchoicedisplay= document.querySelector("#comp-choice")

const gencompchoices=()=>{
    const options=["rock", "paper", "scissors"];
    const randomidx= Math.floor(Math.random()*3);
    
    return options[randomidx]
   
    
}


const drawgame=()=>{
    
    msg.innerText="game was Draw"
    msg.style.backgroundColor="black"
}

const showwinner=(userwin, userchoice, compchoice)=>{

    if(userwin){
        userscore++;
        userscorepara.innerText= userscore;
        msg.innerText=`You win your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    } else{
        console.log("you lose")
        msg.innerText=`You lose ${compchoice} beats your ${userchoice}`
        msg.style.backgroundColor="red";
        compscore++;
        compscorepara.innerText= compscore;
    }
}


const playgame =(userchoice)=>{
      console.log("user choice is =",userchoice)
      //Generate computer choice
   const compchoice = gencompchoices();
   console.log("comp choice =", compchoice)

  if(userchoice === compchoice){
    drawgame()
  }else{
   let userwin=true;
   
   if(userchoice== "rock"){
    // scissor paper
    userwin = compchoice === "paper" ? false :true;
   } 
   else if( userchoice === "paper"){
    //rock scissor
    userwin= compchoice === "scissors"? false : true;
   }
   else{
   userwin= compchoice === "rock"? false :true;
   }
   showwinner(userwin, userchoice, compchoice);
  }



}

choices.forEach((choice)=>{
   
    choice.addEventListener("click", ()=>{
        const userchoice= choice.getAttribute("id")
     
     playgame(userchoice)
    })
})