const elem = document.querySelectorAll(".elem");
// console.log(elem);


elem.forEach(function(val){

    val.addEventListener("mouseenter", ()=>{
        val.childNodes[3].style.opacity = 1;
    })
    val.addEventListener("mouseleave", ()=>{
        val.childNodes[3].style.opacity = 0;
    })
    val.addEventListener("mousemove", (e)=>{
        val.childNodes[3].style.top = e.y+"px";
        val.childNodes[3].style.left = e.x+"px";
    })
})













































// const elem1Img = document.querySelector("#elem1 img");

// elem1.addEventListener("mousemove", (e)=>{
//      elem1Img.style.left = e.x+"px";
//      elem1Img.style.top = e.y+"px"; 
// })
// elem1.addEventListener("mouseover", (e)=>{
//     elem1Img.style.opacity = 1;
// })
// elem1.addEventListener("mouseleave", (e)=>{
//     elem1Img.style.opacity = 0;
// })