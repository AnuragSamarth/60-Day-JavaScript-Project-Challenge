import { getCartProductFromLS } from "./getCartProducts";

export const addToCart = (event,id,stock)=>{

    let arrLocalStrageProduct = getCartProductFromLS();

    const currentProductElem = document.querySelector(`#card${id}`);
    // console.log(currentProductElem);
    let quantity = document.querySelector(".productQuantity").innerText
    ;
    let price = currentProductElem.querySelector(".productPrice").innerText;
    price = price.replace("₹", "");
    quantity = Number(quantity);
    price =Number((price * quantity).toFixed(2));

    arrLocalStrageProduct.push({ id, quantity, price })
    localStorage.setItem('cartProductLS',JSON.stringify(arrLocalStrageProduct))
}