const btn = document.querySelector(".btn");

btn.addEventListener("click", randomQuote);

function randomQuote(){
    let randomNumber = Math.floor(Math.random() * 100);
    
    const quotes = async()=>{
       const res = await fetch(`https://api.breakingbadquotes.xyz/v1/quotes/${randomNumber}`);

       const data = res.json();

       console.log(data);
    // console.log(res);
    }

    quotes();
}