const btn = document.querySelector(".btn");
const quotesContainer = document.querySelector(".quotes-container");
const text = document.querySelector(".text");
const textAuthor = document.querySelector(".text-author");

btn.addEventListener("click", randomQuote);

function randomQuote(){
    
    const quotes = async()=>{
        try{
            const res = await fetch(`https://api.quotable.io/quotes/random`);
            if(!res.ok){
                throw Error(res.statusText);
            }
       console.log(res);
       const data = await res.json();
       console.log(data);
       const content = data[0].content;
       const author = data[0].author;
       text.innerText = content;
       textAuthor.innerText = author;
       
        }catch(error){
            console.log(error);
        }
    }
    quotes();
}