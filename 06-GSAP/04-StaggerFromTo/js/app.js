const items = document.querySelectorAll('.item');

TweenMax.staggerFromTo(
  items,
  1,
  {
    // * Initial configs
    scale: 0,
    rotate: '0deg',
  },
  {
    // * Final configs
    scale: 1,
    ease: 'bounce.out',
    rotate: '360deg',
  },
  0.5
);
