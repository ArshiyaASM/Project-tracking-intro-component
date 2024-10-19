const open_bar = document.querySelector("#open_bar");
const menu_bar = document.querySelector(".menu_bar");


open_bar.addEventListener("click" , e => {
    if(!e.currentTarget.classList.contains("close_bar")){
        menu_bar.style.display = "block";
        e.currentTarget.src = "./img/icon-close.svg";
        e.currentTarget.classList.toggle("close_bar");
    }

    else {
        menu_bar.style.display = "none";
        e.currentTarget.src = "./img/icon-hamburger.svg";
        e.currentTarget.classList.toggle("close_bar");
    }
})


window.addEventListener("resize" , e => {
    let width = window.innerWidth
    if(width > 768){
        if(open_bar.classList.contains("close_bar")){
            menu_bar.style.display = "none";
            open_bar.src = "./img/icon-hamburger.svg";
            open_bar.classList.toggle("close_bar");
        }   
    }
})