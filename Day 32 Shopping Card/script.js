const productArray = [
      {
        id:'khjfkds',
        name:'Unpaired red Nike sneaker',
        disc: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
        price: 45,
        img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
         id: 'akwueask',
         name: 'HeadPhone',
         disc: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
         price: 78,
         img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: 'wkfibisisdf',
        name: 'Cosmetic Branding Scene',
        disc: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
        price: 56,
        img: 'https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
       id: 'hakjsfkjdn',
       name: 'Dove',
       disc: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
       price: 60,
       img:'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      }
]

const productSection = document.querySelector('.product-sections');
// console.log(productSection);

let basket = []

const generateProducts = ()=>{
    return (productSection.innerHTML = productArray.map(arr =>{
        let {id, name,price,disc,img} = arr;
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
           <span id=${id}>0</span>
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
};

const decrement = (id)=>{
    let selectedItem = id;
    // console.log(selectedItem.id)
    let search = basket.find((x) => x.id === selectedItem.id);
    if(search.item === 0) return; 
    else{
        search.item -= 1;
    }
    // console.log(basket);
    update(selectedItem.id)
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
