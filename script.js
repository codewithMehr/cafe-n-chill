let menu = document.getElementById("menu_logo");
let small = document.querySelector(".small_screen");
menu.addEventListener('click', () => {
    document.querySelector(".small_screen").classList.toggle("blue");
})