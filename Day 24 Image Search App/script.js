const apiKey = 'h872whDi4f6dvj0rlQwcDbleGRnSqRJHS_Zgrb791aM';

const inputText = document.querySelector(".input-text");
const btn = document.querySelector(".btn");
const showMore = document.querySelector(".show-btn");
const imageContainer = document.querySelector(".img-container");

let page = 1;

btn.addEventListener("click", ()=>{
       let inputValue = inputText.value;
       imageSearch(inputValue);
})

async function imageSearch(inputValue){
      let res = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${inputValue}&client_id=${apiKey}`);

        if(!res.ok){
            throw Error("Some thing went wrong");
        }
      let data = await res.json();
      // console.log(data);
      let result = data.results;
      
      let clutter = '';
      result.forEach(elem =>{
        clutter += `  <div class="img-box">
        <img src="${elem.urls.small}" alt="">
       </div>`
      })
      imageContainer.innerHTML = clutter;
}