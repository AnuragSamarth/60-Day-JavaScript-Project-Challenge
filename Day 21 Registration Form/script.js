const inputField = document.querySelector(".input-field");
const form = document.querySelector("form");
const inputFirstName = document.querySelector(".first");
const inputLastName = document.querySelector(".last");
const inputEmail = document.querySelector(".email");
const inputPassword = document.querySelector(".pass");
const inputRepassword = document.querySelector(".repass");

form.addEventListener("submit", (e)=>{
      e.preventDefault();
      if(!inputFirstName.value){
        alert("Please enter a first name");
      }else if(!inputLastName.value){
        alert("Please enter a last name");
      }else if(!inputEmail.value){
        alert("Please Enter the mail");
      }else if(!inputPassword.value){
        alert("Please Enter the password");
      }else if(!inputRepassword.value){
        alert("Please Enter the same password");
      }
})

const createStrongPassword = ()=>{
   
    const randomCharacter = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()?:;<=>?{}`
    let randomPassword = '';

    while( randomPassword.length != 8){
    randomPassword += randomCharacter[Math.floor(Math.random() * randomCharacter.length)];
    }
    console.log(randomPassword);
}

createStrongPassword();