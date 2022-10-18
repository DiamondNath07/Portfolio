const modalbg = document.querySelector('.modal-overlay2');
const xClose = document.querySelector('.xclose-icon');
const projectCards = document.querySelector('#portfolioB');

const projectList = [
  {
    id: 1,
    modalTitle: 'Food Distibution',
    links: ['html', 'css', 'javascript'],
    projectImg:
      'https://img.freepik.com/premium-vector/creative-eye-catching-modern-horizontal-landscape-restaurant-food-flyer-template-design-02_647347-61.jpg?w=740',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit accusantium sed aliquam ut consectetur harum tenetur sequi magnam dignissimos, dolorum perspiciatis, debitis vero qui, sint quaerat? Explicabo, reiciendis, rerum saepe nobis facilis temporibus pariatur quas, dolorem nihil voluptatem aspernatur. Eius!',
    livecode: 'https://genuine-crostata-91ee9b.netlify.app/',
    sourcecode: 'https://github.com/DiamondNath07/Microsoft-start.git',
  },
  {
    id: 2,
    modalTitle: 'Health Care Services',
    links: ['java', 'react', 'javascript'],
    projectImg:
      'https://img.freepik.com/premium-vector/creative-eye-catching-modern-horizontal-landscape-restaurant-food-flyer-template-design-02_647347-61.jpg?w=740',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit accusantium sed aliquam ut consectetur harum tenetur sequi magnam dignissimos, dolorum perspiciatis, debitis vero qui, sint quaerat? Explicabo, reiciendis, rerum saepe nobis facilis temporibus pariatur quas, dolorem nihil voluptatem aspernatur. Eius!',
    livecode: 'https://genuine-crostata-91ee9b.netlify.app/',
    sourcecode: 'https://github.com/DiamondNath07/Microsoft-start.git',
  },
  {
    id: 3,
    modalTitle: 'Food Distibution',
    links: ['html', 'css', 'javascript'],
    projectImg:
      'https://img.freepik.com/premium-vector/creative-eye-catching-modern-horizontal-landscape-restaurant-food-flyer-template-design-02_647347-61.jpg?w=740',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit accusantium sed aliquam ut consectetur harum tenetur sequi magnam dignissimos, dolorum perspiciatis, debitis vero qui, sint quaerat? Explicabo, reiciendis, rerum saepe nobis facilis temporibus pariatur quas, dolorem nihil voluptatem aspernatur. Eius!',
    livecode: 'https://genuine-crostata-91ee9b.netlify.app/',
    sourcecode: 'https://github.com/DiamondNath07/Microsoft-start.git',
  },
  {
    id: 4,
    modalTitle: 'Food Distibution',
    links: ['html', 'css', 'javascript'],
    projectImg:
      'https://img.freepik.com/premium-vector/creative-eye-catching-modern-horizontal-landscape-restaurant-food-flyer-template-design-02_647347-61.jpg?w=740',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit accusantium sed aliquam ut consectetur harum tenetur sequi magnam dignissimos, dolorum perspiciatis, debitis vero qui, sint quaerat? Explicabo, reiciendis, rerum saepe nobis facilis temporibus pariatur quas, dolorem nihil voluptatem aspernatur. Eius!',
    livecode: 'https://genuine-crostata-91ee9b.netlify.app/',
    sourcecode: 'https://github.com/DiamondNath07/Microsoft-start.git',
  },
  {
    id: 5,
    modalTitle: 'Food Distibution',
    links: ['html', 'css', 'javascript'],
    projectImg:
      'https://img.freepik.com/premium-vector/creative-eye-catching-modern-horizontal-landscape-restaurant-food-flyer-template-design-02_647347-61.jpg?w=740',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit accusantium sed aliquam ut consectetur harum tenetur sequi magnam dignissimos, dolorum perspiciatis, debitis vero qui, sint quaerat? Explicabo, reiciendis, rerum saepe nobis facilis temporibus pariatur quas, dolorem nihil voluptatem aspernatur. Eius!',
    livecode: 'https://genuine-crostata-91ee9b.netlify.app/',
    sourcecode: 'https://github.com/DiamondNath07/Microsoft-start.git',
  },
  {
    id: 6,
    modalTitle: 'Food Distibution',
    links: ['html', 'css', 'javascript'],
    projectImg:
      'https://img.freepik.com/premium-vector/creative-eye-catching-modern-horizontal-landscape-restaurant-food-flyer-template-design-02_647347-61.jpg?w=740',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit accusantium sed aliquam ut consectetur harum tenetur sequi magnam dignissimos, dolorum perspiciatis, debitis vero qui, sint quaerat? Explicabo, reiciendis, rerum saepe nobis facilis temporibus pariatur quas, dolorem nihil voluptatem aspernatur. Eius!',
    livecode: 'https://genuine-crostata-91ee9b.netlify.app/',
    sourcecode: 'https://github.com/DiamondNath07/Microsoft-start.git',
  },
];

projectList.map(
  ({
    id,
    modalTitle,
    links,
    projectImg,
    text,
    summary,
    livecode,
    sourcecode,
  }) => {
    const element = document.createElement('div');
    const att = document.createAttribute('class');
    att.value = 'caad';
    element.setAttributeNode(att);
    element.innerHTML = `
 <div class="write-up">
        <p id="title">${modalTitle}</p>
        <p>${summary}</p>
        <ul class="lang">
          <li><a href="#">${links[0]}</a></li>
          <li><a href="#">${links[1]}</a></li>
          <li><a href="#">${links[2]}</a></li>
        </ul>
        </div>
        <div class="caad-btn">
          <button type="button" class="modal-btn" >See Project</button>
        </div>
`;
    projectCards.appendChild(element);
    const modalBot = document.querySelectorAll('.modal2-btn');
    modalBot.forEach((btn) => {
      btn.addEventListener('click', () => {
        modalbg.classList.add('open-modalbg');
        // do something
      });

      xClose.addEventListener('click', () => {
        modalbg.classList.remove('open-modalbg');
      });
    });
  }
);
