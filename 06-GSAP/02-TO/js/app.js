const container = document.querySelector('.container');

const header = document.querySelector('header');

gsap.to(header, 1, {
  y: 300,
});

gsap.to(container, 2, {
  y: -300,
});
