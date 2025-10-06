const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");

navToggleBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  header.classList.toggle("active");
});



function pal (arm){
  let str = arm.toSring();
  let lth =arm.length;
  let res=0;
  for (i=0;i<=lth;i++){
    res+=Number(str[i])**lth:

  }
}