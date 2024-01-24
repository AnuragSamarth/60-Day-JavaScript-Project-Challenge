const counter = document.querySelector(".counter");
const inc = document.querySelector(".inc");
const dec = document.querySelector(".dec");

let count = 0;

    inc.addEventListener("click", (e)=>{
        count++; 
        console.log(count);
        document.querySelector(".num").innerHTML = count;
    })

    dec.addEventListener("click", (e)=>{
       count--;
       console.log(count);
       document.querySelector(".num").innerHTML = count;
    });

    