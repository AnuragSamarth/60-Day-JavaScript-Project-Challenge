const hambarger = document.querySelector(".hambarger");
const cross = document.querySelector(".xmark");

hambarger.addEventListener("click", ()=>{
    document.querySelector(".sidebar").style.display = "block";
    document.querySelector(".xmark").style.display = "block";
});

cross.addEventListener("click", ()=>{
    document.querySelector(".sidebar").style.display = "none";
    document.querySelector(".xmark").style.display = "none";

})