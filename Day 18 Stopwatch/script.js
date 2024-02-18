const timer = document.querySelector(".timer");
const btns = document.querySelector(".btns");

let [millisecond,second,minutes,hours] = [0,0,0,0];
let currentInterval = null;

// Event delegation method is used
btns.addEventListener("click", (e)=>{
 let className = e.target.className;
//  console.log(className);
 if(className === 'pausebtn btn'){
     pauseButton();
 } else if(className === 'startbtn btn'){
    startButton();
 } else if(className === 'resetbtn btn'){
    resetButton();
 }
});

function pauseButton(){
    clearInterval(currentInterval);
    // console.log(currentInterval);
}

function startButton(){
     if(currentInterval !== null){
        clearInterval(currentInterval);
     }
     currentInterval = setInterval(displayTimer,10);
    //  console.log(currentInterval);  
}

function resetButton(){
   clearInterval(currentInterval);
   [millisecond,second,minutes,hours] = [0,0,0,0];
   timer.innerHTML = `00 : 00 : 00 : 00`;
}

function displayTimer(){
    millisecond += 10;
    if(millisecond == 1000){
        second ++;
        millisecond =0;
        if(second == 60){
            minutes++;
            second = 0;
            if(minutes == 60){
                hours++;
                minutes =0;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = second < 10 ? "0" + second : second;
    let ms = millisecond < 10 ? "00" + millisecond : millisecond < 100 ? "0" + millisecond : millisecond;

    timer.innerHTML = `${h} : ${m} : ${s} : ${ms}` 
}