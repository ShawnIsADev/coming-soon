// GSAP animated hamburger menu - no content
const bar = document.querySelectorAll(".bar")
const h1 = document.getElementById("h1")
const cube = document.querySelector(".cube")
gsap.from(bar, {duration: 1, y: () => Math.random() * 400 - 200, rotate: 360, stagger: 0.25})
gsap.from(h1, {duration: 5, y: () => Math.random() * 400 - 200, rotate: 360, stagger: 0.25})

