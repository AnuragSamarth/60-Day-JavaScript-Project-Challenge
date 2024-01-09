const messageText = document.querySelector(".messageText");
const enterPassword = document.querySelector("#enterPassword");
const confirmPassword  = document.querySelector("#confirmPassword");
const submitBtn = document.querySelector(".submitBtn");
const passwordForm = document.querySelector(".passwordForm");
const messageText1 = document.querySelector(".messageText1");
const name = document.querySelector(".inputField");
const showPassword = document.querySelector(".showPassword");

submitBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    const passwordValue = enterPassword.value;
    const passwordConfirm = confirmPassword.value;
    const nameValue = name.value;
    if(passwordValue !== "" && passwordConfirm !== "" && nameValue !== "" ){
    if(passwordValue != passwordConfirm){
        setTimeout(()=>{
            messageText.innerHTML = "Password is incorrect"
              messageText.classList.add('messageText1');
              messageText.style.backgroundColor = "red";
              setTimeout(()=>{
                messageText.innerHTML = ""
                messageText.classList.remove('messageText1');
                // messageText.style.backgroundColor = "red";
              },3000)
        })
    }else{
            messageText.innerHTML = "Password is correct"
              messageText.classList.add('messageText1');
              messageText.style.backgroundColor = "green";
            setTimeout(() => {
                messageText.innerHTML = ""
                messageText.classList.remove('messageText1');
            }, 3000);
    } 
} else{
    messageText.innerHTML = "Plz enter the below field"
              messageText.classList.add('messageText1');
              messageText.style.backgroundColor = "yellow";
            setTimeout(() => {
                messageText.innerHTML = ""
                messageText.classList.remove('messageText1');
            }, 3000);
}
});


// Create showing password field
showPassword.addEventListener('click',()=>{
   if(enterPassword.type === 'password'){
    enterPassword.type = 'text';
   }else{
    enterPassword.type = 'password';
   }
})
