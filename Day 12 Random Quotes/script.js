const btn = document.querySelector(".btn");
const output = document.querySelector(".output");

const quotes = ["“Failure is a great teacher and, if you are open to it, every mistake has a lesson to offer.” —Oprah Winfrey", "“If you don’t like the road you’re walking, start paving another one.” —Dolly Parton" , "“Don’t let yesterday take up too much of today.”—Will Rogers","“Keep smiling, because life is a beautiful thing and there’s so much to smile about.” —Marilyn Monroe","“Be persistent and never give up hope.” —George Lucas" , "“When we strive to become better than we are, everything around us becomes better too.” —Paulo Coelho","“Always remember that you are absolutely unique. Just like everyone else.” —Margaret Mead"];

btn.addEventListener("click", ()=>{
    randomNum = Math.floor(Math.random() * quotes.length);

    output.innerText = quotes[randomNum];
})