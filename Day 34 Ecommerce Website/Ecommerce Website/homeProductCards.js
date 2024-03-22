const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate");

export const showProductContainer = (products) => {
      if(!products){
        return false;
      }
      products.forEach((currProd) => {
        const {brand,category,description,id,image,name,price,stock}=currProd;

        const productClone = document.importNode(productTemplate.content, true);
        // console.log(productClone)

        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productImage").alt = name;
        productClone.querySelector(".productDescription").textContent = description;
        productClone.querySelector(".productStock").textContent = stock;
        productClone.querySelector(".productPrice").textContent = `₹${price}`;
        productClone.querySelector(".productActualPrice").textContent = `${price*2}`

        productContainer.append(productClone);
      });
  
}