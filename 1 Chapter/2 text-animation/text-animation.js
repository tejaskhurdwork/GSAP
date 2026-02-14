gsap.from("h1", {
  opacity: 0,
  duration: 2,
  delay: 1,
  y: 20,
  stagger: 0.5 // if you -1 then text animation will get reverse first last h1 will appear followed by 2nd and 3rd h1
});