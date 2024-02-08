const inputNumber = document.querySelector(".input");
const btn = document.querySelector(".btn");
const output = document.querySelector(".output-section");
const guesses = document.querySelector(".guess");


 const randomNum = Math.floor(Math.random() * 100);


let inputValue = Number(inputNumber.value);
let numGuesses = 0;

btn.addEventListener("click", (e)=>{
   guessesNumber();
   numGuesses++;
   guesses.innerHTML = `No. of Guess: ${numGuesses}`;
})

function resetGame(){
    const randomNum = Math.floor(Math.random() * 100);
    numGuesses = 0;
    guesses.innerHTML = "No. of Guess: 0";
    output.innerHTML = "";
}

function guessesNumber(){
let inputValue = Number(inputNumber.value);

    if(inputValue > 1 && inputValue < 100){
        if(inputValue > randomNum){
            output.innerHTML = `You guessed is too High`;
            inputNumber.value = "";
        }else if(inputValue < randomNum){
            output.innerHTML = `You guessed is too Low`;
            inputNumber.value = "";
        }else{
            output.innerHTML = `Congratulation Your guessed the correct answer`;
            inputNumber.value = "";
            setTimeout(()=>{ 
                resetGame();
            },5000)
        }
    }else{
        output.innerHTML = "Enter the number between 0 and 100";
        inputNumber.value = "";
    }
}
