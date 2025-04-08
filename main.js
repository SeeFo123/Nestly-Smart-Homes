let header = document.querySelector("header");
let menu = document.querySelector("header .menu");
let menuBtn = document.querySelector(".menu-btn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 650) {
        header.classList.add("scroll")
    } else {
        header.classList.remove("scroll")
    }
})

menuBtn.onclick = function () {
    menu.classList.toggle("open");
    menuBtn.classList.toggle("clicked");
}