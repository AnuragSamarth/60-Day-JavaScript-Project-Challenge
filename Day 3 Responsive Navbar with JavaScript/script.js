const navToggle = document.querySelector(".ri-menu-fill");
const link = document.querySelector(".page-link");


navToggle.addEventListener("click", function(e) {
    link.classList.toggle("showlink");
});
