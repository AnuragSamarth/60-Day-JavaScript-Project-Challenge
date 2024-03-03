const productsContainer = document.querySelector(".products-container");
const searchBar = document.querySelector(".search-bar");
let userProduct = [];


async function fetchProducts(){
    try {
        const res = await fetch(`https://dummyjson.com/products`);
        if(!res.ok){
            throw Error('Something went wrong');
        }
        let data = await res.json();
        let dataArray = data.products;
        let clutter = '';
      userProduct = dataArray.map(elem =>{
          clutter += `
          <div class="product" data-id="${1}">
          <div class="product-img">
              <img src="${elem.thumbnail}" alt="">
          </div>
          <div class="product-title">
              <h3>${elem.title}</h3>
          </div>
          <div class="product-price">
              <h5>${elem.price} RS</h5>
          </div>
      </div>
          `
       return {productTitle:elem.title};
        })
        productsContainer.innerHTML = clutter;
    } catch (error) {
        alert(error);
    }
}
fetchProducts();


searchBar.addEventListener('keyup', (e)=>{
     let filter = searchBar.value.toUpperCase();
     const product = document.querySelectorAll(".product");
     console.log(product);
        for(let i=0;i<product.length;i++){
               const productTitle = product[i].querySelector(".product-title>h3")
         
            if(productTitle){
                let productName = productTitle.textContent ||productTitle.innerHTML;

                if(productName.toUpperCase().indexOf(filter) > -1){
                   product[i].style.display = ''; 
                }else{
                    product[i].style.display = 'none';
                }
            }
        }
      
})
