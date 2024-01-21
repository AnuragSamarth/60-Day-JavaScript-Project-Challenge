const rectangleBox = document.querySelector(".rectangle-box");

rectangleBox.addEventListener("mousemove", (e)=>{
    const rectangleLocation = rectangleBox.getBoundingClientRect();
    let insideRectVal = e.clientX - rectangleLocation.left;

    if(insideRectVal < rectangleLocation.width/2){
        let redColor = gsap.utils.mapRange(0,rectangleLocation.width/2,255,0,insideRectVal);
        gsap.to(rectangleBox,{
            backgroundColor: `rgb(${redColor},0,0)`,
            ease: Power4,
        });
    }else{
        let blueColor = gsap.utils.mapRange(rectangleLocation.width/2,rectangleLocation.width,0,255,insideRectVal);
        gsap.to(rectangleBox,{
            backgroundColor: `rgb(0,0,${blueColor})`,
            ease: Power4,
        })
    }

//    let redColor = `hsl(0, 100%, ${insideRectVal}%)`;
//     rectangleBox.style.backgroundColor = redColor;

});

rectangleBox.addEventListener("mouseleave", (e)=>{
    gsap.to(rectangleBox, {
        backgroundColor: 'white'
    })
})