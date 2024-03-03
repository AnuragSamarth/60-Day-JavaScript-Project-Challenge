const productsContainer = document.querySelector(".products-container");
const searchBar = document.querySelector(".search-bar");
// const product = document.querySelectorAll(".product");
// const productTitle = document.querySelector(".product-title")
let userProduct = [];

// console.log(product);

async function fetchProducts(){
    try {
        const res = await fetch(`https://dummyjson.com/products`);
        if(!res.ok){
            throw Error('Something went wrong');
        }
        let data = await res.json();
        let dataArray = data.products;
        // console.log(dataArray);
        // console.log(dataArray.images[0]);
        let clutter = '';
      userProduct = dataArray.map(elem =>{
        // console.log(elem.images[0]);
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

// const product = document.querySelectorAll(".product");
// console.log(product);

searchBar.addEventListener('keyup', (e)=>{
     let filter = searchBar.value.toUpperCase();
     const product = document.querySelectorAll(".product");
     console.log(product);
    //  console.log(filter); 
    //  console.log(userProduct);
        
        //   const productTitle = product.querySelectorAll(".product-title>h3")
        //      console.log(productTitle);

        for(let i=0;i<product.length;i++){
               const productTitle = product[i].querySelector(".product-title>h3")
            //  console.log(productTitle);
            if(productTitle){
                let productName = productTitle.textContent ||productTitle.innerHTML;
                // console.log(productName);

                if(productName.toUpperCase().indexOf(filter) > -1){
                   product[i].style.display = ''; 
                }else{
                    product[i].style.display = 'none';
                }
            }
        }
      
})
