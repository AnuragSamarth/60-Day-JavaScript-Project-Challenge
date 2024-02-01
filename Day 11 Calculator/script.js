let input = document.querySelector("#input");
let button = document.querySelectorAll("button");
let output = document.querySelector(".output");

button.forEach((element)=>{
      element.addEventListener("click", (e)=>{
       console.log(e.target.textContent);

       if(e.target.textContent === "C"){
        input.innerText = "";
        output.innerText = "";
       }else if(e.target.textContent === "<"){
         input.innerText = input.innerText.slice(0 , -1);
       }else if(e.target.textContent === "="){
        output.innerText = eval(input.innerText);
       }
       else{
        input.innerText += e.target.textContent;
       }
       input.scrollLeft = input.scrollWidth;
      })
})