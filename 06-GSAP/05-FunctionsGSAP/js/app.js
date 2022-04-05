const header = document.querySelector('header');
const items = document.querySelectorAll('.item');

gsap.fromTo(
  header,
  {
    y: -80,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    delay: 2,
  }
);

gsap.fromTo(
  items,
  {
    scale: 0.3,
    opacity: 0,
    rotate: '0deg',
  },
  {
    scale: 1,
    opacity: 1,
    rotate: '720deg',
    duration: 1,
    repeat: 1,
    onStart: function () {
      console.log('Animation started');
    },
    onUpdate: function () {
      console.log('Animation update');
    },
    onRepeat: function () {
      console.log('Animation repeat');
    },
    onComplete: function () {
      console.log('Animation finished');
    },
  }
);
