export const calc = (x, y) => [
  x - window.innerWidth / 2,
  y - window.innerHeight / 2,
];

export const setTranslation = (translationX, translationY) => (x, y) =>
  `translate3d(${x / translationX}px,${y / translationY}px,0)`;

export const parallaxValues = () => ({
  xy: [0, 0],
  config: {
    mass: 10,
    tension: 550,
    friction: 140,
  },
});
