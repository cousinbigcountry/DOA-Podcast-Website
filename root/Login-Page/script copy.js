'use strict';

/**
 * Toggle Function*/

const elemToggleFunc = function (elem) {elem.classList.toggle("active");}



/** NAVBAR VARIABLES */

const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const overlay = document.querySelector("[data-overlay");

const navElemArr = [navToggleBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

    navElemArr[i].addEventListener("click", function () {
        elemToggleFunc(navbar);
        elemToggleFunc(overlay);
    });
}



/** Header Sticky */

const header = document.querySelector("[data-header]");

let lastScrollPosition = 0;

window.addEventListener("scroll", function () {

    let scrollPosition = window.scrollY;

    if (scrollPosition > lastScrollPosition) {
        header.classList.remove("active");
    } else {
        header.classList.add("active");
    }

    lastScrollPosition = scrollPosition <= 0 ? 0 : scrollPosition;

});


/** FORM VALIDATION */

const input = document.querySelector("[data-input]");
const submitBtn = document.querySelector("[data-submit]");

input.addEventListener("input", function () {

    if (input.checkValidity()) {
        submitBtn.removeAttribute("disabled");
    } else {
        submitBtn.setAttribute("disabled", "");
    }

});



/**GO TOP  */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
    this.window.scrollY >= 200 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");

});


/**LOGIN/SIGN UP FORM  */

const formOpenBtn = document.querySelector("#form-open"),
home = document.querySelector(".home"),
formContainer = document.querySelector(".form-container"),
formCloseBtn = document.querySelector(".form-close"),
signupBtn = document.querySelector("#signup"),
loginBtn = document.querySelector("#login"),
pwShowHide = document.querySelector(".pw-hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));



signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
});