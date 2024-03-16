const productSection = document.querySelector('.product-sections');
// console.log(productSection);

let basket = JSON.parse(localStorage.getItem("data")) || [];

const generateProducts = ()=>{
    return (productSection.innerHTML = productArray.map(arr =>{
        let {id, name,price,disc,img} = arr;
        let search = basket.find((x) => x.id === id) || [];
        return `<div id=product-id-${id}  class="product">
       <div class="img-div">
         <img
           src="${img}"
           alt=""
         />
       </div>
       <div class="details">
         <h4>${name}</h4>
         <p>${disc}</p>
       </div>
       <div class="price-add-section">
         <div class="price"><h3>$${price}</h3></div>
         <div class="add-card">
           <button id='dec' onclick="decrement(${id})">-</button>
           <span id=${id}>${search.item === undefined ? 0 : search.item}</span>
           <button id="inc" onclick="increment(${id})">+</button>
         </div>
       </div>
     </div>
    `
}).join(''))
}
generateProducts();

const increment = (id)=>{
    let selectedItem = id;
//   console.log(selectedItem.id)
   let search = basket.find((x) => x.id === selectedItem.id);
    if(search === undefined){
        basket.push({
            id: selectedItem.id,
            item: 1
        })
    }else{
        search.item += 1;
    }
    // console.log(basket);
    update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(basket));
};

const decrement = (id)=>{
    let selectedItem = id;
    // console.log(selectedItem.id)
    let search = basket.find((x) => x.id === selectedItem.id);

    if(search === undefined) return;
    else if(search.item === 0) return; 
    else{
        search.item -= 1;
    }
    update(selectedItem.id)
    basket = basket.filter((x) => x.item !== 0);
    // console.log(basket);
    localStorage.setItem("data", JSON.stringify(basket));
};

const update = (id)=>{
    //    console.log(id)
       let search = basket.find((x) => x.id === id);
    //    console.log(search)
    document.getElementById(id).innerHTML = search.item;
    calculation();
}

let calculation = ()=>{
    const totalItem = document.querySelector('#card-count');
    totalItem.innerHTML =  basket.map(elem => elem.item).reduce((x,y) => (x+y),0)
}
calculation();
