module.exports = {
  siteTitle: 'Reda Benjelloun',
  siteDescription:
    'Reda Benjelloun is an incoming Data Scientist and AI enthusiast.',
  siteKeywords:
    'Reda Benjelloun, Reda, Benjelloun, Mohamed Reda Benjelloun, data scientist, data science, Artificial Intelligence, AI, ML, python, java',
  siteUrl: 'https://redaben.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Reda Benjelloun',
  location: 'Casablanca, Morocco',
  email: 'redabenjelloun24@gmail.com',
  github: 'https://github.com/RmBenjy',
  twitterHandle: '@',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/RmBenjy',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/reda-benjelloun24//',
    },
    {
      name: 'Codepen',
      url: 'mailto:redabenjelloun24@gmail.com',
    },
  
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Other',
      url: '/#other',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};