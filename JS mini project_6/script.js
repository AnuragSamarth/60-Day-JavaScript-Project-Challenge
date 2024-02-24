const container = document.querySelector(".container");
const loveIcon = document.querySelector(".love");

container.addEventListener("dblclick" , ()=>{
    loveIcon.style.transform = 'translate(-50%,-50%) scale(1)';
    setTimeout(()=>{
    loveIcon.style.transform = 'translate(-50%,-50%) scale(0)';
    },1000)
})