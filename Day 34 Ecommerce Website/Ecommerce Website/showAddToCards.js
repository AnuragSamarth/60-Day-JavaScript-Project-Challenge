import products from "./API/products.json"
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS"
import { getCartProductFromLS } from "./getCartProducts"
// console.log(products)

let cartProductsFromLS = getCartProductFromLS()
// console.log(cartProductsFromLS);

let filterProducts =  products.filter((elem)=>{
     return cartProductsFromLS.some((curElem) => curElem.id === elem.id)
})

// console.log(filterProducts);

const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

const showCartProduct = ()=>{
    filterProducts.forEach((elem)=>{
       const {category,id,image,name,stock,price} = elem;

       let productClone = document.importNode(templateContainer.content, true);

       productClone.querySelector("#cardValue").setAttribute("id",`card${id}`);

       const lSActualData = fetchQuantityFromCartLS(id,price)

       productClone.querySelector(".category").textContent = category;
       productClone.querySelector(".productName").textContent = name;
       productClone.querySelector(".productImage").src = image;
       productClone.querySelector(".productQuantity").textContent = lSActualData.quantity;
       productClone.querySelector(".productPrice").textContent = lSActualData.price;

       cartElement.appendChild(productClone);
    });
}

showCartProduct()