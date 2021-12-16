function openMenu(element){
    console.log(element);
    document.getElementsByClassName("menu-items")[0].classList.toggle("unhide");
}
function openSubmenu(element){
    console.log(element);
    document.getElementsByClassName("submenu")[0].classList.toggle("submenuUnhide");
}

function openSubmenuPlanet(element){
    console.log(element);
    document.getElementsByClassName("submenu")[0].classList.toggle("submenuUnhide-Planets");
}