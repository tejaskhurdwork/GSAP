let tl = gsap.timeline()

// now you can run animation in synchronously

tl.to(".box-1", {
  x: 1200,
  duration: 2.5,
  delay: 1,
  repeat: 1, 
  yoyo: true
})

tl.to(".box-2", {
  x: 1200,
  duration: 2.5,
  delay: -0.5,
  repeat: 1, 
  yoyo: true
})


tl.to(".box-3", {
  x: 1200,
  duration: 2.5,
  delay: -0.5,
  repeat: 1, 
  yoyo: true
})
