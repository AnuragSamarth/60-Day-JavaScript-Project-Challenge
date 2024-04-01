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

function page7VideoAnimation(){
let sections =  document.querySelectorAll(".section-right");
sections.forEach(elem => {
    elem.addEventListener("mouseenter", (e)=>{
       elem.childNodes[3].style.opacity = 1
       elem.childNodes[3].play()
    })
    elem.addEventListener("mouseleave", (e)=>{
    elem.childNodes[3].style.opacity = 0;
    elem.childNodes[3].load();
    })
})
}
page7VideoAnimation()


function page8Animation(){
const page8SectionLeft = document.querySelector(".page8-left");
const page8SectionImg = page8SectionLeft.querySelector(".page8-img");
const page8SectionText = page8SectionLeft.querySelector(".page8-text p")
const page8SectionRight = document.querySelector(".page8-right");
const page8SectionImgRight = page8SectionRight.querySelector(".page8-img")
const page8SectionTextRight = page8SectionRight.querySelector(".page8-text p")

page8SectionLeft.addEventListener("mouseenter", ()=>{
    let tl = gsap.timeline()
    tl.to(page8SectionText, {
        opacity: "0",
        duration: 0.5
    })
    tl.to(page8SectionImg, {
        height: "80%",
    })
})
page8SectionLeft.addEventListener("mouseleave", ()=>{
    let tl = gsap.timeline()
    tl.to(page8SectionText, {
        opacity: "1"
    })
    tl.to(page8SectionImg, {
        height: "50%",
        duration: 0.7
    })
})

page8SectionRight.addEventListener("mouseenter", ()=>{
    let tl = gsap.timeline()
    tl.to(page8SectionTextRight, {
        opacity: "0",
        duration: 0.5
    })
    tl.to(page8SectionImgRight, {
        height: "80%",
    })
})
page8SectionImgRight.addEventListener("mouseleave", ()=>{
    let tl = gsap.timeline()
    tl.to(page8SectionTextRight, {
        opacity: "1"
    })
    tl.to(page8SectionImgRight, {
        height: "50%",
        duration: 0.7
    })
})
}
page8Animation()