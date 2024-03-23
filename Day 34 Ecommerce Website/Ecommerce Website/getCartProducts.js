import { displayCartsQuantity } from "./displayCartsQuantity";

export const getCartProductFromLS = ()=>{
    let cartProducts = localStorage.getItem('cartProductLS');

    if(!cartProducts){
        return [];
    }

    cartProducts = JSON.parse(cartProducts);
    displayCartsQuantity(cartProducts);

    return cartProducts;
}