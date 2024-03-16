let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = ()=>{
    const totalItem = document.querySelector('#card-count');
    totalItem.innerHTML =  basket.map(elem => elem.item).reduce((x,y) => (x+y),0)
}
calculation();