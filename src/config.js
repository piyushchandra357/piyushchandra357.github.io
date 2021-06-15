module.exports = {
  email: 'piyush.chandra2013@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/piyushchandra357',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/piyush.357/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/PiyushC357',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/piyushchandra357/',
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
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#8dfff5',
    navy: '#0c1728',
    darkNavy: '#040c17',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
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
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
