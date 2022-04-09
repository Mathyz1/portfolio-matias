//https://github.com/Mathyz1/portfolio-matias

const btnMenu = document.querySelector("#btnMenu");
const optionsMenu = document.querySelector("nav ul");

btnMenu.addEventListener("click", e =>{
    optionsMenu.classList.toggle("active");
});