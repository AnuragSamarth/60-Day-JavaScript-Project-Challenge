const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const image = document.querySelector(".img");

btn.addEventListener("click", ()=>{
    let inputValue = input.value;
    
    image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;

})