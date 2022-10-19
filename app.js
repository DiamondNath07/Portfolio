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
    modalTitle: 'Data Dashboard Healthcare',
    links: ['html', 'css', 'javascript'],
    projectImg: './d-images/card.png',
    text: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam non itaque dolor totam debitis, adipisci accusantium quasi sequi in officia corporis. Voluptatum repellendus quia aliquam delectus blanditiis voluptatibus eos voluptates rem facilis',
    livecode: 'https://genuine-crostata-91ee9b.netlify.app/',
    sourcecode: 'https://github.com/DiamondNath07/Microsoft-start.git',
  },
  {
    id: 2,
    modalTitle: 'Health Care Services',
    links: ['java', 'react', 'javascript'],
    projectImg:
      'https://img.freepik.com/premium-vector/creative-eye-catching-modern-horizontal-landscape-restaurant-food-flyer-template-design-02_647347-61.jpg?w=740',
    text: 'Lorem ipsum esse nam soluta maxime, recusandae id culpa animi, corporis magnam placeat nisi! Sunt dicta porro cupiditate totam odio vero dignissimos! Magni inventore ab porro incidunt, dolores reiciendis beatae! Nesciunt quo, aperiam unde eveniet error perspiciatis tenetur cum expedita itaque blanditiis voluptates, non nam possimus magnam architecto. Pariatur dolorem possimus hic natus totam ad dignissimos quo libero nulla fugit sapiente consectetur sequi est officia quod, veritatis obcaecati non odit fuga sint! Possimus quasi quos laboriosam amet, fuga, consectetur facere et suscipit',
    livecode: 'https://genuine-crostata-91ee9b.netlify.app/',
    sourcecode: 'https://github.com/DiamondNath07/Microsoft-start.git',
  },
  {
    id: 3,
    modalTitle: 'Website Protfolio',
    links: ['MongoDB', 'python', 'Nodejs'],
    projectImg: './d-images/card.png',
    text: 'Lorem ipsum Illo quaerat nostrum, quae atque dicta debitis quod voluptas laboriosam repudiandae sapiente velit consequuntur ratione provident sunt quibusdam sit earum, nisi id laborum accusantium quas sequi est? Cupiditate voluptatem omnis ab neque tempora esse animi ipsa recusandae eum. Ratione molestias qui impedit minus dolorum rem provident ',
    livecode: 'https://genuine-crostata-91ee9b.netlify.app/',
    sourcecode: 'https://github.com/DiamondNath07/Microsoft-start.git',
  },
  {
    id: 4,
    modalTitle: 'Profesional Art Printing Data More',
    links: ['Angular', 'RubyOnRails', 'javascript'],
    projectImg:
      'https://img.freepik.com/premium-vector/creative-eye-catching-modern-horizontal-landscape-restaurant-food-flyer-template-design-02_647347-61.jpg?w=740',
    text: 'Lorem ipsum debitis eaque magnam. Deleniti mollitia aspernatur excepturi, iste, ab molestias repellendus velit sed vero labore cumque. fugit eius, blanditiis pariatur, ea ipsum ex beatae cumque culpa iure nemo ut at delectus, consequuntur atque deserunt! Tenetur qui quasi, quibusdam inventore eum ex voluptas neque culpa ipsa incidunt nam tempora in itaque, dolores,',
    livecode: 'https://genuine-crostata-91ee9b.netlify.app/',
    sourcecode: 'https://github.com/DiamondNath07/Microsoft-start.git',
  },
  {
    id: 5,
    modalTitle: 'Health Care Services',
    links: ['java', 'react', 'javascript'],
    projectImg: './d-images/card2.png',
    text: 'Lorem ipsum  accusamus repellendus facere! Eaque reprehenderit dicta iure blanditiis aspernatur? Magni tempore nemo alias quo accusantium ut, earum delectus eos deleniti doloremque id tenetur modi, qui, eligendi ab itaque ullam eaque ipsa impedit quam obcaecati? Accusantium minus perferendis mollitia cupiditate illum laborum eius unde quo explicabo tempore debitis expedita',
    livecode: 'https://genuine-crostata-91ee9b.netlify.app/',
    sourcecode: 'https://github.com/DiamondNath07/Microsoft-start.git',
  },
  {
    id: 6,
    modalTitle: 'Website Protfolio',
    links: ['MongoDB', 'python', 'Nodejs'],
    projectImg:
      'https://img.freepik.com/premium-vector/creative-eye-catching-modern-horizontal-landscape-restaurant-food-flyer-template-design-02_647347-61.jpg?w=740',
    text: 'Lorem ipsum dolor quidem nam quibusdam reprehenderit dolore ipsa dolorum, repudiandae non magni at suscipit recusandae corrupti sint! Corporis numquam impedit qui suscipit tempora. Sequi temporibus, nulla quis, molestias nihil accusantium quia ipsa laborum ut facere mollitia delectus quod libero',
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
const projects = document.querySelector('#portfolio');

kardsObj.map(({ id, mainText, description, techStack }) => {
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
      // do something
    });
  });
});

// destop version
const modalbg = document.querySelector('.modal-overlay');
// const xClose = document.querySelector('.x-icon');
// const projectCards = document.querySelector('#portfolioB');

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

const modalBot = document.querySelectorAll('.modal-btn');
modalBot.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    console.log(i);
    modalbg.classList.add('open-modalbg');
    mobile(i);
  });
});
