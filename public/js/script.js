
const upArrow = document.querySelector(".up__arrow");
const navbar = document.querySelector(".navbar");
const rotate = document.querySelector(".rotar");
const colorRotate = document.querySelector(".path__color");

window.addEventListener('scroll', ()=>{
    if(window.scrollY >= 72){
        navbar.classList.add("navbar__background");
        upArrow.classList.add("arrow__desplace");
        upArrow.classList.add("up__arrow-transparent");
        colorRotate.classList.add("path__transparent");
        
        

    }else if(window.scrollY < 70){
        navbar.classList.remove("navbar__background");
        upArrow.classList.remove("arrow__desplace");
        upArrow.classList.remove("up__arrow-transparent");
        colorRotate.classList.remove("path__transparent");
        navbar.classList.add("arrow__bottom");
        rotate.classList.remove("bottom__rotate-bottom");
    }
});



let bandera = "arriba";

upArrow.addEventListener("click", ()=> {

    if(navbar.classList.contains("arrow__bottom") ){
        navbar.classList.remove("arrow__bottom");
     
    }else if(navbar.classList.contains("arrow__top")){
        navbar.classList.remove("arrow__top");

    }
    
    if(bandera == 'arriba'){

        navbar.classList.add("arrow__top");
        navbar.classList.remove("arrow__bottom");
        rotate.classList.add("bottom__rotate-bottom");
        bandera = "abajo";

    }else if(bandera == "abajo"){
        navbar.classList.add("arrow__bottom");
        navbar.classList.remove("arrow__top");
        rotate.classList.remove("bottom__rotate-bottom")
        bandera = "arriba";
    }

});