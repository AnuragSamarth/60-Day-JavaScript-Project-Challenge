const password = document.querySelector(".Password");
const togglePassword = document.querySelector(".fa-regular");
const submit = document.querySelector(".submit");

submit.addEventListener("click", (e)=>{
          e.preventDefault();
})

togglePassword.addEventListener("click", ()=>{

      const type = togglePassword.getAttribute("type") === "password" ? "text": "password";
      
      password.setAttribute("type", type);
    //   console.log(password);
    
    this.classList.toggle('fa-regular');
})