const label = document.querySelector("#label");
const shoppingCart = document.querySelector("#shopping-cart");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = ()=>{
    const totalItem = document.querySelector('#card-count');
    totalItem.innerHTML =  basket.map(elem => elem.item).reduce((x,y) => (x+y),0)
}
calculation();

const generateCartItem = ()=>{
    if(basket.length !== 0){
       return (shoppingCart.innerHTML = basket.map((x)=>{
        let {id,item} = x;
        let search = productArray.find((y) => y.id === id) || [];
       return `
          <div class="cart-item">
             <div class="div-img">
             <img src=${search.img} alt="img not found" />
             </div>
             <div class="details">
                <div class="title-price-x">
                  <h4>
                  <p>${search.name}</p>
                  </h4>
                  <p class="cart-item-price">$ ${search.price}</p>
                  <i class="ri-close-fill" onclick="removeItem(${id})"></i>
                </div>
                <div class="add-card">
                        <button id='dec' onclick="decrement(${id})">-</button>
                        <span id=${id}>${item}</span>
                        <button id="inc" onclick="increment(${id})">+</button>
                </div>
                <h3>$${item * search.price}</h3>
             </div>
          </div>
        `
       }).join(""))
    }else{
     shoppingCart.innerHTML = ''
     label.innerHTML = `
     <h2>Cart is Empty</h2>
     <a href="index.html">
      <button class='HomeBtn'>Back to home page</button>
     </a>
     `
    }
}

generateCartItem();

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
    generateCartItem();
    update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(basket));
totalAmount();
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
    generateCartItem();
    // console.log(basket);
    localStorage.setItem("data", JSON.stringify(basket));
totalAmount();

};

const update = (id)=>{
    //    console.log(id)
       let search = basket.find((x) => x.id === id);
    //    console.log(search)
    document.getElementById(id).innerHTML = search.item;
    calculation();
}

const removeItem = (id)=>{
      let selectedItem = id
    //   console.log(selectedItem.id)
    basket = basket.filter((x)=> x.id !== selectedItem.id);
    localStorage.setItem("data", JSON.stringify(basket));
    generateCartItem();
    calculation();
   totalAmount();
}

const totalAmount = ()=>{
    if(basket.lengtht !== 0){
     let amount = basket.map((x)=>{
        let {item,id} = x;
        let search = productArray.find((y) => y.id === id) || [];
           return item * search.price;
     }).reduce((x,y)=> x+y,0)
    //  console.log(amount);
    label.innerHTML = `
    <h2>Total Bill: $${amount}</h2>
    <button class="checkout">Checkout</button>
    <button class="removeAll" onclick="clearCart()">Clear Cart</button>
    `
    }else return
}
totalAmount();

const clearCart = ()=>{
    basket = []
    generateCartItem();
    calculation();
    localStorage.setItem("data", JSON.stringify(basket));
}