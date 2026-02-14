document.querySelectorAll(".card").forEach(elem => {
  gsap.to(elem, {
    y: 10,
    scale: 0,
    opacity: 0,
    scrollTrigger:{
      trigger: elem,
      // markers:true,
      start: "top 15%",
      end: "bottom 15%",
      scrub: true
    }
  });
});

