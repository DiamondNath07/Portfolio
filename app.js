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

// scroll functionality
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

// cards object
const kardsObj = [
  {
    id: 1,
    mainText: 'Profesional Art Printing Data',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    techStack: ['html', 'bootstrap', 'Ruby'],
  },
  {
    id: 1,
    mainText: 'Profesional Art Printing Data',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    techStack: ['html', 'bootstrap', 'Ruby'],
  },
  {
    id: 1,
    mainText: 'Profesional Art Printing Data',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    techStack: ['html', 'bootstrap', 'Ruby'],
  },
  {
    id: 1,
    mainText: 'Profesional Art Printing Data',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    techStack: ['html', 'bootstrap', 'Ruby'],
  },
  {
    id: 1,
    mainText: 'Profesional Art Printing Data',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    techStack: ['html', 'bootstrap', 'Ruby'],
  },
  {
    id: 1,
    mainText: 'Profesional Art Printing Data',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    techStack: ['html', 'bootstrap', 'Ruby'],
  },
];

// modal effect



// modal popup
const modal = document.querySelector('.modal-overlay');
const xIcon = document.querySelector('.x-icon');
const projects = document.querySelector('#portfolio');



kardsObj.map(({ id, mainText, description, techStack }) => {
  const element = document.createElement('div');
  const att = document.createAttribute('class');
  att.value = 'caad';
  element.setAttributeNode(att);
  element.innerHTML = `
 <div class="write-up">
        <p id="title">${mainText}</p>
        <p>${description}</p>
        <ul class="lang">
          <li><a href="#">${techStack[0]}</a></li>
          <li><a href="#">${techStack[1]}</a></li>
          <li><a href="#">${techStack[2]}</a></li>
        </ul>
        </div>
        <div class="caad-btn">
          <button type="button" class="modal-btn" >See Project</button>
        </div>
`;
  projects.appendChild(element);
  const modalBtn = document.querySelectorAll('.modal-btn');
  modalBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      modal.classList.add('open-modal');
      // do something
    });

    xIcon.addEventListener('click', () => {
      modal.classList.remove('open-modal');
    });
  });
});

// console.log(element);
