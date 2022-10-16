const menuBar = document.querySelector(".menu-bar");
const navLinks = document.querySelector(".navlinks");

menuBar.addEventListener("click", () => {
  navLinks.classList.toggle("showNav");
});

// close btn
const CloseBtn = document.querySelector(".close-btn");

CloseBtn.addEventListener("click", () => {
  if (navLinks.classList.contains("showNav")) {
    navLinks.classList.remove("showNav");
  }
});
