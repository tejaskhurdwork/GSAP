gsap.from(".page-1 .box", {
  scale: 0.2,
  duration: 2,
  rotate: -180, // --> "-" will reverse rotate it
  delay: 0.1,
});


gsap.from(".page-2 .heading-1", {
  x: 700,
  duration: 3,
  scale: 0.3,
  opacity: 0,
  scrollTrigger: {
    trigger: ".page-2 .heading-1",
    scroller: "body",
    markers: true,
    start: "top 60%",
    end: "top 30%",
    scrub: 3, // value can be boolean or in the range of 1 to 5
  }
});

gsap.from(".page-2 .heading-2", {
  x: -700,
  duration: 2.5,
  scale: 0.3,
  opacity: 0,
  scrollTrigger: {
    trigger: ".page-2 .heading-2",
    scroller: "body",
    markers: true,
    start: "top 60%",
    end: "top 40%",
    scrub: 3,
  }
});