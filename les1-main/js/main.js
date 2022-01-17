const $menu = document.querySelector(".header__menu");
const $top = document.querySelector(".top");
//
function openMenu() {
    $menu.style.display = "flex";
    $top.style.filter = "brightness(0.4)";
}

function closeMenu() {
    $menu.style.display = "none";
    $top.style.filter = "brightness(1)";
}