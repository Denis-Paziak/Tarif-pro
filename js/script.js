let but_menu = document.querySelector(".burger");
let menu = document.querySelector(".nav");
but_menu.addEventListener("click", menu_func);
menu.addEventListener("click", menu_func);

function menu_func() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        but_menu.classList.remove("active");
    } else {
        menu.classList.add("active");
        but_menu.classList.add("active");
    }
}