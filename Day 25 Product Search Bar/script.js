const form = document.querySelector('form');
const searchProduct = document.querySelector(".search-product");
const productLsist = document.querySelector(".products-list");
const product = document.querySelectorAll(".product");
const productName = productLsist.getElementsByTagName("h4");


searchProduct.addEventListener("keyup",(e)=>{
     let searchBoxValue = e.key.toUpperCase();
    //  console.log(searchBoxValue);
    // console.log(productName.length);

    for(let i= 0; i< productName.length; i++){
        let match = productName[i];
        // console.log(match);

        if(match){
            let textValue = match.textContent || match.innerHTML;
            // console.log(textValue);

          let textIndex = textValue.toUpperCase().indexOf(searchBoxValue);
        //   console.log(textIndex);

        if(textIndex > -1){
            product[i].style.display = '';
        }else{
            product[i].style.display = "none";
        }
        }
    }
})