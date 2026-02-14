gsap.from(".page-1 .box", {
  scale: 0.2,
  duration: 2,
  rotate: -180, // --> "-" will reverse rotate it
  delay: 0.1
});

gsap.from(".page-2 .box", {
  scale: 0.2,
  duration: 2,
  rotate: -180, // --> "-" will reverse rotate it
  delay: 0.1,
  // scrollTrigger: ".page-2 .box" // --> Basic
  scrollTrigger: {
    trigger: ".page-2 .box",
    scroller: "body", // It is by default
    markers: true,
    start: "top 80%",
    end: "top 30%",
    // pin: true // --> it pins the element while scrolling 
  }
});
