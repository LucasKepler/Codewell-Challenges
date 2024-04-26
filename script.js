const hamburger = document.querySelector('#nav-menu');
const navMobile = document.querySelector('#nav-container-mobile');

hamburger.addEventListener("click", () =>{
    hamburger.classList.add("active");
    navMobile.classList.toggle("active");
})

const close = document.querySelector('#close');

close.addEventListener("click", () =>{
    navMobile.classList.remove("active");
})