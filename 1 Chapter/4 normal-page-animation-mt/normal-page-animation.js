let tl = gsap.timeline();

tl.from(".header-h1", {
  y: -30,
  opacity: 0,
  duration: 1.1,
  delay: 0.3
});

tl.from("li", {
  y: -30,
  opacity: 0,
  duration: 1,
  stagger: 0.5
});

tl.from(".main-h1", {
  y: -20,
  opacity: 0,
  duration: 1.5,
  delay: 0.1,
  scale: 0.3
});