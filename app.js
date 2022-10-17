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

// scroll functuinality
const scrollLinks = document.querySelectorAll(".scroll-links");

const navbar = document.querySelector(".nav");

const linksContainer = document.querySelector(".links-container");

scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    if (id) {
      navLinks.classList.remove("showNav");
    }
    

    let position = element.offsetTop;

    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});
