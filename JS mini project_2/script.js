window.addEventListener("mousemove", (e) => {
  let rect = document.querySelector(".rect-box");

let xVal = gsap.utils.mapRange(
    0,
    window.innerWidth,
    100 + rect.getBoundingClientRect().width / 2,
    window.innerWidth - (100 + rect.getBoundingClientRect().width / 2),
    e.clientX
  );

  gsap.to(".rect-box", {
    left: xVal+"px",
    ease: Power3,
  });


  // Rectangle color changer function 
  rect.addEventListener("mousemove", (e)=>{
    let colorChanger = e.clientX;
    rect.style.backgroundColor = `hsl(${colorChanger}, 100% , 50%)`;
  })
});
