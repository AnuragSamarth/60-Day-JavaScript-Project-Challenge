const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let flag = 0;

function controller(x){
    flag  += flag; 
    slideshow(flag);
}

function slideshow(num){
    let slides = document.getElementsByClassName("image-slider");
    
    for(let y of slides){
     y.style.display = 'none';
    }

    slides[num].style.display = "block";
}
