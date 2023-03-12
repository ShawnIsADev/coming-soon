const bar = document.querySelectorAll(".bar")
const h1 = document.getElementById("h1")
const cube = document.querySelector(".cube")
const shadow = document.querySelector(".shadow")
const entireHamburgerMenu = document.querySelector(".toggle-hamburger-menu")

entireHamburgerMenu.addEventListener('click', animate)

function animate(){
    gsap.from(bar, {duration: 2, x: () => Math.random() * 400 - 200, rotate: -360, stagger: 0.25})
}

gsap.from(bar, {duration: 2, x: () => Math.random() * 400 - 200, rotate: 360, stagger: 0.25})
gsap.from(h1, {duration: 5, y: () => Math.random() * 400 - 200, rotate: 360, stagger: 0.25})
gsap.from(shadow, {duration: 2, y: () => Math.random() * 400 - 200, rotate: 360})
