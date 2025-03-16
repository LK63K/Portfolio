document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".header-menu");
    const menuIcon = document.querySelector("header .material-icons");
    const menuLinks = document.querySelectorAll(".header-menu a");


    const toggleMenu = () => {
        menu.classList.toggle("active");
        menuIcon.innerHTML = menu.classList.contains("active") ? "close" : "menu";
    };

    
    menuIcon.addEventListener("click", toggleMenu);


    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
            menuIcon.innerHTML = "menu";
        });
    });
});
