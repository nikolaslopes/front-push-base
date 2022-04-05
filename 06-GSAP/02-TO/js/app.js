const container = document.querySelector('.container');

const header = document.querySelector('header');

gsap.from(header, {
  duration: 2,
  ease: 'back.out(5)',
  y: 500,
});

gsap.from(container, {
  duration: 2,
  ease: 'bounce.out',
  y: -900,
});
