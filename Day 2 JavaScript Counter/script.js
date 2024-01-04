let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach((elem)=>{
    elem.addEventListener('click', (e)=>{
       const style = e.currentTarget.classList;
       if(style.contains("Decrease")){
        count --;
       }else if(style.contains("Increase")){
       count ++;
       }else{
        count = 0;
       }
       value.textContent = count;
    })
})