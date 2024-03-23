import { getCartProductFromLS } from "./getCartProducts"

export const fetchQuantityFromCartLS = (id,price) =>{
    let cartProductsFromLS = getCartProductFromLS()
    
    let existingProduct = cartProductsFromLS.find((curProd) => curProd.id === id);
    
    let quantity = 1;

    if(existingProduct){
        quantity = existingProduct.quantity;
        price = existingProduct.price
    }

    return {quantity,price}
}
