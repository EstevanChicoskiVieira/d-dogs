

function active(){
    const menu = document.getElementById("menu-h")
    const element = document.querySelector(".header-links")

    if(menu .checked){
        element.style.transform = 'translateX(0%)';
    } else{
        element.style.transform = 'translateX(100%)';
    }
}