const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");

navToggleBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  header.classList.toggle("active");
});



function pal (arm){
  let str = arm.toString();
  let lth =str.length;
  let res="";
  for (i=lth;i>0;i--){
    res+=Number(str[i])**lth;

  } if (arm===res) {
    return res
  }else{
    return -1
  }
}

let userInput = prompt("enter a number:");
console.log(pal(userInput));