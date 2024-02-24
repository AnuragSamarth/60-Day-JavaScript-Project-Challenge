const btn = document.querySelector(".btn");
const textChange = document.querySelector(".text-change");
let flag = 0;

btn.addEventListener("click", ()=>{
    if(flag == 0){
        textChange.innerHTML = "Friend";
        textChange.style.color = "green"; 
        btn.innerHTML = "Remove Friend";
        flag = 1;
    }else{
        textChange.innerHTML = "Stranger";
        textChange.style.color = "red"
        btn.innerHTML = "Add Friend";
        // btn.style.backgroundColor = "red";
        flag = 0;
    }
})

btn.addEventListener("mouseover", ()=>{
    if(flag == 0){
            btn.style.backgroundColor = "green";
    }else{
        btn.style.backgroundColor = "red";
    }
})

btn.addEventListener("mouseout", ()=>{
    if(flag == 0){
        btn.style.backgroundColor = "transparent";
    }else{
        btn.style.backgroundColor = "transparent";
    }
})