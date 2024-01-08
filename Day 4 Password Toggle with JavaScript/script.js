const password = document.querySelector(".Password");
const togglePassword = document.querySelector(".eye_toggle");
const submit = document.querySelector(".submit");

submit.addEventListener("click", (e)=>{
          e.preventDefault();
})

// togglePassword.addEventListener("click", ()=>{

//       const type = togglePassword.getAttribute("type") === "password" ? "text": "password";
      
//       password.setAttribute("type", type);
//     //   console.log(password);
    
//     this.classList.toggle('fa-regular');
// })


togglePassword.addEventListener('click', ()=>{
     if(password.type === "password"){
        password.type = "text";
        // togglePassword.style.display = "display";
     }else{
      password.type = "password";
      // togglePassword.style.display = "none";
     }
})