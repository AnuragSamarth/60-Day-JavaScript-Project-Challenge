const cartValue = document.querySelector("#cartValue")

export const displayCartsQuantity = (cartProducts)=>{
     return cartValue.innerHTML = ` <i class="fa-solid fa-cart-shopping"> ${cartProducts.length} </i>`
}