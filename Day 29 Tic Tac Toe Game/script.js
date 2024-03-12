const column = document.querySelectorAll(".col");

// console.log(column);

let currentPlayer = "X";
let arr = Array(9).fill(null);
console.log(arr)

column.forEach(elem =>{
    elem.addEventListener('click', (e)=>{
        // console.log(e)
        const box = e.target;
        const id = e.target.id;
        if(arr[id] !== null) return;
        arr[id] = currentPlayer;
        box.innerText = currentPlayer;
        checkWinnerPlayer()
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; 
        // console.log(arr);

    })
})

function checkWinnerPlayer(){
   if(
       (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
       (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
       (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) ||
       (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
       (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
       (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||
       (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
       (arr[6] !== null && arr[6] == arr[4] && arr[4] == arr[2])
    ){
       document.write(`Winner is ${currentPlayer}`);
       return
    }
 
    if(!arr.some((e)=> e === null)){
        document.write(`It's a Draw!!!`);
        return;
    }
}