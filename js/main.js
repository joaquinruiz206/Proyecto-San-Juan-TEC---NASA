function openMenu(element){
    console.log(element);
    document.getElementsByTagName("nav")[0].classList.toggle("nav-disable");
}

function openSubmenu(element){
    console.log(element);
    document.getElementsByClassName("submenu")[0].classList.toggle("submenuUnhide");
}
