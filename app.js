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

const projectList = [
  {
    id: 1,
    modalTitle: 'Multi Post Stories',
    links: ['html', 'bootsrap', 'Ruby on Rails'],
    projectImg: './d-images/1-pop-image.png',
    text: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    livecode: 'https://genuine-crostata-91ee9b.netlify.app/',
    sourcecode: 'https://github.com/DiamondNath07/Microsoft-start.git',
  },
  {
    id: 2,
    modalTitle: 'Data Dashboard Healthcare',
    links: ['html', 'css', 'javascript'],
    projectImg: './d-images/card.png',
    text: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam non itaque dolor totam debitis, adipisci accusantium quasi sequi in officia corporis. Voluptatum repellendus quia aliquam delectus blanditiis voluptatibus eos voluptates rem facilis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam non itaque dolor totam debitis, adipisci accusantium quasi sequi in officia corporis. Voluptatum repellendus quia aliquam delectus blanditiis voluptatibus eos voluptates rem facilis',
    livecode: 'https://genuine-crostata-91ee9b.netlify.app/',
    sourcecode: 'https://github.com/DiamondNath07/Microsoft-start.git',
  },
  {
    id: 3,
    modalTitle: 'Health Care Services',
    links: ['java', 'react', 'javascript'],
    projectImg: './d-images/card2.png',
    text: 'Lorem ipsum esse nam soluta maxime, recusandae id culpa animi, corporis magnam placeat nisi! Sunt dicta porro cupiditate totam odio vero dignissimos! Magni inventore ab  esse nam soluta maxime, recusandae id culpa animi, corporis magnam placeat nisi! Sunt dicta porro cupiditate totam odio vero dignissimos! Magni inventore ab',
    livecode: 'https://genuine-crostata-91ee9b.netlify.app/',
    sourcecode: 'https://github.com/DiamondNath07/Microsoft-start.git',
  },
  {
    id: 4,
    modalTitle: 'Website Protfolio',
    links: ['MongoDB', 'python', 'Nodejs'],
    projectImg: './d-images/card3.png',
    text: 'Lorem ipsum Illo quaerat nostrum, quae atque dicta debitis quod voluptas laboriosam repudiandae sapiente velit consequuntur ratione provident sunt quibusdam sit earum, nisi id laborum accusantium quas sequi est? Cupiditate voluptatem omnis ab neque tempora esse animi ipsa recusandae eum. Ratione molestias qui impedit minus dolorum rem provident quaerat nostrum, quae atque dicta debitis quod voluptas laboriosam repudiandae sapiente velit consequuntur ratione provident sunt quibusdam sit earum, nisi id laborum accusantium quas sequi est? Cupiditate voluptatem omnis ab neque tempora esse animi ipsa recusandae eum. Ratione molestias qui impedit minus dolorum rem ',
    livecode: 'https://genuine-crostata-91ee9b.netlify.app/',
    sourcecode: 'https://github.com/DiamondNath07/Microsoft-start.git',
  },
  {
    id: 5,
    modalTitle: 'Profesional Art Printing Data More',
    links: ['Angular', 'RubyOnRails', 'javascript'],
    projectImg: './d-images/card.png',
    text: 'Lorem ipsum debitis eaque magnam. Deleniti mollitia aspernatur excepturi, iste, ab molestias repellendus velit sed vero labore cumque. fugit eius, blanditiis pariatur, ea ipsum ex beatae cumque culpa iure nemo ut at delectus, eaque magnam. Deleniti mollitia aspernatur excepturi, iste, ab molestias repellendus velit sed vero labore cumque. fugit eius, blanditiis pariatur, ea ipsum ex beatae cumque culpa iure nemo ut at delectus',
    livecode: 'https://genuine-crostata-91ee9b.netlify.app/',
    sourcecode: 'https://github.com/DiamondNath07/Microsoft-start.git',
  },
  {
    id: 6,
    modalTitle: 'Health Care Services',
    links: ['java', 'react', 'javascript'],
    projectImg: './d-images/card2.png',
    text: 'Lorem ipsum  accusamus repellendus facere! Eaque reprehenderit dicta iure blanditiis aspernatur? Magni tempore nemo alias quo accusantium ut, earum delectus eos deleniti doloremque id tenetur modi, qui, eligendi ipsum  accusamus repellendus facere! Eaque reprehenderit dicta iure blanditiis aspernatur? Magni tempore nemo alias quo accusantium ut, earum delectus eos deleniti doloremque id tenetur modi, qui, eligendi ',
    livecode: 'https://genuine-crostata-91ee9b.netlify.app/',
    sourcecode: 'https://github.com/DiamondNath07/Microsoft-start.git',
  },
  {
    id: 7,
    modalTitle: 'Website Protfolio',
    links: ['MongoDB', 'python', 'Nodejs'],
    projectImg: './d-images/card3.png',
    text: 'Lorem ipsum dolor quidem nam quibusdam reprehenderit dolore ipsa dolorum, repudiandae non magni at suscipit recusandae corrupti sint! Corporis numquam impedit qui suscipit tempora. Sequi temporibus, nulla quis, ipsum dolor quidem nam quibusdam reprehenderit dolore ipsa dolorum, repudiandae non magni at suscipit recusandae corrupti sint! Corporis numquam impedit qui suscipit tempora. Sequi temporibus, nulla quis, ',
    livecode: 'https://genuine-crostata-91ee9b.netlify.app/',
    sourcecode: 'https://github.com/DiamondNath07/Microsoft-start.git',
  },
];

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
    mainText: 'Data Dashboard Healtcare',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    techStack: ['html', 'bootstrap', 'Ruby'],
  },
  {
    id: 1,
    mainText: 'Website Portfolio Work',
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
    mainText: 'Data Dashboard Healtcare',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    techStack: ['html', 'bootstrap', 'Ruby'],
  },
  {
    id: 1,
    mainText: 'Website Portfolio Work',

    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    techStack: ['html', 'bootstrap', 'Ruby'],
  },
];

