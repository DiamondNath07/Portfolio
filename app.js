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
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;

    let position = element.offsetTop;

    window.scrollTo({
      left: 0,
      top: position,
    });

    // close menu
    linksContainer.style.height = 0;
    linksContainer.style.width = 0;
  });
});

 const linksHeight = links.getBoundingClientRect().height;
 const containerHeight = linksContainer.getBoundingClientRect().height;
 if (containerHeight === 0) {
   linksContainer.style.height = `${linksHeight}px`;
 } else {
   linksContainer.style.height = 0;
 }
