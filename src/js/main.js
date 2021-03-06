//https://github.com/Mathyz1/portfolio-matias

/*=================== MENU SHOW Y HIDDEN ===================*/
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* validate if constant exists*/
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

/*===== MENU HIDDEN =====*/
/* validate if constant exists*/
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

/*=================== REMOVE MENU MOBILE ===================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction(){
    const navMenu = document.getElementById("nav-menu");
    //cuando hacemos click en un nav__link, removemos la clase show-menu
    navMenu.classList.remove("show-menu");
}
navLink.forEach(n => n.addEventListener("click", linkAction));

/*=================== ACCORDION SKILLS ===================*/
const skillsContent = document.getElementsByClassName("skills__content"),
    skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills(){
    let itemClass = this.parentNode.className;

    for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = "skills__content skills__close";
    }
    if(itemClass === "skills__content skills__close"){
        this.parentNode.className = "skills__content skills__open";
    }
};

skillsHeader.forEach((el) => {
    el.addEventListener("click", toggleSkills);
})

/*=================== SCROLL SECTION ACTIVE LINK ===================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive(){
    const scrollY = window.scrollY;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        
        const sectionId = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.add("active-link");
        }else{
            document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.remove("active-link");
        }
    })
}

window.addEventListener("scroll", scrollActive);

/*=================== CHANGE BACKGROUND HEADER ===================*/
function scrollHeader(){
    const nav = document.getElementById("header");
    //cuando el scroll es mayor que 200 viewport height, agrega el scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add("scroll-header");else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*=================== SHOW SCROLL TOP ===================*/
function scrollUp(){
    const scrollup = document.getElementById("scroll-up");
    //cuando el scroll es mayor que 560 viewport height, agrega el show-scroll class to the a tag with the scroll
    if(this.scrollY >= 560) scrollup.classList.add("show-scroll");else scrollup.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*=================== DARK LIGHT THEME ===================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

//previusly selected topic (id user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

//we obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

//we validate if the user previusly chose a topic
if(selectedTheme){
    //if the validation is fulfilled, we ask what the issue was to know if we activated or desactivated the dark theme
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
    themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](darkTheme);
}

//activate / desactivate the theme manually with the button
themeButton.addEventListener("click",()=>{
    //add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    //we save the theme and the current icon that the user chose
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
})

/*=================== ENVIAR FORMULARIO ===================*/

const btnForm = document.getElementById("btn-form");
btnForm.addEventListener("click", e => {
    e.preventDefault();
    const email = encodeURIComponent(document.getElementById("email").value);
    const nombre = encodeURIComponent(document.getElementById("nombre").value);
    const asunto = encodeURIComponent(document.getElementById("asunto").value);
    const mensaje = encodeURIComponent(document.getElementById("mensaje").value);
    
    window.location.href=`mailto:matiasnrivero96@gmail.com?
                            Subject=${asunto}&body=Nombre%3A${nombre}%0D%0AEmail%3A${email}%0D%0AMensaje%3A${mensaje}`
    document.getElementById("form").submit();
});

/*=================== ANIMACION SCROLL REVEAL ===================*/
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 150,
})

sr.reveal(".profile__border");
sr.reveal(".home__data");

sr.reveal(".home__scroll", {delay: 250});

sr.reveal(".about__header");
sr.reveal(".about__img", { delay: 250});
sr.reveal(".about__data", { delay: 250});
sr.reveal(".about__buttons", { delay: 270});

sr.reveal(".skills");
sr.reveal(".skills__container", { delay: 250});

sr.reveal(".portfolio");
sr.reveal(".projects__card", { delay: 200});

sr.reveal(".contact");
sr.reveal(".contact__information", { delay: 250});
sr.reveal(".contact__form", { delay: 350});