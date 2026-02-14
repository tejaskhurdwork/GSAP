gsap.to(".heading", {
  transform: "translateX(-115rem)",
  scrollTrigger: {
    trigger: ".page-2",
    pin: true,
    start: "top 0%",
    scrub: 1
  }
});