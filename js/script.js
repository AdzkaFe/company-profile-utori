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

// ubah map saat berganti slider toko
const storeMarnat = document.querySelector(".map.maranatha");
const storeUtori = document.querySelector(".map.utori");

document.querySelector("#slide-2").onclick = () => {
    storeMarnat.classList.toggle(active);
};
