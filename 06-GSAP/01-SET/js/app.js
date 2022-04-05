const container = document.querySelector('.container');

const title = document.getElementById('title');

gsap.set(container, {
  x: -50,
  y: -10,
});

gsap.set(title, {
  color: '#83cc',
});
