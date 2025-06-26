const iconHamburger = document.querySelector(".icon-hamburger");
const hamburgerBtn = iconHamburger.closest("button");
const mobileMenu = document.getElementById("mobileMenu");
const closeIcon = document.querySelector(".close-icon");
const planetButton = document.querySelectorAll(".tab-list-btn");
const planetName = document.getElementById("planetName");


/*mobile menu*/

iconHamburger.addEventListener("click", ()=> {
    mobileMenu.classList.add('active');
    hamburgerBtn.setAttribute("aria-expanded", "true");
});

closeIcon.addEventListener("click", ()=> {
    mobileMenu.classList.remove('active');
    hamburgerBtn.setAttribute("aria-expanded", "false");
});




planetButton.forEach((planet, index) => {
    console.log(planetButton);
    planetButton[1].addEventListener("click", ()=> {
        alert("hi");
    });
});