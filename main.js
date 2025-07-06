const iconHamburger = document.querySelector(".icon-hamburger");
const hamburgerBtn = iconHamburger.closest("button");
const mobileMenu = document.getElementById("mobileMenu");
const closeIcon = document.querySelector(".close-icon");
const planetButton = document.querySelectorAll(".tab-list-btn");
const planetName = document.getElementById("planetName");
const description = document.getElementById("description");
const distance = document.getElementById("distance");
const travel = document.getElementById("travel");
const planetImage = document.querySelector(".planet-image");
const dotButton = document.querySelectorAll(".dot-indicators-btn");
const crewName = document.querySelector(".crew-name");
const crewImage = document.querySelector(".crew-img");
const crewRole = document.querySelector(".crew-position");
const crewBio = document.getElementById("crewBio");
const numberBtnList = document.querySelectorAll(".number-btn");
const techImageLandscape = document.getElementById("techImageLandscape");
const techImagePortrait = document.getElementById("techImagePortrait");
const technologyDescription = document.querySelector(".tec-paragraph");
const technologyName = document.querySelector(".technology-name");



/*mobile menu*/

iconHamburger.addEventListener("click", ()=> {
    mobileMenu.classList.add('active');
    hamburgerBtn.setAttribute("aria-expanded", "true");
});

closeIcon.addEventListener("click", ()=> {
    mobileMenu.classList.remove('active');
    hamburgerBtn.setAttribute("aria-expanded", "false");
});



/*fetching data from json*/

let globalData = [];


const fetchData = async ()=> {
    try {
        const response = await fetch ('./data.json');
        if (!response.ok) throw new
        Error ('Error fetching JSON');
        globalData = await response.json();
        console.log(globalData)
    }
    catch(error) {
        console.log('Error:', error);
    }
}

fetchData();

/*destination*/

planetButton.forEach((planet, index) => {
    planetButton[index].addEventListener("click", ()=> {
        planetButton.forEach(btn => {
            btn.setAttribute("aria-selected", "false");
        });
        planet.setAttribute("aria-selected", "true");
        updateDestination(globalData.destinations[index]);
    });
});


function updateDestination(data) {
    planetName.textContent = data.name;
    description.textContent = data.description;
    distance.textContent = data.distance;
    travel.textContent = data.travel;
    planetImage.src = data.images.png;

}


/*crew*/

dotButton.forEach((dot, index) => {
    dotButton[index].addEventListener("click", ()=> {
        dotButton.forEach(btn => {
          btn.setAttribute("aria-selected", "false");  
        });
        dot.setAttribute("aria-selected", "true");
       updateCrew(globalData.crew[index]);
    });
});


function updateCrew(data) {
    crewName.textContent = data.name;
    crewImage.src = data.images.png;
    crewRole.textContent = data.role;
    crewBio.textContent = data.bio;
}


/*technology*/

numberBtnList.forEach((number, index) => {
    numberBtnList[index].addEventListener("click", ()=> {
        numberBtnList.forEach(btn => {
            btn.setAttribute("aria-selected", "false");
        });
        number.setAttribute("aria-selected", true);
        updateTechnology(globalData.technology[index]);
    });
});


function updateTechnology(data) {
    technologyDescription.textContent = data.description;
    technologyName.textContent = data.name;
    techImageLandscape.src = data.images.landscape;
    techImagePortrait.srcset = data.images.portrait;
}