// toggle active hamburger
const navbarMenu = document.querySelector(".navbar-menu");

document.querySelector("#hamburger-menu").onclick = () => {
    navbarMenu.classList.toggle("active");
};

// tutup sidebar saat click di luar sidebar
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !navbarMenu.contains(e.target)) {
        navbarMenu.classList.remove("active");
    }
});
