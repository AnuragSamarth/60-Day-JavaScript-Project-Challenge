const messageText = document.querySelector(".messageText");
const enterPassword = document.querySelector("#enterPassword");
const confirmPassword  = document.querySelector("#confirmPassword");
const submitBtn = document.querySelector(".submitBtn");
const passwordForm = document.querySelector(".passwordForm");
const messageText1 = document.querySelector(".messageText1");

submitBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    const passwordValue = enterPassword.value;
    const passwordConfirm = confirmPassword.value;
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
            setTimeout(() => {
                messageText.innerHTML = ""
                messageText.classList.remove('messageText1');
            }, 3000);

    }
    // console.log(passwordConfirm);
    // console.log(passwordValue);
});
