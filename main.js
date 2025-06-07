const iconHamburger = document.querySelector(".icon-hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const closeIcon = document.querySelector(".close-icon");

iconHamburger.addEventListener("click", ()=> {
    mobileMenu.classList.add('active');
});

closeIcon.addEventListener("click", ()=> {
    mobileMenu.classList.remove('active');
});