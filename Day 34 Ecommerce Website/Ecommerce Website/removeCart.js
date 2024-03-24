import { getCartProductFromLS } from "./getCartProducts"

export const removeCart = (id) =>{
    console.log(id)
    let cartProductLS = getCartProductFromLS()
    cartProductLS = cartProductLS.filter((curProd) => curProd.id !== id)

    // console.log(cartProductsFromLS)
    localStorage.setItem("cartProductFromLS", JSON.stringify(cartProductLS))
}