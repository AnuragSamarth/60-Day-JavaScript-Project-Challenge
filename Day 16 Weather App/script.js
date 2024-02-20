const apiKey = "";

const weatherDataEl = document.querySelector('#weather-data');
const cityInputEl = document.querySelector("#city-input");
const formEl = document.querySelector("form");

formEl.addEventListener('submit', (event)=>{
    event.preventDefault();
    const cityValue = cityInputEl.value;
    getWeatherData(cityValue);
})

async function getWeatherData(cityValue){
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`)

        if(!response.ok){
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        console.log(data);
        const temperature = Math.round(data.main.temp);
        
        const description = data.weather[0].description;

        const icon = data.weather[0].icon;

        const details = [
            `Feels like: ${Math.main.feels_like}`,
            `Humidity: ${data.main.humidity}`,
            `Wind speed: ${data.wind.speed}`,
        ]

        weatherDataEl.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Wheather Icon">`;

        weatherDataEl.querySelector(".temperature").textContent = `${temperature}°C`;
        weatherDataEl.querySelector(".description").textContent = `${description}°C`;


    } catch (error) {
        
    }
}


// https://my.meteoblue.com/packages/basic-1h_basic-day?apikey=Q3YWtLwBUgdRSpIk&lat=18.5196&lon=73.8553&asl=554&format=json

// https://www.meteoblue.com/en/server/search/query3?query=basel&apikey=DEMOKEY.

