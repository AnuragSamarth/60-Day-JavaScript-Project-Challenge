function page2Animation(){
const rightDiv = document.querySelectorAll(".page2-right-div")

rightDiv.forEach((elem)=>{
     elem.addEventListener("mouseenter", function(e){
         gsap.to(elem.childNodes[5], {
            opacity: 1,
            scale:1
         })
     })
    elem.addEventListener("mouseleave", function(e){
        gsap.to(elem.childNodes[5], {
            opacity: 0,
            scale: 0
         })
    })
    elem.addEventListener("mousemove", (e)=>{
    //    console.log(elem.getBoundingClientRect().y)
         gsap.to(elem.childNodes[5],{
            x:e.x - elem.getBoundingClientRect().x,
            y:e.y - elem.getBoundingClientRect().y - 100
         })
    })
})
}
page2Animation();

function page3VideoAnimation(){
let page3Center = document.querySelector(".page3-center");
let video = document.querySelector("#page3 video")

page3Center.addEventListener("click", function(){
    video.play()
    gsap.to(video, {
        transform: "scaleX(1) scaleY(1)",
        opacity: 1,
    })
})

video.addEventListener("click", ()=>{
    video.pause()
    gsap.to(video, {
        transform: "scaleX(0.7) scaleY(0)",
        opacity: 0,
    })
})
}
page3VideoAnimation()