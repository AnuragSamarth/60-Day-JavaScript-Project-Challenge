const inputField = document.querySelector(".input-field");
const form = document.querySelector("form");
const inputFirstName = document.querySelector(".first");
const inputLastName = document.querySelector(".last");
const inputEmail = document.querySelector(".email");
const inputPassword = document.querySelector(".pass");
const inputRepassword = document.querySelector(".repass");
const checkBox = document.querySelector(".ckeckbox");
const passwordGenerateBtn = document.querySelector(".pass-btn");

form.addEventListener("submit", (e)=>{
      e.preventDefault();
      if(!inputFirstName.value){
        alert("Please enter a first name");
      }else if(!inputLastName.value){
        alert("Please enter a last name");
      }else if(!inputEmail.value){
        alert("Please enter the mail");
      }else if(!inputPassword.value){
        alert("Please enter the password");
      }else if(!inputRepassword.value){
        alert("Please enter the same password");
      }
})

passwordGenerateBtn.addEventListener("click", createStrongPassword)

function createStrongPassword(){
   
    const randomCharacter = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()?:;<=>?{}`
    let randomPassword = '';

    while( randomPassword.length != 8){
    randomPassword += randomCharacter[Math.floor(Math.random() * randomCharacter.length)];
    }
    alert(randomPassword);
}