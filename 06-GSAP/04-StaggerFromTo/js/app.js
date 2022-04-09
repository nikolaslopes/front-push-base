const items = document.querySelectorAll('.item');

TweenMax.staggerFromTo(
  items,
  1,
  {
    // * Initial configs
    scale: 0,
    opacity: 0,
    rotate: '0deg',
  },
  {
    // * Final configs
    scale: 1,
    opacity: 1,
    ease: 'bounce.out',
    rotate: '360deg',
    repeat: -1,
    yoyo: true,
  },
  0.5
);
