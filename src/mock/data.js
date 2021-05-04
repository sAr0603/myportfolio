import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'sar0603  ', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Sarthak Saha portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Sarthak Saha',
  subtitle: 'CS Engineer & JS/Py/C++ Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Sarthak is passionate about modelling messy real world problems into Simple, Clean & Performant code. ',
  paragraphTwo: 'He is passionate towards Research and have plans for PhD in future',
  paragraphThree:
    'Help him 🤗 do Impactful research/work by giving him opportunity to intern @yourOrg in SDE/Research/University RA & other technical roles',
  resume: 'https://drive.google.com/file/d/12einV2qEbHWn6Tg8WuTmmS-6XWhw4GjH/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1_right2Vax.png',
    title: 'right2Vax',
    info: 'Democratizing vaccine availability information in second-wave of covid in India',
    info2:
      ' 1)Check availability without LOGGING with OTP , ' +
      ' 2)Wont confuse you by showing unavailable slots like Co-WIN 😝',
    url: 'https://sar0603.github.io/right2Vax/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2_metroexodus.png',
    title: 'metroexodus',
    info:
      " Metroexodus is a linux CLI app that helps you find & visualize the Shortest Path between Delhi Metro Stations and calculate appropriate fares, it uses Graph Data Structure & Dijkstra's Algorithm and visualized by help of graphviz",
    info2: 'Named after one of my favorite videogames smile',
    url: 'https://github.com/sAr0603/metroexodus',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3_noDB.png',
    title: 'noDB',
    info: 'noDB is an implementation of password-less authentication of user.',
    info2:
      'Achieved without using any dB,promoting horizontal scalability. This is achieved by using the power of JWT(Json Web Tokens).',
    url: 'https://github.com/sAr0603/noDB',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Impressed or feeling benevolent 🥺 ? Contact me :D ! 👇',
  btn: 'Linkedin',
  email: 'https://www.linkedin.com/in/sarthaksaha06/',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/sarthaksaha06/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/sAr0603',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
