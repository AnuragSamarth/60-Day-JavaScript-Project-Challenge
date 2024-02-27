const apiKey = 'a3213f1583e6456195577527cb5efa2d';

const searchBox = document.querySelector(".search-box");
const btn = document.querySelector(".btn");
const newsContainer = document.querySelector(".news-container");
const newsBox = document.querySelector(".news-box");

btn.addEventListener("click", ()=>{
    let input = searchBox.value;
    // console.log(input);
    newsFetch(input);
    searchBox.value = '';
});
async function newsFetch(input){
    try{
     let res = await fetch(`https://newsapi.org/v2/everything?q=${input}&from=2024-01-27&sortBy=publishedAt&apiKey=${apiKey}`);

     if(!res.ok){
        throw Error("Some thing went wrong. Please try again");
     }
     let data = await res.json();
    //  console.log(data);
    let articlesArray = data.articles;
    // console.log(articlesArray);

    let clutter = '';
    articlesArray.forEach(elem =>{
       clutter += `<div class="news-box" onclick="openNewSite">
       <div class="news-img">
       <a href="${elem.url}"><img src="${elem.urlToImage}" alt=""></a>
       </div>
       <h2>${elem.title}</h2>
       <p>${elem.description}</p>
   </div>`
    })
    newsContainer.innerHTML = clutter;
    }
    catch(error){
        alert(error);
    }
}