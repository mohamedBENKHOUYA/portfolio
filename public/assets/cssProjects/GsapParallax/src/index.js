// import { ScrollTrigger, gsap } from 'gsap';
let all = require('gsap');

console.log(all.ScrollTrigger);
all.gsap.registerPlugin(all.ScrollTrigger);

all.gsap.to('#bg', {
  scrollTrigger: {
    scrub: 1,
  },
  scale: 1.5,
});
all.gsap.to('#man', {
  scrollTrigger: {
    scrub: 1,
  },
  scale: 0.5,
});
all.gsap.to('#mountain_left', {
  scrollTrigger: {
    scrub: 1,
  },
  x: -500
});
all.gsap.to('#mountain_right', {
  scrollTrigger: {
    scrub: 1,
  },
  x: 500
});
all.gsap.to('#clouds_1', {
  scrollTrigger: {
    scrub: 1,
  },
  x: 200
});
all.gsap.to('#clouds_2', {
  scrollTrigger: {
    scrub: 1,
  },
  x: -200
});
all.gsap.to('#text', {
  scrollTrigger: {
    scrub: 1,
  },
  y: 500
});
