const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const imgContainer = document.querySelector(".image-container");

let flag = 0;

function controller(x){
    flag  = flag + 1; 
    slideshow(flag);
}

function slideshow(num){
    let slides = document.getElementsByClassName("image-slider");

    if(num === slides.length){
        flag = 0;
        num = 0;
    }
    if(num < 0){
        flag = slides.length - 1;
        num = slides.length - 1;
    }
    
    for(let y of slides){
     y.style.display = 'none';
    }

    slides[num].style.display = "block";
}


// color changer effect.
prev.addEventListener("click", ()=>{
     imgContainer.style.backgroundColor = colorChanger();
})
next.addEventListener("click", ()=>{
    imgContainer.style.backgroundColor = colorChanger();
});

function colorChanger(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return `rgb(${red} ${green} ${blue})`;
}