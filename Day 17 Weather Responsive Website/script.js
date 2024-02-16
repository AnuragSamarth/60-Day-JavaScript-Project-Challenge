const temperatureField = document.querySelector(".weather1");
const cityField = document.querySelector(".weather2 p");
const dateField = document.querySelector(".weather2 span");
const emojiField = document.querySelector(".weather3 img");
const weatherField = document.querySelector(".weather3 span")
const searchField = document.querySelector(".searchField");
// const form = document.querySelector("form");
const btn = document.querySelector(".btn");

// let target = 'nagpur';

btn.addEventListener("click", (e)=>{
    e.preventDefault();
    let target = searchField.value;
    fetchData(target);;
   searchField.value = '';
})

const fetchData = async(target) =>{
  try {
   const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=d7d45de7bb4445bfbc5150419241602&q=${target}&aqi=no`);
   const data = await res.json();

   console.log(data);
   
   const {current: {temp_c ,condition:{icon,text} },location: {name,localtime} } = data

   updateDom(temp_c, name,icon,text,localtime);
  } catch(e){
    alert('Location not Found'); 
  }
};

function updateDom(temperature, city,icon,text,time){
    temperatureField.innerText = temperature+'°C';
    cityField.innerText = city
    emojiField.src = icon;
    weatherField.innerText = text;
    dateField.innerText = time;
}
