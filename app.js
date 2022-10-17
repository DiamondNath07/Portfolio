const menuBar = document.querySelector('.menu-bar');
const navLinks = document.querySelector('.navlinks');

menuBar.addEventListener('click', () => {
  navLinks.classList.toggle('showNav');
});

// close btn
const CloseBtn = document.querySelector('.close-btn');

CloseBtn.addEventListener('click', () => {
  if (navLinks.classList.contains('showNav')) {
    navLinks.classList.remove('showNav');
  }
});

// scroll functuinality
const scrollLinks = document.querySelectorAll('.scroll-links');

scrollLinks.forEach((item) => {
  item.addEventListener('click', (a) => {
    const id = a.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    const position = element.offsetTop;

    if (id) {
      navLinks.classList.remove('showNav');
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});

// modal effect

// const modalBtn = document.querySelector('')
