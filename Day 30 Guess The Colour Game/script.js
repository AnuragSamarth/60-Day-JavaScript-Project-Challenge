const colorCode = document.querySelector('.color-code');
const optionContainer = document.querySelector(".option-container")
const scoreContainer =  document.querySelector(".score");
let randomColor = null;
let score = 0;

function randomNumberGenerator(min , max){
   return  min + Math.floor(Math.random() * (max - min + 1))
}


function randomColorGenerator(){
    let red = randomNumberGenerator(0,255);
    let green = randomNumberGenerator(0,255);
    let blue = randomNumberGenerator(0,255);
    return `rgb(${red}, ${green}, ${blue})`
}

function incrementScore(){
    score += 1;
    scoreContainer.innerText = score;
}

function validateResult(el){
    const selectColor = el.target.style.backgroundColor;
    // console.log(selectColor); 
    if(selectColor === randomColor){
        incrementScore();
    }else{
        score = 0;
    }
    window.localStorage.setItem("score", score);
    startGame();
}

function startGame(){
    score =Number(window.localStorage.getItem('score')) ?? 0;
    scoreContainer.innerText = score;
    optionContainer.innerHTML = null;
    randomColor = randomColorGenerator();
    colorCode.innerText = randomColor;

    const ansIndex = randomNumberGenerator(0,5);

    for(let i = 0; i<6; i++){
        const div = document.createElement("div");
        div.addEventListener('click', validateResult)
        div.style.backgroundColor = i === ansIndex ? randomColor : randomColorGenerator(); 
        optionContainer.append(div);
    }
}

window.addEventListener('load' , startGame());
