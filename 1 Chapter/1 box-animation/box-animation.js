gsap.to(".box-1", {
  x: 1200,
  duration: 2.5,
  delay: 1,
  rotate: 360,
  yoyo: true,
  backgroundColor: "violet", // --> here use camel case instead of kebab case rest almost same like css
  borderRadius: "50%", // --> % is special character therefore in double quote
  repeat: 1, // --> compulsory for yoyo and (repeat: -1) for infinite
  yoyo: true,
  scale: 0.5
});

gsap.from(".box-2", {
  x: 1200,
  duration: 3.5,
  delay: 1,
  scale: 0.5
});