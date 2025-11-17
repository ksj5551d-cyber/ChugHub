const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navbar.classList.toggle("active");
});

// Close menu when clicking a link
document.querySelectorAll(".navbar-link").forEach(link => {
  link.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    navbar.classList.remove("active");
  });
});




