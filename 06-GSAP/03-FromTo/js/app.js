const container = document.querySelector('.container');

const header = document.querySelector('header');

gsap.fromTo(
  header,
  {
    // * initial configs (FROM)
    opacity: 0,
    scale: 1.5,
  },
  {
    // * final configs (TO)
    opacity: 1,
    scale: 1,
    duration: 1.5,
    ease: 'bounce',
    repeat: 2, // * repeat -> repeatNumber + 1
  }
);

gsap.fromTo(
  container,
  {
    x: -400,
  },
  {
    duration: 1.5,
    x: 0,
    repeat: -1,
    yoyo: true,
  }
);
