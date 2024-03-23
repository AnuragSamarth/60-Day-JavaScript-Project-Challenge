import { displayCartsQuantity } from "./displayCartsQuantity";
import { getCartProductFromLS } from "./getCartProducts";

getCartProductFromLS();

export const addToCart = (event,id,stock)=>{

    let arrLocalStrageProduct = getCartProductFromLS();

    const currentProductElem = document.querySelector(`#card${id}`);
    // console.log(currentProductElem);
    let quantity = document.querySelector(".productQuantity").innerText
    ;
    let price = currentProductElem.querySelector(".productPrice").innerText;
    price = price.replace("₹", "");

    let exisstingProd = arrLocalStrageProduct.find((elem)=>{
       return elem.id === id;
    })

   let totalProd = arrLocalStrageProduct.map(elem =>{
     return elem.quantity;
   }).reduce((x,y)=> x+y,0)
    
    console.log(totalProd)

    if(exisstingProd && quantity > 1){
        quantity = Number(existing.quantity) + Number(quantity)
       price = Number((price * quantity).toFixed(2));
       let updatedCart = {id, quantity, price}
        
        updatedCart = arrLocalStrageProduct.map((curProd)=>{
         return curProd.id === id ? updatedCart : curProd;
         });

         console.log(updatedCart);
         localStorage.setItem('cartProductLS',JSON.stringify(updatedCart))
         
    }

    if(exisstingProd){
        return false;
    }


    quantity = Number(quantity);
    price =Number((price * quantity).toFixed(2));

    arrLocalStrageProduct.push({ id, quantity, price })
    localStorage.setItem('cartProductLS',JSON.stringify(arrLocalStrageProduct))

    displayCartsQuantity(arrLocalStrageProduct)
}