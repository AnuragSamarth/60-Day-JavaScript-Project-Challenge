const btn = document.getElementById('btn');
const box = document.getElementById('box');
 
btn.addEventListener('click', function(){
   const backGroundColor =  changeBg();
   box.style.backgroundColor = backGroundColor;
});

// function changeBg(){
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     return `rgb(${red},${green},${blue})`;
// }
 
        //   OR 

function changeBg(){
    const rgb = [];
    for(let i=0 ; i<3 ; i++){
     rgb.push(Math.floor(Math.random() * 255));
    }
    return `rgb(${rgb})`;
}