// modal effect

// modal popup
const modal = document.querySelector('.modal-overlay');
const projects = document.querySelector('#portfolio');

function mobile(id) {
  const mobileCard = projectList[id];

  modal.innerHTML = `

            <div class="modal-container">
              <h5 class="modal-title">${mobileCard.modalTitle}</h5>
              <img class="x-icon" src="./d-images/Icon - Cancel.png" alt="project-img">
              <ul class="modal-links">
                <li>${mobileCard.links[0]}</li>
                <li>${mobileCard.links[1]}</li>
                <li>${mobileCard.links[2]}</li>
              </ul>
              <div class="modal-wrapper">
                <div class="project-imgContainer">
                <img class="popimg" src="${mobileCard.projectImg}" alt="">
              </div>

                              
              <p>${mobileCard.text}</p>
              <div class="modal-btn">
                 
                  <span id="bur">
                    <button class="burtin1">see live</button>
                  <a class="livecode" href="${mobileCard.livecode}">
                    <img class="export" src="./d-images/Icon - Export.png" alt="export">
                  </a>
                  </span>
                  <span id="bur2">
                    <button class="burtin2">see source</button>
                 <a class="sourcecode" href="${mobileCard.sourcecode}"> <img class="github" src="./d-images/Group.png" alt="github"></a>
                  </span>
                
              </div>
              </div>
            </div> `;
  const xbtn = document.querySelector('.x-icon');
  xbtn.addEventListener('click', () => {
    modal.classList.remove('open-modal');
    modal.innerHTML = '';
  });
}

kardsObj.forEach(({ id, mainText, description, techStack }) => {
  const element = document.createElement('div');
  const att = document.createAttribute('class');
  att.value = 'caad';
  element.setAttributeNode(att);
  // element.classList.add('caad');
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
      mobile(id);
    });
  });
});

const modalbg = document.querySelector('.modal-overlay');

const modalBot = document.querySelectorAll('.modal-btn');
modalBot.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    modalbg.classList.add('open-modal');
    mobile(i);
  });
});

// form pop-up

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('validation').value.trim();
  const alert = document.querySelector('.alert');

  const Regx = /^[a-z]+@[a-z0-9-]+\.[a-z0-9-.]+$/;

  if (Regx.test(email) === true) {
    form.submit();
    form.reset();
  } else {
    alert.textContent = 'email has to be in lowercase format';
  }
});
