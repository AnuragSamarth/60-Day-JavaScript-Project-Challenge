// document.querySelector("#main").addEventListener("mousemove", (e)=>{
//        console.log(e.clientX,  e.clientY);
// })

 
// Throttling Function
const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}
const main = document.querySelector("#main");

document.querySelector("#main").addEventListener("mousemove",
    throttleFunction((dets) => {
     let div = document.createElement("div");
       div.classList.add('imagediv');
    //    main.appendChild(div);
       div.style.left = dets.clientX+'px';
       div.style.top = dets.clientY+'px';
       document.body.appendChild(div);

       let img = document.createElement("img");
       
       img.setAttribute("src",'https://images.unsplash.com/photo-1682687982107-14492010e05e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')

       div.appendChild(img);

       gsap.to(img,{
        y:'0',
        ease: Power1,
        duration: .6
       })

       gsap.to(img,{
        y:'100',
        delay: .6,
        ease: Power1,
       })
       

       setTimeout(()=>{
         div.remove();
       }, 1000)

    }, 500));