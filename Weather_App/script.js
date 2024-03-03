// https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=c136b4b67011119f82fda5ae7113a0e1

const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('search-btn');
const weather_img = document.querySelector('#image-set');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_error = document.querySelector('.location-not-found');

const removeWeather_box = document.querySelector('.weather-box');
const removeWeather_details = document.querySelector('.weather-details');

function checkWeather(city){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c136b4b67011119f82fda5ae7113a0e1`;

    const weather_data = fetch(`${url}`)
    .then((response)=>{
        return response.json()
    }).then((data)=>{
        temperature.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
        wind_speed.innerHTML = `${data.wind.speed}Km/h`;
        humidity.innerHTML = `${data.main.humidity}%`;
        description.innerHTML = `${data.weather[0].description}`
        console.log(data);
        if(data.cod == '200'){
        weather_img.src = `/images/${data.weather[0].main}.png`;
        }
    }).catch(()=>{
        location_error.style.display = "flex";
        weather_img.src = `/images/404.png`;
        removeWeather_box.style.display = "none";
        removeWeather_details.style.display = "none";

    });

}

searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
});